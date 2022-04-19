function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

let catUl = document.querySelector('#days');

for (let i = 0; i < dezDaysList.length; i += 1) {
  let dayList = dezDaysList[i];

  let listLine = document.createElement('li');
  listLine.innerHTML = dayList
  catUl.appendChild(listLine);
  listLine.classList.add('day')
  if (dayList === 24 || dayList === 25 || dayList === 31) {
    listLine.classList.add('holiday');
  }
  if (dayList === 4 || dayList === 11 || dayList === 18 || dayList === 25) {
    listLine.classList.add('friday')
  }
}
function hollidays(Feriados) {

}
let buttons = document.querySelector('.buttons-container');
let buttonHoliday = document.createElement('button');
buttons.appendChild(buttonHoliday);
buttonHoliday.setAttribute('id', 'btn-holiday');
document.querySelector('#btn-holiday').innerHTML = "Feriados";

const catHolidays = document.querySelector('#btn-holiday');
const classHoliday = document.getElementsByClassName('holiday');
catHolidays.addEventListener("click", clickHolidays);

function clickHolidays() {
  for (let buttonHColor of classHoliday) {
    if (buttonHColor.style.backgroundColor != 'rgb(42, 163, 42)') {
      buttonHColor.style.backgroundColor = 'rgb(42, 163, 42)';
      buttonHColor.style.color = 'rgb(238, 238, 238)'
    } else {
      buttonHColor.style.backgroundColor = 'rgb(238,238,238)';
      buttonHColor.style.color = 'rgb(102, 102, 102)'
    }
  }
}
function friday(SextaFeira) {

}
let buttonFriday = document.createElement('button');
buttons.appendChild(buttonFriday);
buttonFriday.setAttribute('id', 'btn-friday');
document.querySelector('#btn-friday').innerHTML = "Sexta-Feira";
