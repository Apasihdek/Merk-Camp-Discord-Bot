# Merk Camp
Take quests, go on adventures, collect treasures and grow your merk business! Merk Camp is a discord bot game that has taken inspiration from the settings of many RPGs. The bot allows you to run a mercenary camp equipping and keeping your merks healthy as they go on various adventures! Then once you collect the rewards of their adventure you can upgrade and grow your business.

## Features
### Reaction controls
Have trouble remembering that long list of commands in depth bot games often have? No worried Merk-camp uses reaction controls allowing the user to simply click on a provided reaction to do an action

## Basic commands
- ``merk-camp`` the most important command in the game, brings up a navagatable "menu" where you can view all the information about your camp(merks, avalable missions, items, ect).
- ``merk-account`` allows you to manage your merk camp account, allowing you to make a new camp or delete your account alltogether
- ``merk-leaderboard`` pulls up a display of the top camps in the server along with your own ranking.
- ``merk-help`` provides a list of all commands that the user can use along with desriptions.
- ``merk-about`` provides some interesting insight into the games idea and insperation.

## Usage (self hosing only for now, i assume you have basic knowledge about mongo and node)
1. Make a bot  
go to https://discord.com/developers and select the new application button, then once you created a new application convert it into a bot by clicking the bot setting.
2. Invite the bot to your server  
go to https://discordapi.com/permissions.html select all the permissions (in the future this will be changed to just requierd ones) and paste in yout client id (found with the privious step) and invite it to your server
4. Make a mongobd cluster  
fo to https://www.mongodb.com/ and log into your account, then navagate through making a cluster and get the SRV
4. Download dependencies   
run ```npm install``` in the terminal and all the requierd dependencies should download
5. Make a ``.env`` file  
in the main folder make a ``.env`` file and paste in  
```DISCORD_TOKEN = <replace this all with your token>```  
```MONGODB_SRV = <replace this with your srv>```
6. Run the bot!  
in the console type ```node .``` and your bot will start right up!

