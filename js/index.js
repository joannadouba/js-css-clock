const $hrHand = document.querySelector('.hour-hand');
const $minHand = document.querySelector('.min-hand');
const $secHand = document.querySelector('.second-hand');

// The first second hand rotation should be 6 degrees (360deg/60sec)
let secDeg = 6;


let hrDeg = 6;
// The first second hand rotation should be 6 degrees (360deg/60sec)
// angle = hour * 30 degrees
let minDeg = 6;

// Repeat the rotation by adding 6 degrees the 'transform' property rotate using the setInterval() function every second
setInterval(() => {
    $secHand.style.transform = `rotate(${secDeg}deg)`;
    secDeg += 6;
}, 1000);

// Repeat the rotation by adding 6 degrees the 'transform' property rotate using the setInterval() function every minute
setInterval(() => {
    console.log('a minute has passed');
    $minHand.style.transform = `rotate(${minDeg}deg)`;
    minDeg+=6;
}, 60000);

// Repeat the rotation by adding 6 degrees the 'transform' property rotate using the setInterval() function every hour
setInterval(() => {
    console.log('a minute has passed');
    $minHand.style.transform = `rotate(${minDeg}deg)`;
    minDeg+=6;
}, 3600000);

