/* eslint-disable quote-props */
/* eslint-disable quotes */
/* eslint-env es6 */

const express = require("express")
const PORT = 6300
const app = express()
// const indexGenerate = require("./public/index-get")
const compression = require("compression")
const members = require("./public/swExporter")
const arene = require("./public/swExporter")
const activity = require("./public/swExporter")
const update = require("./public/swExporter")

app.use(compression())

// app.get("/", async (req, res) => {
//   const indexHtml = await indexGenerate()
//   res.send(indexHtml)
//   res.flush()
// })
// app.use(serveStatic(`${__dirname}/public/`, { 'index': ['index.ejs'] }))

app.set("view engine", "ejs")

app.get("/", async (req, res) => {
  const mbrs = await members.members()
  const arena = await arene.arene()
  const acti = await activity.activity()
  const updt = await update.update()
  res.render(`${__dirname}/views/index`, { members: mbrs, arene: arena, activity: acti, update: updt })
})

app.use("/public", express.static(`${__dirname}/public/`))
app.use("/css", express.static(`${__dirname}/public/css/`))
app.use("/res", express.static(`${__dirname}/public/res/`))

app.listen(process.env.PORT || PORT, () => {
  console.log(`Serveur start : ${PORT}`)
})
