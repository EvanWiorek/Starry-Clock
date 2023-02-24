var dHours = document.querySelector(".hours")
var dMinutes = document.querySelector(".minutes")
var amPM = document.querySelector(".ampm")
var hours = document.getElementById("hours");
var minutes = document.getElementById("minutes");
var seconds = document.getElementById("seconds");


//because Date() already exists in Javascript, we are making a "new" instance of it for our code. It will display a new date, as in today
//
function todaysSeconds() {
    var newSeconds = new Date().getSeconds();
    var secondsInMinute = new Date().getMinutes() * 60;
    var secondsInHour = new Date().getHours() * 3600;
    var todaysSeconds = newSeconds + secondsInMinute + secondsInHour;
    return todaysSeconds;
}

//these multiply 360 degrees by the current number of seconds. ex: current time in seconds is 64862 * 360 = 23350320
// divivde that by the number of seconds in 12 hours. 23350320 / 43200 = 540.51666
// add 180, so 540.516
// then modulus that by 360 lol what. 720.516/
//this was borrowed from the official example on Coding Dojo's website. I am honestly not sure how to figure out these three functions on my own. 
//this helped me grasp these functions: https://makeschool.org/mediabook/oa/tracks/intro-to-cs/create-a-clock-app/degrees-rotation-math/
function getHourHandAngle(s) {
    return ((360 * s / 43200) + 180) % 360;
}

function getMinuteHandAngle(s) {
    return ((6 * s / 60) + 180) % 360;
}

function getSecondHandAngle(s) {
    return ((6 * s) + 180) % 360; //second hand moves 6 degrees/second
}


//this works by continuously changing the positions of each element (rotate) based on the current time
setInterval(() => {
    var s = todaysSeconds();
    hours.style.transform = `rotate(${getHourHandAngle(s)}deg)`;
    minutes.style.transform = `rotate(${getMinuteHandAngle(s)}deg)`;
    seconds.style.transform = `rotate(${getSecondHandAngle(s)}deg)`;
}, 1000);


setInterval (() => {
    var date = new Date();
    var twelveHours = date.getHours();
    var singleMinutes = date.getMinutes();
    var doubleMinutes = parseFloat(singleMinutes);

    if (twelveHours == 0) {
        twelveHours = 12;
    }
    if (twelveHours > 12) {
        twelveHours -= 12;
        amPM.innerText = "PM";
    }
    if (singleMinutes < 10) {
        dMinutes.innerText = "0" + doubleMinutes;
    }
    else dMinutes.innerText = doubleMinutes;

    dHours.innerText = twelveHours;
}, 1000);
