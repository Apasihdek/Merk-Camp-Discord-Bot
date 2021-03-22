//node module requierments
const Discord = require('discord.js'); //Allows use of the node module to interact with the discord API
const mongoose = require('mongoose'); //lets the mongoose package do its thing
require('dotenv').config(); //Allows the use of a .env file that holds any sensitive inforation relating to the bot (keys and such) 


//sets up the client and collections for commands and events
const client = new Discord.Client({partials: ['MESSAGE', 'CHANNEL', 'REACTION'] }); //Asts as a hub/starting point for the bots functions, partials allow the use of otherwise insufficent data
client.commands = new Discord.Collection(); //creates a collection to put the commands in (fancy MAP with more functions)
client.events = new Discord.Collection(); //creates a collection to put the events in (fancy MAP with more functions)


//=======================================================================================================================\\
//======================= a list of all the handlers that are then itterated over and made requierd =====================\\
//=======================================================================================================================\\
//=== 1) a list is created and 'command_handler' and 'event_handler' are passed in ======================================\\
//=== 2) the list is then used with a .forEach to go over the list items placing them in an argument called "handler" ===\\
//=== 3) as each item is itterated over the file is then made requierd along with some discord modules ==================\\
//=======================================================================================================================\\
['command_handler', 'event_handler'].forEach(handler =>
{
    require(`./handlers/${handler}`)(client, Discord); //imports the handlers with the full filepath and the other useful modules
})

//loads up the database
mongoose.connect(process.env.MONGODB_SRV,
{
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(() =>
{
    console.log('database connection success'); //logs when the DB is connected 
}).catch((err) => 
{
    console.log(err); //logs if an error occurs with the DB connection
})


client.login(process.env.DISCORD_TOKEN); //the bots token, its stored in a .env file for security reasons