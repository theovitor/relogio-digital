const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');
const body = document.querySelector('body');
const fundoTempo = new Date().getHours();

const relogio = setInterval(function time() {
  let dateToday = new Date();
  let hr = dateToday.getHours();
  let min = dateToday.getMinutes();
  let sec = dateToday.getSeconds();

  if (hr < 10) hr = '0' + hr;
  if (min < 10) min = '0' + min;
  if (sec < 10) sec = '0' + sec;

  horas.textContent = hr;
  minutos.textContent = min;
  segundos.textContent = sec;
});

if (6 <= fundoTempo && fundoTempo < 12) {
  body.style.backgroundImage = 'linear-gradient(120deg, #FFFFCC, #3399FF)';
} else if (12 <= fundoTempo && fundoTempo < 18) {
  body.style.backgroundImage = 'linear-gradient(120deg, #3399FF, #FFCC99)';
} else {
  body.style.backgroundImage = 'linear-gradient(120deg,#000000, #330066)';
}
