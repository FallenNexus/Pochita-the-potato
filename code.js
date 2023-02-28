var arrInterval = new Array();

function startButtonClick(){
    document.getElementById("btnStart").disabled = true;
   document.getElementById("btnStop").disabled = false;
    var countdownElem = document.getElementById("countdown");
runTimer(countdownElem);}


function stopButtonClick(){
   document.getElementById("btnStart").disabled = false;
   document.getElementById("btnStop").disabled = true;
   
    for (counter = 0; counter < 11; counter++){
        clearTimeout(arrInterval[counter]);
    }

}
//this function we ask for a first and last name, and badge number
//the name need to be less than 20 characters and the badge number needs to be 3 characters or less
function getUserInput(){
    var fullName = " ";
    var badgeNumber = 0;
    do{
        var firstName = prompt("Please enter your first name (under 10 characters)");
        var lastName = prompt("Please enter your last name");
        fullName = firstName + " " + lastName;
        if (fullName.length > 20){
            alert("Please enter a shorter name. Legnth was: " + fullName.length);}
        }
while(fullName.length > 20);

do{
    badgeNumber = prompt("Please enter your badge number (3 digits max): ");
    if (badgeNumber > 999){alert("Please enter a badge number with 3 digits or fewer.");
}

}while(badgeNumber > 999);

    return fullName + " " + badgeNumber;

 }
//this is the new countdown fucntion
function runTimer(countdownElem){
//the countdown for week two assignment
var currTime = 50; //the number that shows up in the area above
var timeout = 0; //the delay once the page is loaded before the set timeout starts
var timeoutIncrement = 1000; //time in milliseconds
/*adding the loop below; the loop type is for loop. it can commonly refered to with the letter i. counter++ just means counter + 1
*/
for(var counter=0; counter < 11; counter++){

    //how to make the thing stop

    arrInterval[counter] = setTimeout(function(){
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
