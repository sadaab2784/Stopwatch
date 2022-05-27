// function for Displaying time
const timer = document.getElementById("watch_container");
var hour = 0;
var minute = 0;
var second = 0;
var stoptime = true;

// function for start time and calling the timerCycle function
function startTimer(){
    if(stoptime == true){
        stoptime = false;
        timerCycle();
    }
}

// function for Stop the time 
function stopTimer(){
    if(stoptime == false){
        stoptime = true;
    }
}

// function for Reset the time
function resetTimer(){
    timer.innerHTML = "00:00:00";
    stoptime = true;
    hour = 0;
    minute = 0;
    second = 0;
}

function timerCycle(){
    if(stoptime  == false){
        second = parseInt(second);    // Here the parseInt convert the second, minute & hour into Integer
        minute = parseInt(minute);
        hour = parseInt(hour);

        second = second + 1;

        // here the condition, if second is equal to 60 then it converted into minute
        if(second == 60){
            minute = minute + 1; 
            second = 0;       
        }
        
        // same as second, if the minute is equal to 60 then it converted into hour
        if(minute == 60){
            hour = hour + 1;
            minute = 0;
            second = 0;
        }
        
        // here the condition, if second is lesser than 10 then concatenate "0" in the second
        if(second < 10){
            second = "0" + second;
        }

        // same as second, if minute is lesser than 10 then concatenate "0" in the minute
        if(minute < 10){
            minute = "0" + minute;
        }
        
        // same as minute, if hour is lesser than 10 then concatenate "0" in the hour
        if(hour < 10){
            hour = "0" + hour;
        }

        timer.innerHTML = hour + ":" + minute + ":" + second;

        setTimeout("timerCycle()", 1000);
    }
}

