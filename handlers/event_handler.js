//node module requierments
const fs = require('fs'); //allows easy use of the filesystem


//============================================================================================================================================================\\
//=================================================== create a list of commands in the commands collection ===================================================\\
//============================================================================================================================================================\\
//=== 1) gets the discord client export and discord export as that is where we are working in ================================================================\\
//=== 2) loads each directory in the events folder ===========================================================================================================\\
//=== 3) loop through every file in the directories within the events folder taking a list of all js files, keeping only js files helps prevent any errors ===\\
//=== 4) for loop runs for every file detected ===============================================================================================================\\
//=== 5) a variable is set to each commands filepath =========================================================================================================\\
//=== 6) split each file at the extention and get the first half aka the event/file name =====================================================================\\
//=== 7) bind usefull modules to each of the the events allowing them to be used in the future ===============================================================\\
//============================================================================================================================================================\\
//get the modules exports to work in
module.exports = (client, Discord) =>
{
    //loads every directory within the events folder
    const load_dir = (dirs) =>
    {
        const event_files = fs.readdirSync(`./events/${dirs}`).filter(file => file.endsWith('.js')); //loops through every file in each directory and gets all javascript files

        //runs for every file grabbed by the event_files
        for(const file of event_files)
        {
            const event = require(`../events/${dirs}/${file}`); //import the full event files
            const event_name = file.split('.')[0]; //splits the file at the extention and grabs the first part (aka the name of the file)
            client.on(event_name, event.bind(null, Discord, client)); //binds usefull modules  
        }
    }
    ['client', 'guild'].forEach(e => load_dir(e)); //passes each event folder into the load_dir function
}
