
<<<<<<< HEAD
module.exports = async (client, message, user, userInfo) => {
=======
module.exports = async (client, message, user) => {
>>>>>>> 6ffdc14bbefc21668cd1b8781141aa9b17e637c5
 
  await client.updateUserInfo(message.member, {

    "users.$.name": message.member.displayName

  })
}
