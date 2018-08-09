module.exports = function getQuote(index) {
  if (global.frases.length > 0) {
    if ((!index && index !== 0) || index < 0 || index > global.frases.length -1) {
      index = Math.floor(Math.random() * global.frases.length);
    }

    return global.frases[index];
  } else {
    return 'Aún no he aprendido ninguna frase :C';
  }
};
