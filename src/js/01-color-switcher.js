import { throttle } from "lodash";

const buttonStart = document.querySelector('button[data-start]');
console.log(buttonStart);
const buttonStop = document.querySelector('button[data-stop]');
console.log(buttonStop);


buttonStart.addEventListener('click', () => {
  buttonStart.disabled = true;
    buttonStop.disabled = false;
    document.body.style.backgroundColor = getRandomHexColor();

});




function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


buttonStop.addEventListener('click', () => {
    buttonStop.disabled = true;
    buttonStart.disabled = false;
});


