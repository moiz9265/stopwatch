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

    if(msec>=60)
    {
        min
    }
}


function start()
{
    interval = setInterval(timer,10);
   
}

function pause()
{

}
function reset()
{

}