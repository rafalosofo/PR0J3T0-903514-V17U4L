var substantivos = ["flor", "amor", "mar", "lua", "poesia", "coração", "sol"];
var adjetivos = ["belo", "brilhante", "encantador", "doce", "radiante", "sereno", "encantado"];
var verbos = ["correr", "dançar", "cantar", "sonhar", "voar", "sorrir", "brilhar"];

var frase = "";
var contadorPalavras = 0;

function gerarPalavra() {
  if (contadorPalavras === 0) {
    frase = getRandomWord(adjetivos);
  } else if (contadorPalavras === 1) {
    frase += " " + getRandomWord(substantivos);
  } else if (contadorPalavras === 2) {
    frase += " " + getRandomWord(adjetivos);
  } else if (contadorPalavras === 3) {
    frase += " " + getRandomWord(verbos);
  } else if (contadorPalavras === 4) {
    frase += " " + getRandomWord(substantivos);
  } else {
    frase += " " + getRandomWord(substantivos) + "<br>";
  }
  
  document.getElementById("prompt").innerHTML = frase;
  
  contadorPalavras++;
  
  if (contadorPalavras === 6) {
    contadorPalavras = 0;
    frase = "";
  }
}

function getRandomWord(wordArray) {
  var randomIndex = Math.floor(Math.random() * wordArray.length);
  return wordArray[randomIndex];
}
