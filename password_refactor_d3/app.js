document.addEventListener('DOMContentLoaded', function() {
  var wordCount = 10;
  var guessCount = 4;
  var password = '';

  d3.select('#start').on('click', () => {
    let start = d3.select('#start-screen');
    let game = d3.select('#game-screen');
    start.classed('hide', !start.classed("hide"));
    start.classed('show', !start.classed("show"));
    game.classed('hide', !game.classed("hide"));
    game.classed('show', !game.classed("show"));
    startGame();
  });


  function toggleClasses(selection) {
    for (var i = 1; i < arguments.length; i++) {
      selection.classList.toggle(arguments[i]);
    }
  }

  function startGame() {
    // get random words and append them to the DOM
    var wordList = d3.select("#word-list");
    var randomWords = getRandomValues(words, wordCount);


    randomWords.forEach(function(word) {
      wordList.append("li")
          .text(word);
    });

    // set a secret password and the guess count display
    password = getRandomValues(randomWords, 1)[0];
    setGuessCount(guessCount);

    // add update listener for clicking on a word
    wordList.on('click', updateGame);
  }

  function getRandomValues(array, numberOfVals) {
    return shuffle(array).slice(0, numberOfVals);
  }

  function shuffle(array) {
    var arrayCopy = array.slice();
    for (var idx1 = arrayCopy.length - 1; idx1 > 0; idx1--) {
      // generate a random index between 0 and idx1 (inclusive)
      var idx2 = Math.floor(Math.random() * (idx1 + 1));

      // swap elements at idx1 and idx2
      var temp = arrayCopy[idx1];
      arrayCopy[idx1] = arrayCopy[idx2];
      arrayCopy[idx2] = temp;
    }
    return arrayCopy;
  }

  function setGuessCount(newCount) {
    guessCount = newCount;
    d3.select("#guesses-remaining").text("Guesses remaining: " + guessCount + ".");
  }

  function updateGame() {
    let e = d3.select(d3.event.target);
    if (e.node().tagName === "LI" && !e.classed("disabled")) {
      // grab guessed word, check it against password, update view
      var guess = e.text();
      var similarityScore = compareWords(guess, password);
      e.classed("disabled", true)
          .text(e.text() + " --> Matching Letters: " + similarityScore);
      
      setGuessCount(guessCount - 1);

      // check whether the game is over
      if (similarityScore === password.length) {
        let winner = d3.select("#winner");
        winner.classed('hide', !winner.classed("hide"));
        winner.classed('show', !winner.classed("show"));
        d3.select(this).on('click', null);
      } else if (guessCount === 0) {
        let loser = d3.select("#loser");
        loser.classed('hide', !loser.classed("hide"));
        loser.classed('show', !loser.classed("show"));
        d3.select(this).on('click', null);
      }
    }
  }

  function compareWords(word1, word2) {
    if (word1.length !== word2.length) throw "Words must have the same length";
    var count = 0;
    for (var i = 0; i < word1.length; i++) {
      if (word1[i] === word2[i]) count++;
    }
    return count;
  }
});