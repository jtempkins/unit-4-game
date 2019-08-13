    // allowing html to load before beginning any functions
    $(document).ready(function() {
    // Selects random number between 19 and 120
    var randomNumber = Math.floor(Math.random() * 101 + 19)
        
    $("#numberToGuess").text(randomNumber);
    console.log (randomNumber);






});