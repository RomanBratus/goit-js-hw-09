//Напиши скрипт, який після натискання кнопки «Start», раз на секунду змінює колір
// фону <body> на випадкове значення, використовуючи інлайн стиль. Натисканням на
// кнопку «Stop» зміна кольору фону повинна зупинятися.

const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
let timer = null;

startBtn.addEventListener("click",onStart);
stopBtn.addEventListener('click', onStop);

function onStart() {
  timer = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
    }, 1000)
  startBtn.disabled = true;
  stopBtn.disabled = false;
}

function onStop (){
  clearInterval(timer);
  startBtn.disabled = false;
  stopBtn.disabled = true;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}