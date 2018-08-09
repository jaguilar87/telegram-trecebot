const {join} = require('path');
const say = require('./say');

module.exports = function(bot, msg) {
  say({
    bot,
    msg,
    sounds: [{
      url: join(__dirname, '../../../assets/fight/Legcom_duel_02.mp3'),
      caption: 'I challenge you!',
    }, {
      url: join(__dirname, '../../../assets/fight/Legcom_duel_05.mp3'),
      caption: 'Care to dance?',
    }, {
      url: join(__dirname, '../../../assets/fight/Legcom_duel_06.mp3'),
      caption: 'Fight me!',
    }, {
      url: join(__dirname, '../../../assets/fight/Legcom_duel_08.mp3'),
      caption: 'I will tear you apart!',
    }, {
      url: join(__dirname, '../../../assets/fight/Legcom_duelhero_08.mp3'),
      caption: 'Fight for your honor!',
    }, {
      url: join(__dirname, '../../../assets/fight/Legcom_duelhero_22.mp3'),
      caption: 'Defend your beard!',
    }, {
      url: join(__dirname, '../../../assets/fight/Legcom_duelhero_23.mp3'),
      caption: 'Defend your mustache!',
    }, {
      url: join(__dirname, '../../../assets/fight/Legcom_duelhero_29.mp3'),
      caption: 'I will bring you down!',
    }],
    images: [{
      url: join(__dirname, '../../../assets/fight/fight.gif'),
    }],
  });
};
