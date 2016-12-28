#!/etc/node
let fs = require('fs')
let path = require('path')
let prompt = require('prompt')

var file = path.join(__dirname, '../data/config.json')
var config = { token: '' }
try {
  if (fs.existsSync(file)) config = require(file)
} catch (err) {
  console.log('Can\'t parse "data/config.json". Default value will be used.')
}

prompt.start()
if (config.token) console.log('Your current token is "' + config.token + '".')
console.log('Please, provide a new app token (empty to skip):')

prompt.get(['token'], (err, result) => {
  if (!err) {
    console.log('Ok.')
    if (result.token) config.token = result.token
  } else {
    console.log('An error happened.')
    process.exit()
  }

  fs.writeFileSync(file, JSON.stringify(config), { mode: '664' })
})
