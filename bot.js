const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("562998488145592320")
setInterval(function() {
channel.send(`sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
