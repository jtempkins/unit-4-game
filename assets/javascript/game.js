var gamescore = 0;
var crystalcollected = 0;
var wins = 0;
var loss =0;
var startGame=("");
var userTotal = 0;
var num1= Math.floor(Math.random()*11+1)
var num2= Math.floor(Math.random()*11+1)
var num3= Math.floor(Math.random()*11+1)
var num4= Math.floor(Math.random()*11+1)


// allowing html to load before beginning any functions
    $(document).ready(function() {
    // Selects random number between 19 and 120
    var randomNumber = Math.floor(Math.random() * 101 + 19)
        
    $("#numberToGuess").text(randomNumber);
    console.log (randomNumber);

 //Global 
        

   //Initial Start game
 function startGame(){
   gamescore = Math.random()
   var  rnd1 = Math.random()*12
   // 
   $("#img1").attr("data-value",rnd1) //Assign random value
   $("#img2").attr("data-value",rnd1) //Assign random value
   $("#img3").attr("data-value",rnd1) //Assign random value
   $("#img4").attr("data-value",rnd1) //Assign random value

   crystalcollected = 0;
   
 }
  })  
///// On Click
   $('#Img1').on("click",function(){
        var crystal = $(this).attr("data-value"); // On Click - collect the value
        crystalcollected += crystal;
        if(crystalcollected> gamescore){
            loss++;
            $('#loss').text();
            //....
            startGame();
        }
        else if(gamescore === crystalcollected){
            wins++
            $('#wins').text();
            // .... $().text()
            startGame();
        }
   })
