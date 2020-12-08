require('dotenv').config();


console.log('Beep Boop');


const Discord = require('discord.js');
const client = new Discord.Client();

console.log(process.env.DISCORD_BOT);

/*
client.login('BOT TOKEN');

client.on('ready', readyDiscord);

function readyDiscord() {
	console.log('Connected');
}
*/
