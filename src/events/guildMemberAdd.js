const { Client, Interaction, EmbedBuilder } = require("discord.js");

module.exports = {
    name: "guildMemberAdd",
    /**
     * 
     * @param {Client} client 
     * @param {Interaction} interaction 
     */
    async execute(client, member) {
        const user = member.user;
        const guild = member.guild;
        const nickname = member.displayName;

        const channel = client.channels.cache.get("Channel ID"); // lobby

        const embed = new EmbedBuilder();
        channel.send(`${user}`)
        embed.setAuthor({
            name: `Welcome, ${nickname}!`,
        });
        embed.setDescription(`> Welcome to **${guild.name}**\n > We hope, you will stay with us for a long time`);
        embed.setThumbnail(user.displayAvatarURL({ format: "png", dynamic: true, size: 512 }));
        embed.setFooter({
            text: guild.name,
        });
        embed.setTimestamp();
        embed.setColor("#C71585");

        channel.send({ embeds: [embed] });
        
    }
};
