const fs = require('fs')
const path = require('path')
const say = require('./say')

const sounds = [
  {
    url: 'https://hydra-media.cursecdn.com/dota2.gamepedia.com/e/ec/Legcom_duel_02.mp3',
    caption: 'I challenge you!'
  }, {
    url: 'https://hydra-media.cursecdn.com/dota2.gamepedia.com/0/07/Legcom_duel_04.mp3',
    caption: 'Let\'s see what you\'re made of!'
  }, {
    url: 'https://hydra-media.cursecdn.com/dota2.gamepedia.com/c/ce/Legcom_duel_05.mp3',
    caption: 'Care to dance?'
  }, {
    url: 'https://hydra-media.cursecdn.com/dota2.gamepedia.com/9/97/Legcom_duel_06.mp3',
    caption: 'Fight me!'
  }, {
    url: 'https://hydra-media.cursecdn.com/dota2.gamepedia.com/2/26/Legcom_duel_08.mp3',
    caption: 'I will tear you apart!'
  }, {
    url: 'https://hydra-media.cursecdn.com/dota2.gamepedia.com/1/14/Legcom_duelhero_08.mp3',
    caption: 'Fight for your honor!'
  }, {
    url: 'https://hydra-media.cursecdn.com/dota2.gamepedia.com/3/33/Legcom_duelhero_22.mp3',
    caption: 'Defend your beard!'
  }, {
    url: 'https://hydra-media.cursecdn.com/dota2.gamepedia.com/b/b6/Legcom_duelhero_23.mp3',
    caption: 'Defend your mustache!'
  }, {
    url: 'https://hydra-media.cursecdn.com/dota2.gamepedia.com/d/dd/Legcom_fastres_01.mp3',
    caption: 'Victory at any cost!'
  }
]

let fileId = null

module.exports = function (bot) {
  return (msg) => {
    if (fileId) {
      bot.sendDocument(msg.chat.id, fileId)
    } else {
      let img = fs.readFileSync(path.join(__dirname, '../../../img/fight.gif'))
      bot.sendDocument(msg.chat.id, img).then((data) => {
        fileId = data.document.file_id
      })
    }

    say(bot, msg, sounds)
  }
}
