//empty functions; code will be added later
function startButtonClick(){}
function stopButtonClick(){}

//this is the new countdown fucntion
function runTimer(countdownElem){
//the countdown for week two assignment
var currTime = 50; //the number that shows up in the area above
var timeout = 0; //the delay once the page is loaded before the set timeout starts
var timeoutIncrement = 5000; //time in milliseconds

setTimeout(function(){
    countdownElem.innerHTML = currTime; //write all code between the {}
    currTime = currTime - 5; //decreases the countdown by 5
}, timeout);

timeout = timeout + timeoutIncrement; //sets the new count down to start at the decreased value

setTimeout(function(){
    countdownElem.innerHTML = currTime;
    currTime = currTime - 5;
}, timeout);

timeout = timeout + timeoutIncrement;

setTimeout(function(){
    countdownElem.innerHTML = currTime;
    currTime = currTime - 5;
}, timeout);

timeout = timeout + timeoutIncrement;
setTimeout(function(){
    countdownElem.innerHTML = currTime;
    currTime = currTime - 5;
}, timeout);

timeout = timeout + timeoutIncrement;
setTimeout(function(){
    countdownElem.innerHTML = currTime;
    currTime = currTime - 5;
}, timeout);

timeout = timeout + timeoutIncrement;
setTimeout(function(){
    countdownElem.innerHTML = currTime;
    currTime = currTime - 5;
}, timeout);

timeout = timeout + timeoutIncrement;
setTimeout(function(){
    countdownElem.innerHTML = currTime;
    currTime = currTime - 5;
}, timeout);

timeout = timeout + timeoutIncrement;
setTimeout(function(){
    countdownElem.innerHTML = currTime;
    currTime = currTime - 5;
}, timeout);

timeout = timeout + timeoutIncrement;
setTimeout(function(){
    countdownElem.innerHTML = currTime;
    currTime = currTime - 5;
}, timeout);

timeout = timeout + timeoutIncrement;
setTimeout(function(){
    countdownElem.innerHTML = currTime;
    currTime = currTime - 5;
}, timeout);

timeout = timeout + timeoutIncrement;

setTimeout(function(){
    alert("Blastoff!"); //alert that pops up once countdown hits zero
    countdownElem.innerHTML = currTime;
    currTime = currTime - 5;
}, timeout);
//no timeout = timeout + timeoutIncrement since there is no further subtractions

}
