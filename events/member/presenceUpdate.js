
module.exports = async (client, message, user) => {
 
  await client.updateUserInfo(message.member, {

    "users.$.name": message.member.displayName

  })
}
