const secondHand = document.querySelector(".second-hand");
const minutesHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

function setDate() {
const now = new Date();
const seconds = now.getSeconds();
const secondsDegrees = ((seconds / 60) * 360);
secondHand.style.transform = `rotate(${secondsDegrees + 90}deg)`;


const minutes = now.getMinutes();
const minutesDegrees = ((minutes / 60) * 360);
minutesHand.style.transform = `rotate(${minutesDegrees + 90}deg)`;

const hours = now.getHours();
const hoursDegrees = ((hours / 60) * 360);
hourHand.style.transform = `rotate(${hoursDegrees + 60}deg)`;
console.log(hours);
}
setInterval(setDate,1000);