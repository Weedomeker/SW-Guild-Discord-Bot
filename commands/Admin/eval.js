/* eslint-disable no-eval */
module.exports.run = async (client, message, args) => {
  function clean(text) {
    if (typeof text === "string")
      return text.replace(/`/g, `\`${String.fromCharCode(8203)}`).replace(/@/g, `@${String.fromCharCode(8203)}`)
    return text
  }

  if (message.author.id !== "687034327841898526") return
  const code = args.join(" ")
  const evaled = eval(code)
  const cleanCode = await clean(evaled)
  message.channel.send(cleanCode, { code: "js" })
}

module.exports.help = {
  name: "eval",
  description: "Renvoie un code js testé.",
  aliases: [""],
  category: "admin",
  isAdmin: false,
  permissions: true,
  cooldown: 3,
  usage: "<code_test_js>",
  args: true
}
