$(function() {
  var newGame = $('a.new-game');
  var alert = $('div.alert-box');
  var input = $('input#guess');
  var guesses = 0;
  var max = 100;

  newGame.on('click', function() {
    startGame();
  })

  var startGame = function() {
    alert.html('');
    newGame.hide();
    random = Math.round(Math.random() * max);
    guesses = 0;
//    console.log(random);
  }

  $('a.submit').on("click", function() {
    var guess = parseInt(input.val(), 10);
    input.val('');
    if ( guess === random ) {
      guesses++
      alert.html("Congratulations, you've guessed the number in " + guesses + ' guesses!');
      newGame.show();
    } else if ( guess > random && guess <= max ) {
        guesses++
        alert.html(guess + ' was too high, try again...');
    } else if ( guess < random && guess >= 0 ) {
        guesses++
        alert.html(guess + ' was too low, try again...');
    } else {
        alert.html('Invalid input, must enter a number between 0 and ' + max);
    }
  });

  startGame();
});
