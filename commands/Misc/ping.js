

module.exports.run = async (client, message) => {
  const msg = await message.channel.send("Ping...");
  msg.edit(
    `Bot ping: \`${msg.createdTimestamp - message.createdTimestamp}ms\`
Api ping: \`${Math.round(client.ws.ping)} ms\``
  );
};

module.exports.help = {
  name: "ping",
  description: "Temps de réponse serveur / client.",
  aliases: "pg",
  category: "misc",
  isAdmin: false,
  permissions: false,
  cooldown: 3,
  args: false
}
