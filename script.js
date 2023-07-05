var substantivos = ["flor", "amor", "mar", "lua", "poesia", "coração", "sol"];
var adjetivos = ["belo", "brilhante", "encantador", "doce", "radiante", "sereno", "encantado"];
var verbos = ["correr", "dançar", "cantar", "sonhar", "voar", "sorrir", "brilhar"];

function gerarPrompt() {
  var primeiraPalavra = getRandomWord(adjetivos);
  var segundaPalavra = getRandomWord(substantivos);
  var terceiraPalavra = getRandomWord(adjetivos);
  var quartaPalavra = getRandomWord(verbos);
  var quintaPalavra = getRandomWord(substantivos);
  
  var frase = primeiraPalavra + " " + segundaPalavra + " " + terceiraPalavra + " " + quartaPalavra + " " + quintaPalavra + ".";
  
  document.getElementById("prompt").innerText = frase;
}

function getRandomWord(wordArray) {
  var randomIndex = Math.floor(Math.random() * wordArray.length);
  return wordArray[randomIndex];
}
