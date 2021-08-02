/* eslint-disable quote-props */
/* eslint-disable object-curly-spacing */


module.exports.run = async () => {
//   // $lte = less $qte = greater
//   await User.updateMany(
//     {"lanternes": {"$lte": 6}}, {"$set": {"lanternes": 5}}, { "multi": true }
//   );
 };

module.exports.help = {
  name: "addlantern",
  aliases: ["addlant", "addl"],
  category: "tarta",
  description: "Ajoute une lanterne à l'utilisateur",
  isAdmin: false,
  permissions: true,
  cooldown: 0,
  args: false,
  usage: "<membre>"
}