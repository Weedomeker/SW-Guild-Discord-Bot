/* eslint-disable object-curly-spacing */
/* eslint-disable quote-props */
const mongoose = require("mongoose")
const { Guild } = require("../models/index")

module.exports = client => {
  // GUILD
  client.createGuild = async guild => {
    const merged = Object.assign({ _id: mongoose.Types.ObjectId() }, guild)
    const createGuild = await new Guild(merged)
    createGuild.save()
  }

  client.getGuild = async guild => {
    const data = await Guild.findOne({ guildID: guild.id })
    if (data) return data
  }

<<<<<<< HEAD
  client.getUser = async member => {
    const data = await client.getGuild(member.guild);
    const position = data.users.map(e => e.id).indexOf(member.id);
    return data.users[position];
  }

=======
>>>>>>> 6ffdc14bbefc21668cd1b8781141aa9b17e637c5
  client.updateGuild = async (guild, settings) => {
    let data = await client.getGuild(guild)
    if (typeof data !== "object") data = {}
    for (const key in settings) {
      if (data[key] !== settings[key]) data[key] = settings[key]
    }
    return data.updateOne(settings)
  }

  client.updateUserInfo = (member, options = {}) => {
    Guild.updateOne(
      { "users.id": member.id },
      { $set: options }
    ).then(c => console.log(`${member.displayName}: profil mis à jour.`))
  }

}
