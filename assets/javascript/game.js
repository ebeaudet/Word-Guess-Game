var bands = ["BEATLES", "QUEEN", "FOREIGNER", "SUPERTRAMP", "EAGLES", "AEROSMITH", "JOURNEY", "BOSTON", "SANTANA", "HEART", "KANSAS"];
var wins;
var numGuesses;
var userGuesses;
var lettersGuessed;
var currentWord = [];
var underscores = [];
var gameFinished = true;
var gameStarted = false;


var newGame = function () {
    numGuesses = 10;
    userGuesses = [];
    gameFinished = false;
    currentWord = Math.floor(Math.random() * (bands.length));

    for (var i = 0; i < bands[currentWord].length; i++) {
        underscores.push(' _ '); {
            document.getElementById("randomWord").innerHTML = underscores;
            gameStarted = true;
            console.log(underscores);
            console.log(currentWord);
        }
    }
}

function gamePlay() {
    var correctLetters = [];
  //check if user has guesses left
    if (numGuesses > 0) {
        if (lettersGuessed.indexof() === -1) {
            correctLetters.push();
        }
    }

    if(correctLetters.length <= 0) {
        numGuesses--;
    } else {
        for (var i = 0; i < correctLetters.length; i++) {
            currentWord[correctLetters[i]] = letter;
        }
    } 


    for (var i = 0; i < bands[currentWord].length; i++) {
        if (bands[currentWord][i] === lettersGuessed)
            lettersGuessed.push(i);
            console.log(currentWord);
    }
}


//Start the game with keypress
document.onkeypress = function (event) {
    if (gameFinished) {
        newGame();
        gameFinished = false;
    } else {
        if (lettersGuessed >= 65 && lettersGuessed <= 122) {
            gamePlay(event.key)
        }
    }
};