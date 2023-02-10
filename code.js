//empty functions; code will be added later
function startButtonClick(){var countdownElem = document.getElementById("countdown");
runTimer(countdownElem);}
function stopButtonClick(){}

//this is the new countdown fucntion
function runTimer(countdownElem){
//the countdown for week two assignment
var currTime = 50; //the number that shows up in the area above
var timeout = 0; //the delay once the page is loaded before the set timeout starts
var timeoutIncrement = 5000; //time in milliseconds
/*adding the loop below; the loop type is for loop. it can commonly refered to with the letter i. counter++ just means counter + 1
*/
for(var counter=0; counter < 11; counter++){

    setTimeout(function(){
        if(currTime == 0){
            alert("Blastoff!"); //alert that pops up once countdown hits zero
            countdownElem.innerHTML = currTime;
        }
        else if (currTime <25){
            countdownElem.innerHTML = "Warning! Less than half way to launch, time left = " + currTime;
        }
        else{
            countdownElem.innerHTML = currTime;
        }
    currTime = currTime - 5; //decreases the countdown by 5
    }, timeout);

    timeout = timeout + timeoutIncrement; //sets the new count down to start at the decreased value
    }
   
    //no timeout = timeout + timeoutIncrement since there is no further subtractions
}
