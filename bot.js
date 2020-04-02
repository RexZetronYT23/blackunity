const Discord = require("discord.js");
const config = require("./config.json")
const bot = new Discord.Client()
const prefix = config.prefix

bot.login(config.token)
console.log("Bot startet....")

bot.on("ready", () => {
    console.log("Bot ist online!")
    bot.user.setActivity("Marlon", {type: "LISTENING"})
})

bot.on("message", (msg) => {
    if (msg.content === prefix + "help") {
        msg.delete()
        let help = new Discord.MessageEmbed()

          .setTitle("Blackunity.eu")
          .setColor("")
        msg.channel.send(help)
    }
})