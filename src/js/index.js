import colors from "./hex.js";
const body = document.querySelector('body');
const startBtn = document.querySelector('[data-action="start"]');
const stopBtn = document.querySelector('[data-action="stop"]');
let COLORS_LENGTH = colors.length;
let randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};
let intervalID = null;

startBtn.addEventListener('click', onStartBtnClik);
stopBtn.addEventListener('click', onStopBtnClik);

function onStartBtnClik() {
    intervalID = setInterval(chengeBodyColor, 1000,)

}

function chengeBodyColor() {
    let randomColor = randomIntegerFromInterval(1, COLORS_LENGTH)
    body.style.backgroundColor = colors[randomColor];
}

function onStopBtnClik() {
    clearInterval(intervalID);
}