console.log("Hello World!!!") 
let tick=new Audio("TickSound.mp3");
setInterval(() => {
   
    let date = new Date();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let hour_rotation = 30 * hour + minutes / 2;
    let minutes_rotation = 6 * minutes;
    let seconds_rotation = 6 * seconds;
    document.getElementById("hour").style.transform = `rotate(${hour_rotation}deg)`;
    document.getElementById("minutes").style.transform = `rotate(${minutes_rotation}deg)`;
    document.getElementById("seconds").style.transform = `rotate(${seconds_rotation}deg)`;
    tick.play();
}, 1000)