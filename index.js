// Execute packages
let Discord = require('discord.js')

// Create a client
let bot = new Discord.Client()

// Get data from files
let { token, prefix } = require('./settings/config.json')

// Handlers
let commandHandler = require('./handlers/command.handler.js')
commandHandler(bot)


// Bot On Ready
bot.once("ready", () => {
    console.log(`Logged with token`)
})



bot.login(token)