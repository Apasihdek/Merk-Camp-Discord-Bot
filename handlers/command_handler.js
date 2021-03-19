//node module requierments
const fs = require('fs'); //allows easy use of the filesystem


//====================================================================================================================================================================\\
//======================================================= create a list of commands in the commands collection =======================================================\\
//====================================================================================================================================================================\\
//=== 1) gets the discord client export and discord export as that is where we are working in ========================================================================\\
//=== 2) loop through every file in the commands folder taking a list of all js files, keeping only js files helps prevent any errors ================================\\
//=== 3) for loop runs for every file detected =======================================================================================================================\\
//=== 4) a variable is set to eah commands filepath ==================================================================================================================\\
//=== 5) each file is checked to make sure it has a name set, if it has one its uploaded to the command list collection if no name is set the file is skipped over ===\\
//====================================================================================================================================================================\\
//get the modules exports to work in
module.exports = (client, Discord) =>
{
    const command_files = fs.readdirSync('./commands/').filter(file => file.endsWith('.js')); //loops through every file in the command folder and gets all javascript files
    
    //runs for every file grabbed by the command_files
    for(const file of command_files)
    {
        const command = require(`../commands/${file}`); //imports the full command files
        
        //checks to make sure the command has a name
        if(command.name)
        {
            client.commands.set(command.name, command); //sets a command list in the commands collection
        }
        else
        {
            continue; //breaks the loops itteration and continues to the next loop
        }
    }
}