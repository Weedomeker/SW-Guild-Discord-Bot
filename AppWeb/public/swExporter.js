/* eslint no-undef: "error" */

const { readFile, stat } = require("fs");
const { promisify } = require("util");
const moment = require("moment");
const readFileAsync = promisify(readFile);
const statAsync = promisify(stat);
const READ_OPTIONS = { encoding: "UTF-8" };

// Titre Guilde
module.exports.guildName = async () => {
  const rawData = await readFileAsync(
    "./SW_Exporter/OPH][Weedo-11182208.json",
    READ_OPTIONS
  );
  const db = JSON.parse(rawData);
  const guildInfo = db.guild.guild_info.name;
  return guildInfo;
};

// Annonce
module.exports.annonce = async () => {
  const rawData = await readFileAsync(
    "./SW_Exporter/OPH][Weedo-11182208.json",
    READ_OPTIONS
  );
  const db = JSON.parse(rawData);
  const guildInfo = db.guild.guild_info.comment;
  return guildInfo;
};

// Members classement
module.exports.members = async () => {
  const rawData = await readFileAsync(
    "./SW_Exporter/OPH][Weedo-11182208.json",
    READ_OPTIONS
  );
  const db = JSON.parse(rawData);
  const guildDb = db.guild;
  const guildMembers = guildDb.guild_members;
  const array = [];
  const array2 = [];
  const arrayWizardname = [];
  const members = [];
  // Parcourir clés
  Object.keys(guildMembers).forEach((k) => {
    array.push(guildMembers[k]);
    array2.push(guildMembers[k]);
    arrayWizardname.push(guildMembers[k]);
  });
  // Trier array2 par date
  for (let i = 0; i < array2.length; i++) {
    array2.sort(
      (a, b) => parseFloat(a.join_timestamp) - parseFloat(b.join_timestamp)
    );
    const milliseconds = `${array2[i].join_timestamp}` * 1000;
    const dateObject = new Date(milliseconds);
    const humanDateFormat = dateObject.toLocaleDateString("fr-FR");
    members.push(
      `<tr><td>${array2[i].wizard_name}</td><td>${humanDateFormat}</td></tr>`
    );
  }
  return members.join("");
};

// Arena Classement
module.exports.arene = async () => {
  const rawData = await readFileAsync(
    "./SW_Exporter/OPH][Weedo-11182208.json",
    READ_OPTIONS
  );
  const db = JSON.parse(rawData);
  const guildDb = db.guild;
  const guildMembers = guildDb.guild_members;
  const array = [];
  const arrayWizardname = [];
  const arene = [];

  // Parcourir clés
  Object.keys(guildMembers).forEach((k) => {
    array.push(guildMembers[k]);
    arrayWizardname.push(guildMembers[k]);
  });

  // Trier array par arena score
  for (let i = 0; i < array.length; i++) {
    array.sort((a, b) => parseFloat(b.arena_score) - parseFloat(a.arena_score));
    arene.push(
      `<tr><td>${array[i].wizard_name}</td><td>${array[i].arena_score}</td></tr>`
    );
  }

  return arene.join("");
};

// Activity Classement
module.exports.activity = async () => {
  const rawData = await readFileAsync(
    "./SW_Exporter/OPH][Weedo-11182208.json",
    READ_OPTIONS
  );
  const db = JSON.parse(rawData);
  const guildDb = db.guild;
  const members = guildDb.guild_members;
  const guildActivity = guildDb.guild_content_activity;

  // Parcourir les clés activity
  const activityResult = [];
  Object.keys(guildActivity).forEach((key) => {
    activityResult.push(guildActivity[key]);
    activityResult.sort((a, b) => {
      const sort = a.wizard_id - b.wizard_id;
      return sort;
    });
  });
  // Liste activity score
  const activityScore = [];
  Object.keys(activityResult).forEach((k) => {
    activityScore.push(activityResult[k].activity_score);
  });
  // Parcourir les clés members
  const membersResult = [];
  Object.keys(members).forEach((key) => {
    membersResult.push(members[key].wizard_name);
  });

  const activity = {};
  const acti = [];
  const actiResult = [];

  // Créer un nouvel objet
  for (let i = 0; i < membersResult.length; i++) {
    activity[i] = {
      name: membersResult[i],
      activity_score: activityScore[i],
    };
  }
  // Créer un tableau keys et values
  Object.keys(activity).forEach((k) => {
    acti.push(activity[k]);
    // Trier par activity_score
    acti.sort((a, b) => {
      return b.activity_score - a.activity_score;
    });
  });

  Object.keys(acti).forEach((k) => {
    actiResult.push(`<tr><td>${acti[k].name}</td><td>${acti[k].activity_score}</td></tr>`)
  })
  return actiResult.join("");
};


// Last Update
module.exports.update = async () => {
  const stats = await statAsync("./SW_Exporter/OPH][Weedo-11182208.json");
  const mtime = moment(stats.mtime).format("DD/MM/YYYY HH:mm:ss");
  return mtime;
};
