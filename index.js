const Discord = require('discord.js');

const client = new Discord.Client();

//const prefix = '#';"you can change the prefix in ./events/guild/message.js"

const fs = require('fs');

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command_handler','event_handler'].forEach(handler=>{
    require(`./handlers/${handler}`)(client,Discord);
})


client.login('$TOKEN')//create your bot here 'https://discord.com/developers/applications' and replace $TOKEN with bot token