const { MessageEmbed } = require("discord.js");

<<<<<<< HEAD
module.exports.run = async (client, message, userInfo) => {
  const lant = message.guild.emojis.cache.get("858040634241318972");
  const lant_nb = message.guild.emojis.cache.get("858040795318714418");
  const embed = new MessageEmbed()
    .setTitle("Lanternes restantes des membres")
    .setColor("#FF680C")
    .setTimestamp();

  await client.getUser(userInfo.lanternes).then(p => {
    p.sort((a, b) => a.lanternes > b.lanternes ? 1 : -1).splice(0, 50)
      .forEach(e => {
        if (e.lanternes === 0) {
          embed.addField(
            e.username,
            `${lant_nb}${lant_nb}${lant_nb}${lant_nb}${lant_nb}`
          );
        }
        if (e.lanternes === 1) {
          embed.addField(
            e.username,
            `${lant}${lant_nb}${lant_nb}${lant_nb}${lant_nb}`
          );
        }
        if (e.lanternes === 2) {
          embed.addField(
            e.username,
            `${lant}${lant}${lant_nb}${lant_nb}${lant_nb}`
          );
        }
        if (e.lanternes === 3) {
          embed.addField(
            e.username,
            `${lant}${lant}${lant}${lant_nb}${lant_nb}`
          );
        }
        if (e.lanternes === 4) {
          embed.addField(e.username, `${lant}${lant}${lant}${lant}${lant_nb}`);
        }
        if (e.lanternes === 5) {
          embed.addField(e.username, `${lant}${lant}${lant}${lant}${lant}`);
        }
      });
  });


  message.channel.send(embed);
=======
module.exports.run = async (client, message) => {
  // const lant = message.guild.emojis.cache.get("858040634241318972");
  // const lant_nb = message.guild.emojis.cache.get("858040795318714418");
  // const embed = new MessageEmbed()
  //   .setTitle("Lanternes restantes des membres")
  //   .setColor("#FF680C")
  //   .setTimestamp();

  // await client.getUsers(message.guild).then(p => {
  //   p.sort((a, b) => a.lanternes > b.lanternes ? 1 : -1).splice(0, 50)
  //     .forEach(e => {
  //       if (e.lanternes === 0) {
  //         embed.addField(
  //           e.username,
  //           `${lant_nb}${lant_nb}${lant_nb}${lant_nb}${lant_nb}`
  //         );
  //       }
  //       if (e.lanternes === 1) {
  //         embed.addField(
  //           e.username,
  //           `${lant}${lant_nb}${lant_nb}${lant_nb}${lant_nb}`
  //         );
  //       }
  //       if (e.lanternes === 2) {
  //         embed.addField(
  //           e.username,
  //           `${lant}${lant}${lant_nb}${lant_nb}${lant_nb}`
  //         );
  //       }
  //       if (e.lanternes === 3) {
  //         embed.addField(
  //           e.username,
  //           `${lant}${lant}${lant}${lant_nb}${lant_nb}`
  //         );
  //       }
  //       if (e.lanternes === 4) {
  //         embed.addField(e.username, `${lant}${lant}${lant}${lant}${lant_nb}`);
  //       }
  //       if (e.lanternes === 5) {
  //         embed.addField(e.username, `${lant}${lant}${lant}${lant}${lant}`);
  //       }
  //     });
  // });


  // message.channel.send(embed);
>>>>>>> 6ffdc14bbefc21668cd1b8781141aa9b17e637c5
};

module.exports.help = {
  name: "lanterns",
  aliases: ["lant", "lanternes"],
  category: "tarta",
  description: "Lanternes en cours des membres.",
  isAdmin: false,
  permissions: true,
  cooldown: 0,
  args: false,
  usage: ""
}
