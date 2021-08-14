let Discord = require("discord.js")

module.exports = {
  name: "ping",
  desc: "Ping command.",
  
  async run (bot, msg) {
    msg.reply("Pong !  🏓")
  }
