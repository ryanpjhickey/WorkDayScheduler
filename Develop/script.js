var work8 = document.querySelector("#work8");
var work9 = document.querySelector("#work9");
var work10 = document.querySelector("#work10");
var work11 = document.querySelector("#work11");
var work12 = document.querySelector("#work12");
var work1 = document.querySelector("#work1");
var work2 = document.querySelector("#work2");
var work3 = document.querySelector("#work3");
var work4 = document.querySelector("#work4");
var savePng = document.querySelector(".savePng")

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


// momentjs workStart
var currentTime = moment().format("MMMM D, YYYY h:mm A")
document.querySelector("#currentDay").textContent = currentTime

savePng.addEventListener('click', workComment)

//create function to save user input
function workComment() {
  var toDoItem8 = work8.value;
  var toDoItem9 = work9.value;
  var toDoItem10 = work10.value;
  var toDoItem11 = work11.value;
  var toDoItem12 = work12.value;
  var toDoItem1 = work1.value;
  var toDoItem2 = work2.value;
  var toDoItem3 = work3.value;
  var toDoItem4 = work4.value;

  var toDoList =
  {
    toDoItem8: toDoItem8,
    toDoItem9: toDoItem9,
    toDoItem10: toDoItem10,
    toDoItem11: toDoItem11,
    toDoItem12: toDoItem12,
    toDoItem1: toDoItem1,
    toDoItem2: toDoItem2,
    toDoItem3: toDoItem3,
    toDoItem4: toDoItem4,
  }

  console.log(toDoList)

  var toDoDay = JSON.parse(localStorage.getItem("toDoToday")) || []
  toDoDay.push(toDoList)
  localStorage.setItem("toDoToday", JSON.stringify(toDoDay))
}

function displayWorkComment() {
  var toDoDay = JSON.parse(localStorage.getItem("toDoToday")) || []
  console.log(toDoDay)
  for (let index = 0; index < toDoDay.length; index++) {
    work8.textContent = toDoDay[index].toDoItem8;
    work9.textContent = toDoDay[index].toDoItem9;
    work10.textContent = toDoDay[index].toDoItem10;
    work11.textContent = toDoDay[index].toDoItem11;
    work12.textContent = toDoDay[index].toDoItem12;
    work1.textContent = toDoDay[index].toDoItem1;
    work2.textContent = toDoDay[index].toDoItem2;
    work3.textContent = toDoDay[index].toDoItem3;
    work4.textContent = toDoDay[index].toDoItem4;

  }
}

displayWorkComment()

/* start momentjs time idea
var workStart = "2022-08-08 8:00:00"
console.log(workStart);

for (let index = 0; index < workHours.length; index++) {
  workStart;
}

workHours[0].textContent = moment(workStart).format('h:mm A');
workHours[1].textContent = moment(workStart).add(1, "hours").format("HH:mm");
workHours[2].textContent = moment(workStart).add(2, "hours").format("HH:mm");
workHours[3].textContent = moment(workStart).add(3, "hours").format("HH:mm");
workHours[4].textContent = moment(workStart).add(4, "hours").format("HH:mm");
workHours[5].textContent = moment(workStart).add(5, "hours").format("HH:mm");
workHours[6].textContent = moment(workStart).add(6, "hours").format("HH:mm");
workHours[7].textContent = moment(workStart).add(7, "hours").format("HH:mm");
workHours[8].textContent = moment(workStart).add(8, "hours").format("HH:mm");

end moment js idea
*/

//end momentjs
