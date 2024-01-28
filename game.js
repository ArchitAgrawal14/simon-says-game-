var buttonColors=["red" , "blue", "green" , "yellow"];
var gamePattern=[];
var userClickedPattern=[];
var started =false;
var level=0;
$(document).keypress(function(){
    if(!started){
        $("h1").text("Level "+level);
        nextSequence();
        started=true;
        
    }
});
    
// here the below is done to see the user clicked button
$(".btn").click(function(){
    var userChoosenColor=$(this).attr("id");        
    userClickedPattern.push(userChoosenColor);
    playSound(userChoosenColor);
    animatePress(userChoosenColor);
    checkAnswer(userClickedPattern.length-1);
});
// here the below is done to select the colour pressed 
function nextSequence(){
    userClickedPattern=[];
    level++;
    $("h1").text("Level "+level);
    var randomNumber=(Math.floor(Math.random()*4));
    var randomChoosenColor=buttonColors[randomNumber];
    gamePattern.push(randomChoosenColor);
    $("#"+randomChoosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChoosenColor);
    
}
function playSound(name){ 
    var audio = new Audio("sounds/"+ name +".mp3");
    audio.play();
}
function animatePress(currentColor){
    $("#"+currentColor).addClass("pressed");
    setTimeout(function(){
        $("#"+currentColor).removeClass("pressed");
    },100);
}
    // this can also be used to play a sound but shorter way is below
    // switch(name){

    //     case("blue"):
    //     var audio = new Audio("sounds/"+randomChoosenColor+".mp3");
    //     audio.play();
    //     break;


    //     case("green"):
    //     var audio = new Audio("sounds/"+randomChoosenColor+".mp3");
    //     audio.play();
    //     break;


    //     case("yellow"):
    //     var audio = new Audio("sounds/"+randomChoosenColor+".mp3");
    //     audio.play();
    //     break;


    //     case("red"):
    //     var audio = new Audio("sounds/"+randomChoosenColor+".mp3");
    //     audio.play();
    //     break;
    // }
function checkAnswer(currentLevel){
    if(gamePattern[currentLevel] === userClickedPattern[currentLevel]){
        console.log("success");

        if(userClickedPattern.length === gamePattern.length){
            setTimeout(function(){
            nextSequence()} , 1000);
        }
    }else{
        console.log("wrong");
        var wronganswer=new Audio("sounds/wrong.mp3")
        wronganswer.play()
        $("body").addClass("game-over");
            setTimeout(function(){
                $("body").removeClass("game-over")
                    },200);
        $("h1").text("Wrong");
        startOver();
    }
}
function startOver(){ 
    level=0;
    gamePattern=[];
    started=false;
    
}

    


   
    
    


