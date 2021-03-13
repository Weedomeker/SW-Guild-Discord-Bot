/* eslint-disable quotes */
/* eslint-disable no-octal */
/* eslint-disable no-mixed-operators */
const { MESSAGES, CHANNELS } = require("../../util/constants");
const { MessageEmbed, MessageAttachment } = require("discord.js");
const trollImg = new MessageAttachment("./assets/img/troll.png");
const defImg = new MessageAttachment("./assets/img/def.png");
const gvgImg = new MessageAttachment("./assets/img/gvg.png");
const gvoImg = new MessageAttachment("./assets/img/gvo.png");
const fs = require("fs");

module.exports.run = (client, message) => {
  setInterval(() => {
    const d = new Date();
    const weekDay = d.getDay();
    const hrs = d.getHours();
    const mins = d.getMinutes();
    const secs = d.getSeconds();

    // RAPPEL GVG ALLDAYS
    if (
      (weekDay >= 1 &&
        weekDay < 6 &&
        hrs === 09 &&
        mins === 00 &&
        secs === 00) ||
      (weekDay >= 1 &&
        weekDay < 6 &&
        hrs === 21 &&
        mins === 00 &&
        secs === 00) ||
      (weekDay === 6 && hrs === 09 && mins === 00 && secs === 00) ||
      (weekDay === 6 && hrs === 17 && mins === 00 && secs === 00)
    ) {
      const embed = new MessageEmbed()

        .setColor("#FF0000")
        .attachFiles(gvgImg)
        .setThumbnail("attachment://gvg.png")
        .addField(
          "Yo les moches",
          "Si quelqu'un peut relancer la gvg c'est cool, merci beaucoup !"
        )
        .setTimestamp()
        .setFooter(message.author.username, message.author.avatarURL());

      client.channels.cache.get(CHANNELS.DESK.id).send(embed);
    }
    // RAPPEL GVO Mercredi
    if (weekDay === 3 && hrs === 21 && mins === 30 && secs === 00) {
      const embed = new MessageEmbed()

        .setColor("#FF4E0C")
        .attachFiles(gvoImg)
        .setThumbnail("attachment://gvo.png")
        .addField(
          "Hey mes petites cailles en sucre",
          "Faut lancer les inscriptions GVO. En vous remerciant. Cordialement etc etc.."
        )
        .setTimestamp()
        .setFooter(message.author.username, message.author.avatarURL());

      client.channels.cache.get(CHANNELS.DESK.id).send(embed);
    }

    // DEF JEUDI
    if (weekDay === 4 && hrs === 21 && mins === 00 && secs === 00) {
      client.channels.cache.get(CHANNELS.ANNC.id).send("@everyone");
      const embed = new MessageEmbed()
        .setTitle("Grosses def GvG!")
        .setColor("#FF0000")
        .attachFiles(defImg)
        .setThumbnail("attachment://def.png")
        .addField(
          "Hello",
          "Merci de mettre vos grosses def avant demain matin 9h! Ceux qui ne l'ont pas fait ne seront pas inscrits!\n@everyone"
        )
        .setTimestamp()
        .setFooter(message.author.username, message.author.avatarURL());
      client.channels.cache.get(CHANNELS.ANNC.id).send(embed);
    }

    // DEF DIMANCHE
    if (weekDay === 0 && hrs === 12 && mins === 00 && secs === 00) {
      client.channels.cache.get(CHANNELS.ANNC.id).send("@everyone");
      const embed = new MessageEmbed()
        .setTitle("Inscriptions GvG à 19h30!")
        .setColor("#FF0000")
        .attachFiles(trollImg)
        .setThumbnail("attachment://troll.png")
        .addField(
          "Hello",
          `Cliquez sur l'emote si vous êtes sûrs & certains d'être assez disponible pour participer convenablement aux GvG de cette semaine.
    Et de mettre vos trolls def! Je n'inscris pas les gens qui ne les ont pas mises!`
        )
        .setTimestamp()
        .setFooter(message.author.username, message.author.avatarURL());

      client.channels.cache
        .get(CHANNELS.ANNC.id)
        .send(embed)
        .then(async msg => {
          await msg.react("☝️");
        });
    }

    // GVO Inscription
    if (weekDay === 0 && hrs === 12 && mins === 00 && secs === 02) {
      const embed = new MessageEmbed()
        .setTitle("Inscriptions Gvo 19h30!")
        .setColor("#FF4E0C ")
        .attachFiles(gvoImg)
        .setThumbnail("attachment://gvo.png")
        .addField(
          "Oyeeez Oyeeeeez !!!!!",
          `Cliquez sur l'emote pour vous inscrire en Gvo cette semaine.
        \nSoyez sûre et certain de pouvoir y participer le plus activement possible !
        \nSi vous prenez une tour, vous remplissez la déf !
        \nCheckez vos déf avant inscriptions.
        \n25 places dispos. Premier arrivé, premier servit..`
        )
        .setTimestamp()
        .setFooter(message.author.username, message.author.avatarURL());

      client.channels.cache
        .get(CHANNELS.ANNC.id)
        .send(embed)
        .then(async msg => {
          await msg.react("☝️");
        });
    }

    // ABSENTS TARTA
    if (weekDay === 3 && hrs === 12 && mins === 00 && secs === 00) {
      const readData = fs.readFileSync("config.json");
      const trueData = { start: true };
      const falseData = { start: false };
      const parseData = JSON.parse(readData);
      console.log(`Read json: ${parseData.start}`);
      if (parseData.start === true) {
        const embed = new MessageEmbed()
          .setTitle("⚠ Absence(s) Tarta ⚠")
          .setColor("#FF2000 ")
          .addField(
            "Important",
            `Si vous êtes **totalement** absent Samedi, merci de réagir à l'émote ci-dessous.\nLes absents qui n'ont pas prévenu.. Vous connaissez la suite. 🙂`
          )
          .setTimestamp()
          .setFooter(message.author.username, message.author.avatarURL());
        client.channels.cache.get(CHANNELS.ABS.id).send("@everyone");
        client.channels.cache
          .get(CHANNELS.ABS.id)
          .send(embed)
          .then(msg => {
            msg.react("☝️");
          });
        const falsedataJson = JSON.stringify(falseData);
        fs.writeFileSync("config.json", falsedataJson);
      } else {
        const truedataJson = JSON.stringify(trueData);
        fs.writeFileSync("config.json", truedataJson);
        console.log(`Update json: ${truedataJson}`);
      }
    }
  }, 1000);

  client.channels.cache.get(CHANNELS.LOG.id).send(
    "Annonces GVG et GVO lancées.\n\`Mercredi: 12h Abs Tarta / 21h30 Rappel GVO\nJeudi: 21h grosse def.\nDimanche: 12h troll def. ET Inscription GVO !!!\`"
  );
};

module.exports.help = MESSAGES.COMMANDS.MODERATION.ANNONCES;
