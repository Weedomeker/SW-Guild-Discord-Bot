
module.exports = async (client, oldMember, newMember) => {
  
  const data = await client.getGuild(newMember.guild)
  const position = data.users.map(e => e.id).indexOf(newMember.member.id)
  if (newMember.member.guild && position == -1)
    await client.createUser(newMember.member, newMember.guild)


}
