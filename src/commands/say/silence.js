const fs = require('fs')
const path = require('path')
const say = require('./say')

const sounds = [
  {
    url: 'https://hydra-media.cursecdn.com/dota2.gamepedia.com/2/2f/Puck_ability_rift_01.mp3',
    caption: 'Silence!'
  }, {
    url: 'https://hydra-media.cursecdn.com/dota2.gamepedia.com/5/59/Silen_attack_07.mp3',
    caption: 'Shut up!'
  }, {
    url: 'https://hydra-media.cursecdn.com/dota2.gamepedia.com/b/b3/Silen_ability_curse_02.mp3',
    caption: 'Silence, fool!'
  }, {
    url: 'https://hydra-media.cursecdn.com/dota2.gamepedia.com/2/29/Silen_lasthit_03.mp3',
    caption: 'Shut your mouth.'
  }, {
    url: 'https://hydra-media.cursecdn.com/dota2.gamepedia.com/3/31/Dro_ability_06.mp3',
    caption: 'Silence!'
  }, {
    url: 'https://hydra-media.cursecdn.com/dota2.gamepedia.com/c/cb/Global_Silence_cast.mp3',
    caption: 'Silence!'
  }, {
    url: 'https://hydra-media.cursecdn.com/dota2.gamepedia.com/8/84/Dpro_silence_01.mp3',
    caption: 'Silence!'
  }, {
    url: 'https://hydra-media.cursecdn.com/dota2.gamepedia.com/2/27/Dpro_silence_07.mp3',
    caption: 'Quiet, you.'
  }, {
    url: 'https://hydra-media.cursecdn.com/dota2.gamepedia.com/1/1c/Anti_magicuser_03.mp3',
    caption: 'Bark on, bitch. I hear thee not.'
  }
]

let fileId = null

module.exports = function (bot) {
  return (msg) => {
    if (fileId) {
      bot.sendPhoto(msg.chat.id, fileId)
    } else {
      let img = fs.readFileSync(path.join(__dirname, '../../../img/silence.jpg'))
      bot.sendPhoto(msg.chat.id, img).then((data) => {
        fileId = data.photo[0].file_id
      })
    }

    say(bot, msg, sounds)
  }
}
