const colors= [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
];
const refs = {
    body : document.querySelector('body'),
    startBtn : document.querySelector('[data-action="start"]'),
    stopBtn : document.querySelector('[data-action="stop"]'),
}

let COLORS_LENGTH = colors.length;


let intervalID = null;
let isBtnRun = false;

refs.startBtn.addEventListener('click', onStartBtnClik);
refs.stopBtn.addEventListener('click', onStopBtnClik);

function onStartBtnClik() {
    if (isBtnRun) {
        return;
    }
    isBtnRun = true;
    refs.startBtn.disabled = true;
    intervalID = setInterval(chengeBodyColor, 1000,);
   
}

function chengeBodyColor() {
    let randomColor = randomIntegerFromInterval(1, COLORS_LENGTH)
    refs.body.style.backgroundColor = colors[randomColor];
}

function onStopBtnClik() {
    clearInterval(intervalID);
    isBtnRun = false;
    refs.startBtn.disabled = false;
}

function randomIntegerFromInterval(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
};