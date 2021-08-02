const { User } = require("../../models/index");

module.exports.run = async () => {
//   // $lte = less $qte = greater
//   await User.updateMany(
//     {"lanternes": {"$lte": 6}}, {"$set": {"lanternes": 0}}, { "multi": true }
//   );
 };

module.exports.help = {
  name: "removelantern",
  aliases: ["rmlant", "rl"],
  category: "tarta",
  description: "Retire une lanterne à l'utilisateur",
  isAdmin: false,
  permissions: true,
  cooldown: 0,
  args: false,
  usage: "<membre>"
}
