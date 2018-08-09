const fs = require('fs');
const path = require('path');

// Frases
const file = path.join(__dirname, '/../../data/frases.json');

if (!fs.existsSync(file)) {
  fs.writeFileSync(file, '[]', {mode: '664'});
}

module.exports = require('../../data/frases.json');
