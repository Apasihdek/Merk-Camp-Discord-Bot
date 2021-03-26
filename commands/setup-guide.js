const accountModel = require('../models/account-schema');
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
                title: 'generating profile for tests ',
                description: 'testing stuff',
            };
            message.channel.send({ embed: Embed }).then( async (message)=>
            {
                let profile = await accountModel.create(
                {
                    userID: userid,
                    serverID: message.guild.id,
                    campName: 'campNameSlot',
                    campDisctict: 'City limits',
                    campLevel: 1,
                    campXp: 1,
                    campBalance: 1000,
                    merksAllowed:  2    
                })
                profile.save(); 
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