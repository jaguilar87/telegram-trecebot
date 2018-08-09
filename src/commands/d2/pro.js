const request = require('request');
const {promisify} = require('util');

const get = promisify(request.get);

module.exports = async function(bot, msg, pattern) {
  if (!pattern[1]) {
    bot.sendMessage(msg.chat.id, 'Debes indicar sobre quién quieres información. ej: /d2pro Miracle');
    return;
  }

  const pros = await findPros(pattern[1]);
  await sendPro(bot, msg, pros);
};

async function findPros(name) {
  const sql = encodeURI(
    'SELECT n.account_id, n.name, p.avatarfull, p.personaname, ' +
    'p.profileurl, n.team_id, n.team_name, n.country_code ' +
    'FROM notable_players n ' +
    'LEFT JOIN players p ON (n.account_id=p.account_id) ' +
    `WHERE name ILIKE '%${name}%' ` +
    'LIMIT 100'
  );

  const response = await get({
    url: 'https://api.opendota.com/api/explorer?sql=' + sql,
    headers: {'Accept': 'application/json'},
  });

  const data = JSON.parse(response.body);

  return data.rows;
}

async function sendPro(bot, msg, pros) {
  if (!pros || !pros.length) {
    bot.sendMessage(msg.chat.id, 'No he encontrado a nadie con ese nombre.');
    return;
  }

  for (let pro of pros) {
    let text = `[${pro.name}](https://www.opendota.com/players/${pro.account_id}) ` +
      `as _${pro.personaname}_` +
      `\n*Team:* [${pro.team_name}](https://www.dotabuff.com/esports/teams/${pro.team_id})`;

    if (pro.country_code) {
      text += `, from: ${pro.country_code}`;
    }

    bot.sendPhoto(msg.chat.id, pro.avatarfull, {
      parse_mode: 'Markdown',
      caption: text,
    });
  }
}
