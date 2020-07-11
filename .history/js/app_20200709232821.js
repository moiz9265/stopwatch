var min = 0;
var sec = 0;
var msec = 0;


var minutecount = document.getElementById('minute');
var secondcount = document.getElementById('second');
var milliseccount = document.getElementById('millisec');
var interval;

function timer()
{
    msec++
    milliseccount.innerHTML = msec;

    if(msec>=100)
    {
        sec++
        secondcount.innerHTML = sec;
        msec = 0;
    }
    else if(sec >= 60)
    {
        min++
        minutecount.innerHTML = min;
        sec = 0;
    }
}


function start()
{
    interval = setInterval(timer,10);
   
}

function pause()
{
    clearInterval(interval);
}
function reset()
{
    
}