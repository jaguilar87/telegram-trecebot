module.exports = function () {
  if (global.frases.length > 0) {
    return global.frases[Math.floor(Math.random() * global.frases.length)]
  } else {
    return 'Aún no he aprendido ninguna frase :C'
  }
}
