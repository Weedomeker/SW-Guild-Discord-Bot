/* eslint no-undef: "error" */

const { readFile, stat } = require("fs")
const { promisify } = require("util")
const moment = require("moment")
const readFileAsync = promisify(readFile)
const statAsync = promisify(stat)
const READ_OPTIONS = { encoding: "UTF-8" }

// Members classement
module.exports.members = async () => {
  const rawData = await readFileAsync("./SW_Exporter/OPH][Weedo-11182208.json", READ_OPTIONS)
  const db = JSON.parse(rawData)
  const guildDb = db.guild
  const guildMembers = guildDb.guild_members
  const array = []
  const array2 = []
  const arrayWizardname = []
  const members = []
  // Parcourir clés
  Object.keys(guildMembers).forEach(k => {
    array.push(guildMembers[k])
    array2.push(guildMembers[k])
    arrayWizardname.push(guildMembers[k])
  })
  // Trier array2 par date
  for (let i = 0; i < array2.length; i++) {
    array2.sort(
      (a, b) => parseFloat(a.join_timestamp) - parseFloat(b.join_timestamp)
    )
    const milliseconds = `${array2[i].join_timestamp}` * 1000
    const dateObject = new Date(milliseconds)
    const humanDateFormat = dateObject.toLocaleDateString("fr-FR")
    members.push(`<tr><td>${array2[i].wizard_name}</td><td>${humanDateFormat}</td></tr>`)
  }
  return members.join("")
}

// Arena Classement
module.exports.arene = async () => {
  const rawData = await readFileAsync("./SW_Exporter/OPH][Weedo-11182208.json", READ_OPTIONS)
  const db = JSON.parse(rawData)
  const guildDb = db.guild
  const guildMembers = guildDb.guild_members
  const array = []
  const arrayWizardname = []
  const arene = []

  // Parcourir clés
  Object.keys(guildMembers).forEach(k => {
    array.push(guildMembers[k])
    arrayWizardname.push(guildMembers[k])
  })

  // Trier array par arena score
  for (let i = 0; i < array.length; i++) {
    array.sort((a, b) => parseFloat(b.arena_score) - parseFloat(a.arena_score))
    arene.push(`<tr><td>${array[i].wizard_name}</td><td>${array[i].arena_score}</td></tr>`)
  }

  return arene.join("")
}


// Activity Classement
module.exports.activity = async () => {
  const rawData = await readFileAsync("./SW_Exporter/OPH][Weedo-11182208.json", READ_OPTIONS)
  const db = JSON.parse(rawData)
  const guildDb = db.guild
  const guildMembers = guildDb.guild_members
  const array = []
  const arrayWizardname = []
  const guildActivity = guildDb.guild_content_activity
  const arrayActivity = []
  const arrayActivitySort = []
  const arrayActivityName = []
  const activity = []

  // Parcourir clés
  Object.keys(guildMembers).forEach(k => {
    array.push(guildMembers[k])
    arrayWizardname.push(guildMembers[k])
  })

  // Parcourir clés activity score
  Object.keys(guildActivity).forEach(k => {
    arrayActivity.push(guildActivity[k])
  })

  // Trier activity score par wizard_id
  for (let i = 0; i < arrayActivity.length; i++) {
    arrayActivity.sort(
      (a, b) => parseFloat(a.wizard_id) - parseFloat(b.wizard_id)
    )
    const activity = arrayActivity[i].activity_score
    arrayActivitySort.push(activity)
  }

  // Trier wizard_name par wizard_id
  for (let i = 0; i < arrayWizardname.length; i++) {
    arrayWizardname.sort(
      (a, b) => parseFloat(a.wizard_id) - parseFloat(b.wizard_id)
    )
    const wizardName = arrayWizardname[i].wizard_name
    arrayActivityName.push(arrayActivitySort[i] + " " + wizardName)
  }

  // Trier par score activity
  for (let i = 0; i < arrayActivityName.length; i++) {
    arrayActivityName.sort((a, b) => parseFloat(b) - parseFloat(a))
    activity.push(`<tr><td>${arrayActivityName[i]}</td></tr>`)
  }


  return activity.join("")
}

// Last Update
module.exports.update = async () => {
  const stats = await statAsync("./SW_Exporter/OPH][Weedo-11182208.json")
  const mtime = moment(stats.mtime).format("DD/MM/YYYY HH:mm:ss")
  return mtime
}
