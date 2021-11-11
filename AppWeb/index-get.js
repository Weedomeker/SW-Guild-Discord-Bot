/* eslint-env es6 */

const { readFile } = require("fs")
const { promisify } = require("util")
const readFileAsync = promisify(readFile)
const READ_OPTIONS = { encoding: "UTF-8" }
const INDEX_URL = `${__dirname}/index.html`

module.exports = async () => {
  const content = await readFileAsync(INDEX_URL, READ_OPTIONS)
  return content
}
