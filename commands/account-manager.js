module.exports =
{
    name: 'newcamp',
    description: "Displays when a user does not have a camp set up",
    execute(client, message, args, Discord, )
    {
        gg = message.author.id
        const Embed = {
            
            color: 0xf0e5bc,
            title: '**__Set up a new camp!__**',
            description: '**To use the merk camp bot you need to set up a camp! Follow the below prompts to set up your camp and get to playing! If you already have a camp you can create a new one, be warned tho this will erase all the data of your old camp and you will be starting over again.**',
            fields: [
                {
                    //spacer
                    name: '\u200b',
                    value: '\u200b',
                    inline: false,
                },
                {
                    name:  '**:white_check_mark: | Create a new camp**',
                    value: '>>> ```Want to play with the merk camp bot? Want to start fresh with a new camp? Just click the ✅ reaction and you will be walked through creating your new camp!``` ',
                    inline: true,
                },
                {
                    name: '**:x: | Cancel**',
                    value: '>>> ```Dont want to make a new camp? No problem just hit the ❌ reaction.```',
                    inline: false,
                },


            ],
            timestamp: new Date(),
            footer: {
                text: 'Merk Camp | Computing Comrade',
                icon_url: 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png',
            },
        };        
        message.channel.send({ embed: Embed }).then(message =>
        {
                message.react('✅');
                message.react('❌');
                
                //stuff


                 // Set a filter to ONLY grab those reactions & discard the reactions from the bot
            const filter = (reaction, user) => 
            {
                return ['✅', '❌'].includes(reaction.emoji.name) && user.id == gg;
            };
    
            // Create the collector
            const collector = message.createReactionCollector(filter, 
            {
                max: 1,
                time: 60000
            });
    
            collector.on('end', (collected, reason) => 
            {
                if (reason === 'time') 
                {
                    message.channel.send('You did not make a choice in time, please run the command again if you want to make a choice.');
                } 
                else 
                {
                    // Grab the first reaction in the array
                    let userReaction = collected.array()[0];
                    // Grab the name of the reaction (which is the emoji itself)
                    let emoji = userReaction._emoji.name;
        
                    // Handle accordingly

                    if (emoji === '✅') 
                    {
                        message.channel.send('Glad your reaction is ✅!');
                    } 
                    else if (emoji === '❌') 
                    {
                        message.channel.send('Camp creation canceled, have a good day!');
                    } 
                    else 
                    {
                        // This should be filtered out, but handle it just in case
                        message.channel.send(`Sorry something sent wrong, please try the command again again.`);
                    }
                }
            });
        });
            

    }
}