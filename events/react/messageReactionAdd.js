const { CHANNELS } = require("../../util/channels");


module.exports = async (client, messageReaction, user, userInfo) => {
  const { message } = messageReaction;
  const member = message.guild.members.cache.get(user.id);
  const emoji = messageReaction.emoji.name;
  const channel = message.guild.channels.cache.find(c => c.id === CHANNELS.TARTA.id);
  const nEmo = message.guild.emojis.cache.get("728730210547269736");
  const hardEmo = message.guild.emojis.cache.get("728723168545603675");
  const hellEmo = message.guild.emojis.cache.get("728723184278306849");
  const lta = message.guild.emojis.cache.get("777604674685370369");
  const ltb = message.guild.emojis.cache.get("777604674991030282");
  const ltc = message.guild.emojis.cache.get("777604675020521482");
  const ltd = message.guild.emojis.cache.get("777604674986835969");
  const lte = message.guild.emojis.cache.get("777604674823389215");

  if (messageReaction.partial) {
    await messageReaction.fetch();
    return;
  }


  if (member.user.bot) return;

  // Logs inscriptions gvg gvo.
  const d = new Date();
  const date = d.getDate() + '/' + (d.getMonth() + 1) + '/' + d.getFullYear();
  const hours = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
  const fullDate = date + ' ' + hours;

  if (emoji === "⚔️" && message.channel.id === CHANNELS.ANNC.id) {

    client.channels.cache.get(CHANNELS.LOG.id).send(`⚔️ ${member.displayName} inscrit à \`${hours}\``);
  }
  if (emoji === "🤖" && message.channel.id === CHANNELS.ANNC.id) {

    client.channels.cache.get(CHANNELS.LOG.id).send(`🤖 ${member.displayName} inscrit à \`${hours}\``);
  }
  if (emoji === "🛡️" && message.channel.id === CHANNELS.ANNC.id) {

    client.channels.cache.get(CHANNELS.LOG.id).send(`🛡️ ${member.displayName} inscrit à \`${hours}\``);
  }


  // Tarta
  if (["Normal", "Hard", "Hell"].includes(emoji) && message.channel.id === channel.id) {
    switch (emoji) {
      case "Normal":
        message.channel.send(`${member}: attaque en cours... ${nEmo}`).then(async msg => {
          await msg.react("✅");
        });
        break;
      case "Hard":
        message.channel.send(`${member}: attaque en cours... ${hardEmo}`).then(async msg => {
          await msg.react("✅");
        });
        break;
      case "Hell":
        message.channel.send(`${member}: attaque en cours... ${hellEmo}`).then(async msg => {
          await msg.react("✅");
        });
        break;
    }
  }
  if (emoji === "✅" && message.channel.id === channel.id) {
    const member = message.guild.members.cache.get(user.id);

    await message.edit(`~~${message.content}~~`);
    //console.log(member.id);
    const usr = await client.getUser(member)
    const updateLant = usr.lanternes - 1;
    // update db
    await client.updateUserInfo(member,
      {
        "users.$.lanternes": updateLant
      })

    console.log(`${member.displayName}: ${updateLant} restantes`);

    // bloque à 0 mini.
    if (usr.lanternes <= 0) {
      await client.updateUserInfo(member, 
        {
          "users.$.lanternes": 0
        })
    }
    // console.log(`${user.username}: update db ${usrLant - 1} lanternes restantes.`);
  //    if (usrLant === 5) {
  //     await message.edit(`~~${message.content}~~`);
  //     await message.react(lta);
  //     await message.react(ltb);
  //     await message.react(ltc);
  //     await message.react(ltd);
  //   }
  //   if (usrLant === 4) {
  //     await message.edit(`~~${message.content}~~`);
  //     await message.react(lta);
  //     await message.react(ltb);
  //     await message.react(ltc);
  //   }
  //   if (usrLant === 3) {
  //     await message.edit(`~~${message.content}~~`);
  //     await message.react(lta);
  //     await message.react(ltb);
  //   }
    // if (usr.lanternes === 2) {
    //   await message.edit(`~~${message.content}~~`);
    //   // await message.react(lta);
    //   await message.channel.send(`\`${member.displayName}: Dernière lanterne ! À garder pour Tarta !\``);
    // }
  //   if (usrLant <= 1) {
  //     await message.edit(`~~${message.content}~~`);
  //     await message.channel.send(`${member}: Tu n'as plus de lanternes dispo...`);
  //   }
   }
};