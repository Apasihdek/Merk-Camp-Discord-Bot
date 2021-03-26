module.exports =
{
    name: 'readme',
    description: "Similar to the about command but provides more of an isnight into the development and story of merkcamp.",
    execute(client, message, args)
    {
        const embed = 
        {
            color: 0xf0e5bc,
            author: 
            {
                name: 'Github Project by Computing Comrade',
                icon_url: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
                url: 'https://github.com/computingcomrade/Merk-Camp-Discord-Bot',
            },
            title: '**__Merk Camp Bot__**',
            description: '**Take quests, go on adventures, collect treasures and grow your merk business! Merk Camp is a discord bot game that has taken inspiration from the settings of many RPGs. The bot allows you to run a mercenary camp equipping and keeping your merks healthy as they go on various adventures! Then once you collect the rewards of an adventure you can upgrade your merks and grow your business. The bots code has been made publically avalable on github for those who are curious and want to look into how it works to learn from it.**',
            fields: 
            [
                {
                    name: '\u200b',
                    value: '\u200b',
                    inline: false,
                },
                {
                    name:  '=======**Four Main Parts**=======',
                    value: '__Camp | Merks | Quests | Adventures__',
                    inline: true,
                },
                {
                    name: '**:tent: | Camp**',
                    value: '>>> ```The base camp your buisness is run out of, upgrading this will give you access to more missions, rewards, and merks.```',
                    inline: false,
                },
            ],
            image: 
            {
                url: 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png',
            },
            timestamp: new Date(),
            footer: 
            {
                text: 'Merk Camp | Computing Comrade',
                icon_url: 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png',
            },
        };
        
        message.channel.send({ embed: embed });
    }
}