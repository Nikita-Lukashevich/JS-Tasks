const time_hour = document.querySelector('.hour');
const time_min = document.querySelector('.min');
const time_sec = document.querySelector('.sec');

setInterval(() => time_hour.innerText = (new Date().toLocaleTimeString().slice(0, 2)), 1000);
setInterval(() => time_min.innerText = (new Date().toLocaleTimeString().slice(3, 5)), 1000);
setInterval(() => time_sec.innerText = (new Date().toLocaleTimeString().slice(6, 8)), 1000);