const { User } = require("../../models/index");

module.exports.run = async () => {
<<<<<<< HEAD
  // $lte = less $qte = greater
  await User.updateMany(
    {"lanternes": {"$lte": 6}}, {"$set": {"lanternes": 0}}, { "multi": true }
  );
=======
//   // $lte = less $qte = greater
//   await User.updateMany(
//     {"lanternes": {"$lte": 6}}, {"$set": {"lanternes": 0}}, { "multi": true }
//   );
>>>>>>> 6ffdc14bbefc21668cd1b8781141aa9b17e637c5
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
