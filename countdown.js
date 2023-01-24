


setInterval(function countdown() {
var releaseDate = new Date("Dec 15, 2022");
var today = new Date();
var timeLeft = releaseDate - today;
var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));


document.getElementById("count").innerHTML = days + " days Until this Title is Released";


    if (timeLeft < 0) {
        clearInterval();
        document.getElementById("count").innerHTML = "This title has been released!";
    }
}, 1000);