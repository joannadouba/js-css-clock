const $hrHand = document.querySelector('.hour-hand');
const $minHand = document.querySelector('.min-hand');
const $secHand = document.querySelector('.second-hand');
const $hands = document.querySelectorAll('.hand');

// $minHand.style.transform = `scaleX(0.75)`;

// Find the current date and get the minutes and seconds
let dateNow = new Date();

let hrNow = dateNow.getHours() - 12;
let minNow = dateNow.getMinutes();
let secNow = dateNow.getSeconds();


let secDeg = (6 * secNow) + 90;
console.log(`secNow: ${secNow}`)
console.log(`secDeg: ${secDeg}`)

$secHand.style.transform = `rotate(${secDeg}deg)`

// I am adding 90deg below so that the hands start from 12 o'clock
let hrDeg = (30 * hrNow) +(0.5 * minNow) + 90;
console.log('hrDeg: ' + hrDeg)
$hrHand.style.transform = `rotate(${hrDeg}deg)  scaleX(0.75)`;

// The first second hand rotation should be 6 degrees (360deg/60sec)
let minDeg = (6 * minNow) + 90;
$minHand.style.transform = `rotate(${minDeg}deg)`;
console.log(minDeg, 'minDeg')

 
// Repeat the rotation by adding 6 degrees the 'transform' property rotate using the setInterval() function every second
setInterval(() => {
    $secHand.style.transform = `rotate(${secDeg}deg)`;
    secDeg += 6;
}, 1000);

// Repeat the rotation by adding 6 degrees the 'transform' property rotate using the setInterval() function every minute
setInterval(() => {
    console.log('a minute has passed');
    $minHand.style.transform = `rotate(${minDeg}deg)`;
    minDeg += 6;
}, 60000);

// Repeat the rotation by adding 6 degrees the 'transform' property rotate using the setInterval() function every hour
setInterval(() => {
    console.log('a minute has passed');
    $minHand.style.transform = `rotate(${minDeg}deg)`;
    minDeg+=6;
}, 3600000);

