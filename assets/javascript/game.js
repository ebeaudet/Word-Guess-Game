var bands = ["BEATLES", "QUEEN", "FOREIGNER", "SUPERTRAMP", "EAGLES", "AEROSMITH", "JOURNEY", "BOSTON", "SANTANA", "HEART", "KANSAS"];
var wins;
var userguesses;
var wrongGuesses = [];
var numGuesses;
var randBand = Math.floor(Math.random() * bands.length);
var guessBand = bands[randBand];
var underscores = [];



document.onkeyup = function(event) {
var newGame = function() {
   
        for (i = 0; i < guessBand.length; i++) {
            underscores.push(' _ '); {
                document.getElementById("randomWord").innerHTML = underscores;
            }
        }
    }

var gamePlay = function() {
    document.onkeyup = function (event) {
        var lettersGuessed = event.keyCode; {
            if (lettersGuessed.keyCode >= 65 && lettersGuessed.keyCode <= 90) {
                console.log("lettersGuessed");
            }
        }
    }
    //decrease number of guesses

}
    //load number of wins
    //letters already guessed
};