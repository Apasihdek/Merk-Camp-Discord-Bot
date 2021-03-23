module.exports =
{
    name: 'delete-account',
    description: "confirmation to delete the users account",
    execute(client, message, args, Discord, userid )
    {
        var allowedSender = '817919087820668968'
        if (message.author.id == allowedSender) {
            const Embed = {
            
                color: 0xf0e5bc,
                title: '**__Account Deletion__**',
                description: '**Warning this action can not be reversed, your camp will be destroyed and you will have to start over again.**',
                fields: 
                [
                    {
                        //spacer
                        name: '\u200b',
                        value: '\u200b',
                        inline: false,
                    },
                    {
                        name:  '**:white_check_mark: | Delete my account please**',
                        value: '>>> ```We are sad to see you go click the ✅ reaction to confirm you would like to delete your account``` ',
                        inline: false,
                    },
                    {
                        name: '**:x: | Nevermind I want to keep my account**',
                        value: '>>> ```Thanks for reconsidering just hit the ❌ reaction to go back to playing```',
                        inline: false,
                    },
                ]
            };
            
            
            message.channel.send({ embed: Embed }).then(message =>
            {
                
                    message.react('✅');
                    message.react('❌');
                    
                    //stuff
    
    
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
                            const Embed = 
                            {
                            
                                color: 0xf0e5bc,
                                description: 'Account has been deleted, have a good day',
                            };
                            message.channel.send({ embed: Embed })
                        } 
                        else if (emoji === '❌') 
                        {
                            const Embed = 
                            {
                            
                                color: 0xf0e5bc,
                                description: 'Thank you and enjoy continuing to play Merk Camp!',
                            };
                            message.channel.send({ embed: Embed })
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