const fs = require('fs')
const sounds = [
  {
    url: 'https://hydra-media.cursecdn.com/dota2.gamepedia.com/a/ad/Anti_magicuser_01.mp3',
    caption: 'Magic is an abomination.'
  }, {
    url: 'https://hydra-media.cursecdn.com/dota2.gamepedia.com/7/7f/Anti_attack_03.mp3',
    caption: 'Magic shall not prevail!'
  }, {
    url: 'https://hydra-media.cursecdn.com/dota2.gamepedia.com/e/ec/Anti_spawn_03.mp3',
    caption: 'I bring an end to magic.'
  }, {
    url: 'https://hydra-media.cursecdn.com/dota2.gamepedia.com/8/8a/Anti_spawn_04.mp3',
    caption: 'The magic ends here.'
  }, {
    url: 'https://hydra-media.cursecdn.com/dota2.gamepedia.com/5/5b/Anti_kill_06.mp3',
    caption: 'Such sorcery shall not prevail'
  }, {
    url: 'https://hydra-media.cursecdn.com/dota2.gamepedia.com/6/60/Anti_magicuser_04.mp3',
    caption: 'Sorcery is an abomination'
  }, {
    url: 'https://hydra-media.cursecdn.com/dota2.gamepedia.com/7/76/Anti_lose_01.mp3',
    caption: 'Noooooo!'
  }, {
    url: 'https://hydra-media.cursecdn.com/dota2.gamepedia.com/8/82/Anti_shitwiz_01.mp3',
    caption: 'Shitty wizard...'
  }, {
    url: 'https://hydra-media.cursecdn.com/dota2.gamepedia.com/8/8a/Anti_spawn_04.mp3',
    caption: 'The magic ends here.'
  }
]

module.exports = function (bot) {
  return require('./say.js')(bot, sounds, fs.createReadStream('img/magic.jpg'))
}
