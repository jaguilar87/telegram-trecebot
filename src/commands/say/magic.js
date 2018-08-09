const {join} = require('path');
const say = require('./say');

module.exports = function(bot, msg) {
  say({
    bot,
    msg,
    sounds: [{
      url: join(__dirname, '../../../assets/magic/Anti_magicuser_01.mp3'),
      caption: 'Magic is an abomination.',
    }, {
      url: join(__dirname, '../../../assets/magic/Anti_attack_03.mp3'),
      caption: 'Magic shall not prevail!',
    }, {
      url: join(__dirname, '../../../assets/magic/Anti_spawn_03.mp3'),
      caption: 'I bring an end to magic.',
    }, {
      url: join(__dirname, '../../../assets/magic/Anti_spawn_04.mp3'),
      caption: 'The magic ends here.',
    }, {
      url: join(__dirname, '../../../assets/magic/Anti_kill_06.mp3'),
      caption: 'Such sorcery shall not prevail',
    }, {
      url: join(__dirname, '../../../assets/magic/Anti_magicuser_04.mp3'),
      caption: 'Sorcery is an abomination',
    }, {
      url: join(__dirname, '../../../assets/magic/Anti_shitwiz_01.mp3'),
      caption: 'Shitty wizard...',
    }, {
      url: join(__dirname, '../../../assets/magic/Anti_death_02.mp3'),
      caption: 'What magic is this?',
    }, {
      url: join(__dirname, '../../../assets/magic/Omni_ability_repel_06.mp3'),
      caption: 'All wands will break!',
    }],
    images: [{
      url: join(__dirname, '../../../assets/magic/magic.jpg'),
      caption: 'Mehgic!',
    }, {
      url: join(__dirname, '../../../assets/magic/magic.gif'),
    }],
  });
};
