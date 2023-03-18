const { writeFileSync, readFileSync, readdirSync, lstatSync } = require('fs')

const folders = readdirSync('./packages').filter(file => lstatSync(`./packages/${file}`).isDirectory() === true)
folders.forEach(folder => {
  const file = readFileSync(`./packages/${folder}/package.json`, { encoding: "utf-8" })
  const json = JSON.parse(file)
  json.name = json.name.replace('@sep9/', '@sep9/monorepo-')
  writeFileSync(`./packages/${folder}/package.json`, JSON.stringify(json, undefined, 2));
})
