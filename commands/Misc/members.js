const { MessageEmbed } = require("discord.js");


module.exports.run = (client, message) => {

  message.guild.members.fetch().then(fetchAll => {
    const member = fetchAll.map(member => member).sort((userA, userB) => userA.joinedTimestamp - userB.joinedTimestamp);
    const user = member.map(usr => usr.user.username).join("\n");
    const embed = new MessageEmbed()
      .setColor("#ee5500")
      .addField("Membres de la guilde:", `${user}`, true)
      .setTimestamp()
      .setFooter(`${fetchAll.size} membres sur le serveur.`);
    message.channel.send(embed);
  });
};

module.exports.help = {
  name: "members",
  aliases: ["members", "mbr", "mbrs"],
  category: "misc",
  description: "Affiche la liste des membres de la guilde",
  permissions: false,
  isAdmin: false,
  cooldown: 5,
  args: false,
  usage: ""
}
