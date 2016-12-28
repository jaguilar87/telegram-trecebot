let fs = require('fs')
let path = require('path')

// Frases
let file = path.join(__dirname, '/../../data/frases.json')
if (!fs.existsSync(file)) {
  fs.writeFileSync(file, '[]', { mode: '664' })
}

module.exports = require('../../data/frases.json')
