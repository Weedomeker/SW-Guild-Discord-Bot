
const { MessageEmbed } = require("discord.js");
const fs = require("fs");
const moment = require("moment");

module.exports.run = (client, message) => {
  const rawData = fs.readFileSync("./SW_Exporter/OPH][Weedo-11182208.json");
  const data = JSON.parse(rawData);
  const guildMembers = data.guild.guild_members;
  const stats = fs.statSync("./SW_Exporter/OPH][Weedo-11182208.json");
  const mtime = moment(stats.mtime).format("DD/MM/YYYY HH:mm:ss");
  const db = [];
  // moment.unix(guildMembers[k].join_timestamp).format("YYYY/MM/DD")
  // ⚔️

  Object.keys(guildMembers).forEach(k => {
    db.push(guildMembers[k]);
  });
  const result = [];
  for (let i = 0; i < db.length; i++) {
    db.sort((a, b) => parseFloat(a.join_timestamp) - parseFloat(b.join_timestamp));
    result.push(
      `• **${db[i].wizard_name}** - ${moment
        .unix(db[i].join_timestamp)
        .format("YYYY/MM/DD")}`
    );
  }
  const embed = new MessageEmbed()
    .setColor("#3480eb")
    // .setThumbnail(client.user.displayAvatarURL())
    .addField("🔞 Membres de la guilde 🔞\n", result)
    .setFooter(`${db.length} membres pour le moment.. \nLast Update: ${mtime}`);
  message.channel.send(embed);
};

module.exports.help = {
  name: "guilde",
  aliases: ["guilde", "gld", "g"],
  category: "misc",
  description: "Membres de la guilde (ig).",
  isAdmin: false,
  permissions: false,
  args: false
}
