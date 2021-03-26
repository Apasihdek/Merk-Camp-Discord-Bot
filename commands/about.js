module.exports =
{
    name: 'about',
    description: "Display information about the merk camp discord bot project",
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
                {
                    name: '**:crossed_swords: | Merks**',
                    value: '>>> ```The main work force of your buisness, your job is to equip them and keep them healthy as they complete Quests and Adventures.```',
                    inline: false,
                },
                {
                    name: '**:scroll: | Quests**',
                    value: '>>> ```Small low risk missions you send your merks on, these take a certain ammount of time and have a guarentted reward outcome upon completion with a small chance of finding other goods. Your merks may become injured on these quests but will always retreat back to camp without dying, a failed quest will bring no rewards.```',
                    inline: false,
                },
                {
                    name: '**:mountain_snow: | Adventures**',
                    value: '>>> ```Large high risk missions you send your merks on, these missions have interaction where you will make choices for your merks. These have a higher reward upon completion with a guarenteed of finding other goods along the way. The risk comes from the fact a bad choice can end with a Merk being killed costing you them and all their gear.```',
                    inline: false,
                },
                {
                    name: '\u200b',
                    value: '\u200b',
                    inline: false,
                },
                {
                    name:  '=====**Basic Commands**=====',
                    value: '__A few good commands to know__',
                    inline: true,
                },
                {
                    name: ':question: | **merk-help/merk-commands**',
                    value: '>>> ```Confused on how the bot works? This will message back all the bots commands along with descriptions of each command.```',
                    inline: false,
                },
                {
                    name: ':tent: | **merk-camp**',
                    value: '>>> ```Brings up all the information about your camp, this is the most important command as you can preform nearly any action through the message response fom this command.```',
                    inline: false,
                },
                {
                    name: ':newspaper: | **merk-mission-board**',
                    value: '>>> ```Quickly nagivate to the mission board and select what you want your merks to be doing.```',
                    inline: false,
                },
                {
                    name: ':trophy: | **merk-leaderboard**',
                    value: '>>> ```Curious to see how your group of merks stacks up against everyone else? This command will bring up a loeaderboard comparing your group to everyone elses in the server.```',
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