const databasepath = '../discorddatabase.json'
const fs = require('fs')

module.exports = {}

module.exports.getGuildDatabase = function (guild) {
  const database = require(databasepath)
  if (typeof database.guilds[guild.id] === 'undefined') {
    console.log(`No Database for ${guild.name} found!\nGenerate base config!`)
    database.guilds[guild.id] = {
      broadcastchannels: [],
      adminusers: [],
      adminroles: []
    }
    this.updateDatabase(database.guild[guild.id], guild)
  }
  return database.guilds[guild.id]
}
module.exports.getDatabase = function () {
  return require(databasepath)
}
module.exports.updateDatabase = function (data, guild) {
  const database = require(databasepath)
  database.guilds[guild.id] = data
  fs.writeFile(databasepath, JSON.stringify(database), (err) => {
    if (err) { throw err }
    console.log('The Database has been saved!')
  })
}
