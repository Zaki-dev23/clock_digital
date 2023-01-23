const second = document.querySelector(".second");
const minute = document.querySelector(".minute");
const hour = document.querySelector(".hour");
const am = document.querySelector(".am");

function time(){
    var seconds = new Date().getSeconds();
var minutes = new Date().getMinutes();
var hours = new Date().getHours();

second.innerHTML = seconds;
minute.innerHTML = minutes;
hour.innerHTML = hours;

}
time();
setInterval(time,1000)
