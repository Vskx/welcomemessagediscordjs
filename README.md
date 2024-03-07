# Hello!


### this is a discord.js bot that sends a welcome message to the channel if a user joins the server. You can edit the message. 😎

![](https://cdn.discordapp.com/attachments/1214969681614741527/1214985286782812180/image.png?ex=65fb1a39&is=65e8a539&hm=9645c8c18b8dd34c92ed5c9599cce412f12dcc71a7b8f5987a63989cb18963eb& "eee")
Sample appearance

------
## Instalation

- First You have to download or copy this repository.
- Next you have to put some commands ind **CMD** :
```console
npm init
npm i discord.js
npm i dotenv
npm i discord-api-types
```
- Next You have to copy your discord bot token and send it to .env file [DiscordDeveloperPortal](https://discord.com/developers/docs/intro)
```env
TOKEN="Your bot token"
```
- Then You have to edit this line with your own channel id, where welcome command will be sent
```javascript
const channel = client.channels.cache.get("Your Channel ID");
```
- you can edit the message that the bot will send in guildMemberAdd.js file
- and finally, enter the command `node index.js` in **CMD**


#### 👽
