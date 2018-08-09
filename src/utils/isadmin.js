const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, '../../data/config.json');

if (!fs.existsSync(file)) {
  console.error('ERROR: "data/config.json" does not exist. run "npm run config".');
  process.exit(1);
}

const config = require(file);

module.exports = function isAdmin(id) {
  return id && config.admins && config.admins.includes(id);
};
