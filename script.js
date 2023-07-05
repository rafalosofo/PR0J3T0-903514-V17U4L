let phrases = [];
let currentPhrase = "";

function generatePhrase() {
  let randomWord = words[Math.floor(Math.random() * words.length)];
  currentPhrase += randomWord + " ";

  if (currentPhrase.trim().split(" ").length === 5 || currentPhrase.trim().split(" ").length === 6) {
    phrases.push(currentPhrase);
    currentPhrase = "";
    displayPhrases();
  }

  displayCurrentPhrase();
}

function displayCurrentPhrase() {
  let currentPhraseElement = document.getElementById("current-phrase");
  currentPhraseElement.textContent = currentPhrase;
}

function displayPhrases() {
  let phrasesElement = document.getElementById("phrases");
  phrasesElement.innerHTML = "";

  phrases.forEach((phrase) => {
    let phraseElement = document.createElement("p");
    phraseElement.textContent = phrase;
    phrasesElement.appendChild(phraseElement);
  });
}

function clearPhrases() {
  phrases = [];
  currentPhrase = "";
  displayCurrentPhrase();
  displayPhrases();
}

document.getElementById("generate-button").addEventListener("click", generatePhrase);
document.getElementById("clear-button").addEventListener("click", clearPhrases);
