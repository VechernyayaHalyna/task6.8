// Введение переменных

let trafficLightEl = document.querySelector('#trafficLight');
let trafficLightEl1 = document.querySelector('#trafficLight1');
let trafficLightEl2 = document.querySelector('#trafficLight2');
let block = document.querySelector('.block');

// Функция "зеленый свет"

function makeGreen() {
    trafficLightEl.style.background = ('green');
    trafficLightEl1.style.background = ('black');
    trafficLightEl2.style.background = ('black'); 
    block.removeEventListener('click', makeGreen);
    block.addEventListener('click', makeYellow);
}

// Функция "желтый свет"

function makeYellow() {
    trafficLightEl1.style.background = ('yellow');
    trafficLightEl.style.background = ('black'); 
    trafficLightEl2.style.background = ('black');  
    block.removeEventListener('click', makeYellow);
    block.addEventListener('click', makeRed);
}

// Функция "красный свет"

function makeRed() {
    trafficLightEl2.style.background = ('red');
    trafficLightEl1.style.background = ('black');
    trafficLightEl.style.background = ('black');   
    block.removeEventListener('click', makeRed);
    block.addEventListener('click', makeGreen);
}

// Первый клик

block.addEventListener('click', makeGreen);

