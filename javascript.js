const calendar = document.querySelector('.calendar');
const prevBtn = calendar.querySelector('.prev');
const nextBtn = calendar.querySelector('.next');
const monthTitle = calendar.querySelector('.month');
const daysContainer = calendar.querySelector('.days');

const daysOfWeek = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];
const months = [
  'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho',
  'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
];

let today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();
let currentDate = today.getDate();

function updateCalendar() {
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
  const lastDateOfMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const lastDateOfPrevMonth = new Date(currentYear, currentMonth, 0).getDate();

  const days = [];

  // Adiciona os dias em branco no início do calendário
  for (let i = 0; i < firstDayOfMonth; i++) {
    days.push(`<div class="day blank">${lastDateOfPrevMonth - firstDayOfMonth + i + 1}</div>`);
  }

  // Adiciona os dias do mês atual
  for (let i = 1; i <= lastDateOfMonth; i++) {
    let classNames = 'day';
    if (i === currentDate && currentMonth === today.getMonth() && currentYear === today.getFullYear()) {
      classNames += ' today';
    }

    if (i === 25 && currentMonth === today.getMonth() && currentYear === today.getFullYear()) {
      classNames += ' special';
    }
    if (i === 26 && currentMonth === today.getMonth() && currentYear === today.getFullYear()) {
      classNames += ' special';
    }
    days.push(`<div class="${classNames}">${i}</div>`);
  }
  

  // Adiciona os dias em branco no final do calendário
  const daysToShow = 35; // Mostra 6 semanas (6 x 7 = 42)
  const daysCount = days.length;
  for (let i = 1; i <= daysToShow - daysCount; i++) {
    days.push(`<div class="day blank">${i}</div>`);
  }

  daysContainer.innerHTML = days.join('');
  monthTitle.textContent = months[currentMonth] + ' ' + currentYear;
  

}

updateCalendar();

prevBtn.addEventListener('click', () => {
currentMonth--;
if (currentMonth < 0) {
currentMonth = 11;
currentYear--;
}
updateCalendar();
});

nextBtn.addEventListener('click', () => {
currentMonth++;
if (currentMonth > 11) {
currentMonth = 0;
currentYear++;
}
updateCalendar();
});      
console.log("Caso tu esteja vendo essa mensagem, me manda msg. Gostaria de ser teu amigo: 91935009837")