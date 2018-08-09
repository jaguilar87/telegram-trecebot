#!/etc/node
let fs = require('fs');
let path = require('path');
let inquirer = require('inquirer');

let folder = path.join(__dirname, '../data/');
let file = folder + 'config.json';

let config = {token: '', admins: []};

try {
  if (fs.existsSync(file)) {
    config = require(file);
  }
} catch (err) {
  console.log('Can\'t parse "data/config.json". Default value will be used.');
}

inquirer
  .prompt([{
    type: 'input',
    name: 'token',
    message: 'Please, provide a bot token:',
    default: config.token || '',
  }, {
    type: 'input',
    name: 'admins',
    message: 'List the admin ids for your bot (comma sepparated):',
    default: config.admins && config.admins.join(',') || '',
  }])
  .then((answers) => {
    config.token = answers.token || config.token;

    if (answers.admins) {
      config.admins = answers.admins.split(',').map((admin)=> admin.trim());
    }

    if (!fs.existsSync(folder)) {
      fs.mkdirSync(folder, {mode: '664'});
    }

    fs.writeFileSync(file, JSON.stringify(config), {mode: '664'});

    console.log('Done!');
  });
