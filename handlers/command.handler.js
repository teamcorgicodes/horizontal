let Discord = require('discord.js')

let { readdirSync } = require('fs')

let { prefix } = require('../settings/config.json')

module.exports = (bot) => {
    bot.commands = new Discord.Collection()

    let commandFiles = readdirSync("./commands").filter(file => file.endsWith('.js'))

    for (let file of commandFiles) {
        let command = require(`../commands/${file}`)
        bot.commands.set(command.name, command);
    }


    bot.on("message", (msg) => {
        let { author } = msg
    
        // Ignore bots
        if (author.bot) {
            return;
        }
    
        // Ignore DM's
        if (msg.channel.type === 'dm') {
            return
            msg.channel.send('Commands cannot be used on DM channels')
        }
    
        // Ignore messages without prefix
        if (!msg.content.startsWith(prefix)) return
    
        let args = msg.content.slice(prefix.length).trim().split(/ +/g)
    
        let cmd = args.shift()
    
        const command = bot.commands.get(cmd);

        if(!command) return;

        command.run(bot, msg, args).catch(err => {
          console.error(err);
        });


    
    })
}
