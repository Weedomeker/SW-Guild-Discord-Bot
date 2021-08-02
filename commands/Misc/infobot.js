const discordVs = require("discord.js");
const { MessageEmbed } = require("discord.js");

const fs = require("fs");
module.exports.run = async (client, message) => {
  const rawdata = fs.readFileSync("package.json");
  const data = JSON.parse(rawdata);
  const msg = await message.channel.send("Ping...");
  let totalSeconds = client.uptime / 1000;
  const days = Math.floor(totalSeconds / 86400);
  totalSeconds %= 86400;
  const hours = Math.floor(totalSeconds / 3600);
  totalSeconds %= 3600;
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = Math.floor(totalSeconds % 60);
  const uptime = `${days}d ${hours}:${minutes}:${seconds}`;
  msg.delete();
  const embed = new MessageEmbed()
    .setColor("#FF9750")
    .setAuthor(`${client.user.username} Info`, client.user.avatarURL())
    .addFields(
      { name: "Mémoire", value: `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`, inline: true },
      { name: "Uptime", value: `${uptime}`, inline: true },
      { name: "\u200b", value: "\u200b", inline: true },
      { name: "Api ping:", value: `${Math.round(client.ws.ping)} ms`, inline: true },
      { name: "Bot ping", value: `${msg.createdTimestamp - message.createdTimestamp} ms`, inline: true },
      { name: "\u200b", value: "\u200b", inline: true },
      { name: "Servers", value: `${client.guilds.cache.size.toString()}`, inline: true },
      { name: "Channels", value: `${client.channels.cache.size.toString()}`, inline: true },
      { name: "Membres", value: `${client.guilds.cache.map(g => g.memberCount).reduce((a, b) => a + b)}`, inline: true },
      { name: "Version", value: `[discord.js@${discordVs.version}](https://github.com/discordjs/discord.js/releases)`, inline: true },
      { name: "Source", value: `[GitHub@${data.version}](https://github.com/Weedomeker/Orphea-Discord-Bot)`, inline: true }
    );
  message.channel.send(embed);
};

module.exports.help = {
  name: "infobot",
  description: "Info sur le bot.",
  aliases: ["infobot", "infosbots", "ibot", "stbot"],
  category: "misc",
  isAdmin: false,
  permissions: false,
  cooldown: 3,
  args: false
}
