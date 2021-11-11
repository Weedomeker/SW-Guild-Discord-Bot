
module.exports = async (client, message, user, userInfo) => {
 
  await client.updateUserInfo(message.member, {

    "users.$.name": message.member.displayName

  })
}
