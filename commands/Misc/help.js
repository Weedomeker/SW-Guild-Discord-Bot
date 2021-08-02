
const { MessageEmbed } = require("discord.js");
const { readdirSync } = require("fs");

const categoryList = readdirSync("./commands");

module.exports.run = (client, message, args, settings) => {
  if (!args.length) {
    const embed = new MessageEmbed()
      .setColor("#36393F")
      .addField("Liste des commandes", `Liste de toutes les commandes et sous commandes disponibles.\nPour plus d'info, tapes \`${client.config.PREFIX}help <command_name>\`.`);

    for (const category of categoryList) {
      embed.addField(
        `${category}`,
        `${client.commands.filter(cat => cat.help.category === category.toLowerCase()).map(cmd => cmd.help.name).join(", ")}`
      );
    }

    return message.channel.send(embed);
  }
  const command = client.commands.get(args[0]) || client.commands.find(cmd => cmd.help.aliases && cmd.help.aliases.includes(args[0]));
  if (!command) return message.reply("Cette commande n'existe pas !");

  const embed = new MessageEmbed()
    .setColor("#36393F")
    .setTitle(`\`${command.help.name}\``)
    .addField("Description", `${command.help.description} (cd: ${command.help.cooldown} secs.)`)
    .addField("Utilisation", command.help.usage ? `${client.config.PREFIX}${command.help.name} ${command.help.usage}` : `${client.config.PREFIX}${command.help.name}`, true);

  if (command.help.aliases.length > 1) embed.addField("Alias", `${command.help.aliases.join(", ")}`, true);
  return message.channel.send(embed);
};

module.exports.help = {
  name: "help",
  description: "Liste des commandes disponibles.",
  aliases: ["h", "?"],
  category: "misc",
  isAdmin: false,
  permissions: false,
  cooldown: 3,
  usage: "<command_name>",
  args: false
}
