module.exports =
{
    name: 'account-manage',
    description: "Displays when a user does not have a camp set up",
    allowedSender: 'anyone',
    execute(client, message, args, Discord, )
    {
        userid = message.author.id
        const Embed = 
        { 
            color: 0xf0e5bc,
            title: '**__Manage your account!__**',
            description: '**Want to play the game? Want to start fresh? Wanting to delete the your game account? This is the hub to change settings for your account.**',
            fields: 
            [
                {
                    //spacer
                    name: '\u200b',
                    value: '\u200b',
                    inline: false,
                },
                {
                    name:  '**:white_check_mark: | Create a new camp**',
                    value: '>>> ```Want to play with the merk camp bot? Want to start fresh with a new camp? Just click the ✅ reaction and you will be walked through creating your new camp!``` ',
                    inline: false,
                },
                {
                    name: '**:wastebasket: | Delete account**',
                    value: '>>> ```Deleteing your account? Sad to see you go but no problem just hit the 🗑️ reaction then confirm```',
                    inline: false,
                },
                {
                    name: '**:x: | Nevermind**',
                    value: '>>> ```Dont need to edit anything? No problem just hit the ❌ reaction.... it really does nothing if im honest```',
                    inline: false,
                },
            ],
            timestamp: new Date(),
            footer: 
            {
                text: 'Merk Camp | Computing Comrade',
                icon_url: 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png',
            },
        };        
        message.channel.send({ embed: Embed }).then(message =>
        {
            message.react('✅');
            message.react('🗑️');
            message.react('❌');
             // Set a filter to ONLY grab those reactions & discard the reactions from the bot
            const filter = (reaction, user) => 
            {
                return ['✅', '❌', '🗑️'].includes(reaction.emoji.name) && user.id == userid;
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
                        client.commands.get('setup-guide').execute(client, message, args, Discord, userid );
                    } 
                    else if (emoji === '🗑️') 
                    {
                        client.commands.get('delete-account').execute(client, message, args, Discord, userid );

                    } 
                    else if (emoji === '❌') 
                    {
                        const Embed = 
                        {
                        
                            color: 0xf0e5bc,
                            description: 'Have a good day!',
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
}