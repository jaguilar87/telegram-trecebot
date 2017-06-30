const fs = require('fs')
const path = require('path')
const say = require('./say')

const sounds = [
  {
    url: 'http://hydra-media.cursecdn.com/dota2.gamepedia.com/5/59/Gyro_ally_01.mp3',
    caption: 'Holy shit it\'s Viper!'
  }, {
    url: 'https://hydra-media.cursecdn.com/dota2.gamepedia.com/7/79/Face_kill_12.mp3',
    caption: 'I have seen the future: you are not in it!'
  }, {
    url: 'https://hydra-media.cursecdn.com/dota2.gamepedia.com/e/e6/Enig_ability_black_01.mp3',
    caption: 'If light cannot escape me, what hope have you?'
  }, {
    url: 'http://hydra-media.cursecdn.com/dota2.gamepedia.com/a/a5/Erth_rare_05.mp3',
    caption: 'There may be many earths, but theres only one Earthshaker.'
  }, {
    url: 'https://hydra-media.cursecdn.com/dota2.gamepedia.com/f/fc/Invo_ability_coldsnap_05.mp3',
    caption: 'Learn how fragile you are.'
  }, {
    url: 'https://hydra-media.cursecdn.com/dota2.gamepedia.com/3/3f/Invo_ability_chaosmeteor_07.mp3',
    caption: 'Behold the meatball!'
  }, {
    url: 'https://hydra-media.cursecdn.com/dota2.gamepedia.com/d/db/Invo_level_05.mp3',
    caption: 'I am a beacon of knowledge blazing out across a black sea of ignorance.'
  }, {
    url: 'https://hydra-media.cursecdn.com/dota2.gamepedia.com/d/db/Invo_kill_10.mp3',
    caption: 'You die as you lived: insipid and ignorant.'
  }, {
    url: 'https://hydra-media.cursecdn.com/dota2.gamepedia.com/e/e5/Invo_laugh_07.mp3',
    caption: 'Ha! ha ha ha ha ha ha ha ha ha ha ha ha ha ha!'
  }, {
    url: 'https://hydra-media.cursecdn.com/dota2.gamepedia.com/a/ad/Invo_respawn_05.mp3',
    caption: 'The universe was not the same without me.'
  }, {
    url: 'http://hydra-media.cursecdn.com/dota2.gamepedia.com/7/72/Cm_lina_10.mp3',
    caption: 'Lina... you hellfire hellbitch!'
  }, {
    url: 'http://hydra-media.cursecdn.com/dota2.gamepedia.com/d/d6/Lina_cm_03.mp3',
    caption: 'Coldhearted bitch...'
  }, {
    url: 'http://hydra-media.cursecdn.com/dota2.gamepedia.com/e/e4/Jug_rare_06.mp3',
    caption: 'I am the Juggernaut, Lich'
  }, {
    url: 'http://hydra-media.cursecdn.com/dota2.gamepedia.com/e/e3/Invo_kill_11.mp3',
    caption: 'You were no match for my powers. But then, who is?'
  }, {
    url: 'http://hydra-media.cursecdn.com/dota2.gamepedia.com/d/da/Axe_deny_16.mp3',
    caption: 'I SAID GOOD DAY SIR!'
  }, {
    url: 'http://hydra-media.cursecdn.com/dota2.gamepedia.com/d/d5/Stormspirit_rival_04.mp3',
    caption: 'Call off your little storms, Razor. They arere an embarrassment.'
  }, {
    url: 'https://hydra-media.cursecdn.com/dota2.gamepedia.com/5/5d/Wind_attack_02.mp3',
    caption: 'Here, have an arrow!'
  }, {
    url: 'http://hydra-media.cursecdn.com/dota2.gamepedia.com/8/8b/Necr_omni_07.mp3',
    caption: 'You are a dirty birch, Omniknight.'
  }, {
    url: 'https://hydra-media.cursecdn.com/dota2.gamepedia.com/d/d2/Wind_kill_06.mp3',
    caption: 'If you weren\'t so damned dead, I\'d shoot you again.'
  }, {
    url: 'https://hydra-media.cursecdn.com/dota2.gamepedia.com/3/3d/Wind_kill_09.mp3',
    caption: 'Take my advice, stay dead.'
  }, {
    url: 'https://hydra-media.cursecdn.com/dota2.gamepedia.com/5/57/Axe_move_10.mp3',
    caption: 'Enemies need killing!'
  }, {
    url: 'https://hydra-media.cursecdn.com/dota2.gamepedia.com/0/02/Axe_deny_15.mp3',
    caption: 'You get nothing. Good day, sir.'
  }, {
    url: 'https://hydra-media.cursecdn.com/dota2.gamepedia.com/6/6d/Axe_rival_22.mp3',
    caption: 'What happened? Axe happened!'
  }, {
    url: 'https://hydra-media.cursecdn.com/dota2.gamepedia.com/2/27/Legcom_begin_01.mp3',
    caption: 'If they want war, then we shall give it to them!'
  }, {
    url: 'https://hydra-media.cursecdn.com/dota2.gamepedia.com/9/92/Legcom_respawn_13.mp3',
    caption: 'If that\'s the kind of fight they want, then I will give it to them!'
  }, {
    url: 'https://hydra-media.cursecdn.com/dota2.gamepedia.com/0/09/Dlc_bastion_announcer_defeat_04.mp3',
    caption: 'That must have hurt.'
  }, {
    url: 'https://hydra-media.cursecdn.com/dota2.gamepedia.com/7/7a/Dlc_pflax_killing_spree_nerf.mp3',
    caption: 'Nerf this man!'
  }, {
    url: 'https://hydra-media.cursecdn.com/dota2.gamepedia.com/d/dd/Dlc_glados_killing_spree_ann_glados_kill_monster_02.mp3',
    caption: 'You monster.'
  }, {
    url: 'https://hydra-media.cursecdn.com/dota2.gamepedia.com/c/cb/Dlc_glados_killing_spree_ann_glados_enemy_teamwipe_04.mp3',
    caption: 'The enemy is team has been wiped out after a long illness. I am joking of course—you butchered them.'
  }, {
    url: 'https://hydra-media.cursecdn.com/dota2.gamepedia.com/8/89/Pain_attack_04.mp3',
    caption: 'Does this hurt?'
  }, {
    url: 'https://hydra-media.cursecdn.com/dota2.gamepedia.com/d/d9/Pain_levelup_04.mp3',
    caption: 'Ohhh! I felt that.'
  }, {
    url: 'https://hydra-media.cursecdn.com/dota2.gamepedia.com/2/2f/Ench_rare_01.mp3',
    caption: 'Do you know what I love? Everything!'
  }, {
    url: 'https://hydra-media.cursecdn.com/dota2.gamepedia.com/5/5a/Ench_lasthit_02.mp3',
    caption: 'Hey! I\'m a predator.'
  }, {
    url: 'https://hydra-media.cursecdn.com/dota2.gamepedia.com/6/69/Mir_ability_arrow_08.mp3',
    caption: 'Son of a...'
  }, {
    url: 'https://hydra-media.cursecdn.com/dota2.gamepedia.com/0/0d/Mir_attack_08.mp3',
    caption: 'Run like the dogs you are!'
  }, {
    url: 'https://hydra-media.cursecdn.com/dota2.gamepedia.com/f/fc/Doom_ability_doom_06.mp3',
    caption: 'Dooooomed!'
  }
]

let fileId = null

module.exports = function (bot) {
  return (msg) => {
    if (fileId) {
      bot.sendDocument(msg.chat.id, fileId)
    } else {
      let img = fs.readFileSync(path.join(__dirname, '../../../img/rekt.gif'))
      bot.sendVideo(msg.chat.id, img).then((data) => {
        fileId = data.document.file_id
      })
    }

    say(bot, msg, sounds)
  }
}
