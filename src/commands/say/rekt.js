const {join} = require('path');
const say = require('./say');

module.exports = function(bot, msg) {
  say({
    bot,
    msg,
    sounds: [{
      url: join(__dirname, '../../../assets/rekt/Legcom_econ_spawn_02.mp3'),
      caption: 'I\'ve come to put an end to hope.',
    }, {
      url: join(__dirname, '../../../assets/rekt/Face_kill_12.mp3'),
      caption: 'I have seen the future: you are not in it!',
    }, {
      url: join(__dirname, '../../../assets/rekt/Enig_ability_black_01.mp3'),
      caption: 'If light cannot escape me, what hope have you?',
    }, {
      url: join(__dirname, '../../../assets/rekt/Erth_rare_05.mp3'),
      caption: 'There may be many earths, but theres only one Earthshaker.',
    }, {
      url: join(__dirname, '../../../assets/rekt/Invo_kill_10.mp3'),
      caption: 'You die as you lived: insipid and ignorant.',
    }, {
      url: join(__dirname, '../../../assets/rekt/Invo_kill_11.mp3'),
      caption: 'You were no match for my powers. But then, who is?',
    }, {
      url: join(__dirname, '../../../assets/rekt/Wind_kill_06.mp3'),
      caption: 'If you weren\'t so damned dead, I\'d shoot you again.',
    }, {
      url: join(__dirname, '../../../assets/rekt/Wind_kill_09.mp3'),
      caption: 'Take my advice, stay dead.',
    }, {
      url: join(__dirname, '../../../assets/rekt/Axe_rival_22.mp3'),
      caption: 'What happened? Axe happened!',
    }, {
      url: join(__dirname, '../../../assets/rekt/Dlc_bastion_announcer_defeat_04.mp3'),
      caption: 'That must have hurt.',
    }, {
      url: join(__dirname, '../../../assets/rekt/Dlc_pflax_killing_spree_nerf.mp3'),
      caption: 'Nerf this man!',
    }],
    images: [{
      url: join(__dirname, '../../../assets/rekt/rekt.gif'),
      caption: 'Brutal. Savage. Rekt.',
    }],
  });
};
