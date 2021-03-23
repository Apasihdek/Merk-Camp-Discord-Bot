module.exports =
{
    name: 'setup-guide',
    description: "test for a message sent by the bot nly",
    execute(client, message, args, Discord, userid )
    {
        var allowedSender = '817919087820668968'
        if (message.author.id == allowedSender) 
        {
            const Embed = 
            {
                color: 0xf0e5bc,
                title: 'haha bot go brrr',
                description: 'testing stuff',
            };
            message.channel.send({ embed: Embed }).then(message =>
            {
                message.react('✅');
                message.react('❌');
                // Set a filter to ONLY grab those reactions & discard the reactions from the bot
                const filter = (reaction, user) => 
                {
                    return ['✅', '❌'].includes(reaction.emoji.name) && user.id == userid;
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
        else
        {
            const Embed = 
            {
            
                color: 0xf0e5bc,
                description: 'Sorry you do not have permission to send this command, it can only be sent by the bot',
            }; 
            message.channel.send({ embed: Embed })
        }
    }
}