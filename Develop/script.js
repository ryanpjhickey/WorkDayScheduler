var work8 = document.querySelector("#work8");
var work9 = document.querySelector("#work9");
var work10 = document.querySelector("#work10");
var work11 = document.querySelector("#work11");
var work12 = document.querySelector("#work12");
var work1 = document.querySelector("#work1");
var work2 = document.querySelector("#work2");
var work3 = document.querySelector("#work3");
var work4 = document.querySelector("#work4");

var workHours = [
  work8,
  work9,
  work10,
  work11,
  work12,
  work1,
  work2,
  work3,
  work4,
];

for (let index = 0; index < workHours.length; index++) {
  workStart;
}

// momentjs workStart

var workStart = "2022-08-08 08:00:00";
console.log(workStart);

workHours[0].textContent = moment(workStart).format("HH:mm");
workHours[1].textContent = moment(workStart).add(1, "hours").format("HH:mm");
workHours[2].textContent = moment(workStart).add(2, "hours").format("HH:mm");
workHours[3].textContent = moment(workStart).add(3, "hours").format("HH:mm");
workHours[4].textContent = moment(workStart).add(4, "hours").format("HH:mm");
workHours[5].textContent = moment(workStart).subtract(7, "hours").format("HH:mm");
workHours[6].textContent = moment(workStart).subtract(6, "hours").format("HH:mm");
workHours[7].textContent = moment(workStart).subtract(5, "hours").format("HH:mm");
workHours[8].textContent = moment(workStart).subtract(4, "hours").format("HH:mm");

//end momentjs
