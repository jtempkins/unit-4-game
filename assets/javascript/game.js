var gamescore
var crystalcollected
var wins
var losses
var startGame
var userTotal
var num1
var num2
var num3
var num4


// allowing html to load before beginning any functions
$(document).ready(function() {
    startGame()
    // Selects random number between 19 and 120
    var randomNumber = Math.floor(Math.random() * 101 + 19);
        
    $("#numberToGuess").text(randomNumber);
    console.log (randomNumber);

 //Global 
        

   //Initial Start game
 function startGame(){
  gamescore = 0;
  crystalcollected = 0;
  wins = 0;
  losses = 0;
  startGame=("");
  userTotal = 0;
  num1= Math.floor(Math.random()*11+1)
  num2= Math.floor(Math.random()*11+1)
  num3= Math.floor(Math.random()*11+1)
  num4= Math.floor(Math.random()*11+1)
   
 }

 // Set win score and restart game ... startgame ()
function addWin() {
  wins++
  startGame()
}
//sets up click for jewels
$('#img1').on ('click', function(){
    gamescore = gamescore + num1;
    console.log("New userTotal= " + crystalcollected);
    $('#gamescore').text(gamescore); 
          //sets win/lose conditions
          if ( gamescore > randomNumber){
            // addloses();
            // $('#losses').text();
            losses++;
          }   
          else if (gamescore === randomNumber){
          // addWin();
          // $('#win').text();
          wins++;
            // $('#wins').text();

        }
  })  ;

  $('#img2').on ('click', function(){
    gamescore = gamescore + num2;
    console.log("New userTotal= " + crystalcollected);
    $('#gamescore').text(gamescore); 
          //sets win/lose conditions
          if ( gamescore > randomNumber){
            // addloses();
            // $('#losses').text();
            losses++
          }   
          else if (gamescore === randomNumber){
          // addWin();
          // $('#win').text();
          wins++;
       }
      });
  
  $('#img3').on ('click', function(){
     gamescore = gamescore + num3;
     console.log("New userTotal= " + crystalcollected);
     $('#gamescore').text(gamescore); 
          //sets win/lose conditions
        if ( gamescore > randomNumber){
          //  addlosses();
          // $('#losses').text();
           losses++
              }
        else if (gamescore === randomNumber){
                // addWin();
                // $('#win').text();
                wins++
                     }
                   });   

    $('#img4').on('click', function(){
      gamescore = gamescore + num4;
      console.log("New userTotal= " + crystalcollected);
        $('#gamescore').text(gamescore); 
        //sets win/lose conditions
    
          if (gamescore > randomNumber){
              // addlosses();
              // $('#losses').text();
              losses++
       }
         else if ( gamescore === randomNumber){
          // $('#win').text();
          win++;
    }
  })
  $("#gamescore").text(userTotal);
})
