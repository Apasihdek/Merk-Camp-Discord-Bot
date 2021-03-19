//node module requierments
const { Message } = require("discord.js"); //Allows use of the node module to interact with the discord API


//========================================================================================================================\\
//===================== from a message check if the command requested exists and execute accordingly =====================\\
//========================================================================================================================\\
//=== 1) get all the needed exports to work in ===========================================================================\\
//=== 2) sets the bots prefix so it knows what to listen for =============================================================\\
//=== 3) check if a message started with whe provided prefix, if not the message is ignored ==============================\\
//=== 4) sets a variable to the requested commands name then makes everything non case sensitive =========================\\
//=== 5) gets the matching command from the commands collection and checks if it exists, if so the command is executed ===\\
//========================================================================================================================\\
//get the modules exports to work in
module.exports = (Discord, client, message) =>
{
    const prefix = "merk-"; //sets the bots prefix
    if(!message.content.toLowerCase().startsWith(prefix) || message.author.bot) return; //checks to make sure a message starts with the bots prefix, if not it is ignored
    const args = message.content.slice(prefix.length).split(/ +/); //sets args to the requested commands name 
    const cmd = args.shift().toLocaleLowerCase(); //shifts everything to be lovercase so it isnt case sensitive
    const command = client.commands.get(cmd); //sets command to the matching command from the commands collection
    if(command) command.execute(client, message, args, Discord); //if the command exists it is then executed
}