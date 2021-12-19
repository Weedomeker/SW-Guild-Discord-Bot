
module.exports = async (client, message) => {
  
  const data = await client.getGuild(message.member.guild)
  const position = data.users.map(e => e.id).indexOf(message.member.id)
  if (message.member.guild && position == -1)
    await client.createUser(message.member, message.guild)


}
