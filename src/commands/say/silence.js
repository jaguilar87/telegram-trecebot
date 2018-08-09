const {join} = require('path');
const say = require('./say');

module.exports = function(bot, msg) {
  say({
    bot,
    msg,
    sounds: [{
      url: join(__dirname, '../../../assets/silence/Puck_ability_rift_01.mp3'),
      caption: 'Silence!',
    }, {
      url: join(__dirname, '../../../assets/silence/Dro_ability_06.mp3'),
      caption: 'Silence!',
    }, {
      url: join(__dirname, '../../../assets/silence/Silen_attack_07.mp3'),
      caption: 'Shut up!',
    }, {
      url: join(__dirname, '../../../assets/silence/Dpro_silence_01.mp3'),
      caption: 'Silence!',
    }, {
      url: join(__dirname, '../../../assets/silence/Anti_magicuser_03.mp3'),
      caption: 'Bark on, bitch. I hear thee not.',
    }],
    images: [{
      url: join(__dirname, '../../../assets/silence/silence.jpg'),
    }],
  });
};
