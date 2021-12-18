/* eslint-disable quote-props */
/* eslint-disable object-curly-spacing */


module.exports.run = async (client, message) => {
  //   // $lte = less $qte = greater
  //   await User.updateMany(
  //     {"lanternes": {"$lte": 6}}, {"$set": {"lanternes": 5}}, { "multi": true }
  //   );

   await client.updateUsers({ },
    {
      "users.$[].lanternes": 5
    })
    message.channel.send(`\`Les lanternes des membres ont été reset.\``)
};

module.exports.help = {
  name: "resetlant",
  aliases: ["resetlant", "rstlant"],
  category: "tarta",
  description: "Reset à 5 les lanternes Tarta",
  isAdmin: false,
  permissions: true,
  cooldown: 0,
  args: false,
  usage: ""
}