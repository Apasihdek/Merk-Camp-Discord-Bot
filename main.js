const Discord = require('discord.js');
const keys = require('./keys.js');

//console.log(keys.botToken)
const client = new Discord.Client();

const prefix = "$"

client.once('ready', () => 
{
    console.log('Bleep Bloop Im Online!')
});

client.on('message', message =>
{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/)
    const command = args.shift().toLocaleLowerCase();

    if(command === 'ping')
    {
        message.channel.send('pong!');
    }
});


client.login(keys.botToken());