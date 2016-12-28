#!/etc/node
let fs = require('fs')
let prompt = require('prompt')

let path = './data/config.json'
if (!fs.existsSync(path)) {
  var config = { token: 'TOKEN_HERE' }

  prompt.start()
  console.log('Please, provide your app token (empty to skip):')

  prompt.get(['token'], (err, result) => {
    if (!err) {
      console.log('Ok.')
      config.token = result.token
    } else {
      console.log('An error happened.')
      process.exit()
    }

    fs.writeFileSync(path, JSON.stringify(config), { mode: '664' })
  })
}
