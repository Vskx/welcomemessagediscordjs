const { Client, GatewayIntentBits, Events } = require("discord.js");

const { loadEvents, loadUpdaters, loadCommands } = require("./handler");
const { SlashCommandBuilder, EmbedBuilder, PermissionBitField, ChannelType, Colors} = require("discord.js");




const client = new Client({ intents: Object.keys(GatewayIntentBits).map((a) => { return GatewayIntentBits[a] }), });


require("dotenv").config();








loadEvents(client);









// welcome 








        /*/const tak = new ButtonBuilder()
        .setCustomId('tak')
        .setLabel('TAK')
        .setEmoji('<:tak:1206688672997445733>')
        .setStyle(ButtonStyle.Primary)

        const nie = new ButtonBuilder()
        .setCustomId('nie')
        .setLabel('NIE')
        .setEmoji('<:nie:1206673452031807593>')
        .setStyle(ButtonStyle.Secondary);

        


        const row = new ActionRowBuilder()
			.addComponents(tak, nie);

/*/









client.login(process.env.TOKEN);