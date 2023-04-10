var timer = 0;
var theTime = "";
var time_Interval = 1000;

function start(){
    timer = setInterval(updateDisplay, time_Interval);
    document.getElementById("startButton").disabled = true;
    document.getElementById("stopButton").disabled = false;
}

function stop(){
    clearInterval(timer);
    document.getElementById("startButton").disabled = false;
    document.getElementById("stopButton").disabled = true;
}

function updateDisplay(){
    theTime = new Date();
    var theMinutes = theTime.getMinutes();
    if (theMinutes < 10){
        theMinutes = "0" + String(theMinutes);
    }
    var theSeconds = (theTime.getSeconds() < 10 ? + "0" + String(theTime.getSeconds()) : theTime.getSeconds());
    var timeFormat =  theTime.getHours() + ":" + theMinutes + ":" + theSeconds
    
    document.getElementById("timeStamp").innerHTML = timeFormat;
}
