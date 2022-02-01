

const hh = document.querySelector('.hrs');
const mm = document.querySelector('.min');
const ss = document.querySelector('.sec');

setInterval(() => {

    let day = new Date();

let hrs = day.getHours();
let min = day.getMinutes();
let sec = day.getSeconds();


let hrs_rotated = 30 * hrs + min / 2;
let min_rotated = 6 * min;
let sec_rotated = 6 * sec;

hh.style.transform = `rotate(${hrs_rotated}deg)`;
mm.style.transform = `rotate(${min_rotated}deg)`;
ss.style.transform = `rotate(${sec_rotated}deg)`;

},1000);