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
var continueGame


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
  num1= Math.floor(Math.random()*11+1)
  num2= Math.floor(Math.random()*11+1)
  num3= Math.floor(Math.random()*11+1)
  num4= Math.floor(Math.random()*11+1)
   
 }

 function continueGame(){
  gamescore = 0;
  randomNumber = Math.floor(Math.random() * 101 + 19);
  crystalcollected = 0;
  startGame=("");
  num1= Math.floor(Math.random()*11+1)
  num2= Math.floor(Math.random()*11+1)
  num3= Math.floor(Math.random()*11+1)
  num4= Math.floor(Math.random()*11+1)
  $("#numberToGuess").text(randomNumber);
   
 }

//sets up click for jewels
$('#img1').on ('click', function(){
    gamescore = gamescore + num1;
    console.log("New userTotal= " + crystalcollected);
    $('#gamescore').text(gamescore); 

    //sets win/lose conditions
          if ( gamescore > randomNumber){
            losses++;
            $('#losses').text(losses);
            continueGame();

          }   
          else if (gamescore === randomNumber){
          wins++;
          $('#wins').text(wins);
          continueGame();

        }
		$("#gamescore").text(gamescore);
  })  ;

  $('#img2').on ('click', function(){
    gamescore = gamescore + num2;
    console.log("New userTotal= " + crystalcollected);
    $('#gamescore').text(gamescore); 

    //sets win/lose conditions
          if ( gamescore > randomNumber){
            losses++;
            $('#losses').text(losses);
			continueGame();

          }   
          else if (gamescore === randomNumber){
          wins++;
          $('#wins').text(wins);
		  continueGame();
       }
	   $("#gamescore").text(gamescore);
      });
  
  $('#img3').on ('click', function(){
     gamescore = gamescore + num3;
     console.log("New userTotal= " + crystalcollected);
     $('#gamescore').text(gamescore); 

     //sets win/lose conditions
     if ( gamescore > randomNumber){
       losses++;
       $('#losses').text(losses);
	   continueGame();

     }   
     else if (gamescore === randomNumber){
     wins++;
     $('#wins').text(wins);
	 continueGame();
                }
				$("#gamescore").text(gamescore);
                   });   

    $('#img4').on('click', function(){
      gamescore = gamescore + num4;
      console.log("New userTotal= " + crystalcollected);
      $('#gamescore').text(gamescore); 
  
      //sets win/lose conditions
      if ( gamescore > randomNumber){
        losses++;
        $('#losses').text(losses);
		continueGame();

      }   
      else if (gamescore === randomNumber){
      wins++;
      $('#wins').text(wins);
	  continueGame();
}
$("#gamescore").text(gamescore);
  })
  $("#gamescore").text(gamescore);		
})
