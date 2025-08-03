const trafficLightEl = document.querySelector('#trafficLight1');
const trafficLightE2 = document.querySelector('#trafficLight2');
const trafficLightE3 = document.querySelector('#trafficLight3');

function makeRed() {
    trafficLightE2.style.background = ('black');
    trafficLightE3.style.background = ('black');
    trafficLightEl.style.background = ('red');

    trafficLightEl.removeEventListener('click', makeRed);

    trafficLightEl.addEventListener('click', makeYellow);
    trafficLightE2.addEventListener('click', makeYellow2);
    trafficLightE3.addEventListener('click', makeYellow3);
}

function makeYellow() {
    trafficLightE2.style.background = ('yellow');
    trafficLightE3.style.background = ('black');
    trafficLightEl.style.background = ('black');

    trafficLightEl.removeEventListener('click', makeYellow);

    trafficLightEl.addEventListener('click', makeGreen);
    trafficLightE2.addEventListener('click', makeGreen2);
    trafficLightE3.addEventListener('click', makeGreen3);
}

function makeGreen() {
    trafficLightE2.style.background = ('black');
    trafficLightE3.style.background = ('green');
    trafficLightEl.style.background = ('black');

    trafficLightEl.removeEventListener('click', makeGreen);

    trafficLightEl.addEventListener('click', makeRed);
    trafficLightE2.addEventListener('click', makeRed2);
    trafficLightE3.addEventListener('click', makeRed3);
}

function makeRed2() {
    trafficLightEl.style.background = ('red');
    trafficLightE3.style.background = ('black');
    trafficLightE2.style.background = ('black');

    trafficLightE2.removeEventListener('click', makeRed2);

    trafficLightE2.addEventListener('click', makeYellow2);
    trafficLightEl.addEventListener('click', makeYellow);
    trafficLightE3.addEventListener('click', makeYellow3);
}

function makeYellow2() {
    trafficLightEl.style.background = ('black');
    trafficLightE3.style.background = ('black');
    trafficLightE2.style.background = ('yellow');

    trafficLightE2.removeEventListener('click', makeYellow2);

    trafficLightE2.addEventListener('click', makeGreen2);
    trafficLightEl.addEventListener('click', makeGreen);
    trafficLightE3.addEventListener('click', makeGreen3);
}

function makeGreen2() {
    trafficLightEl.style.background = ('black');
    trafficLightE3.style.background = ('green');
    trafficLightE2.style.background = ('black');

    trafficLightE2.removeEventListener('click', makeGreen2);

    trafficLightE2.addEventListener('click', makeRed2);
    trafficLightEl.addEventListener('click', makeRed);
    trafficLightE3.addEventListener('click', makeRed3);
}

function makeRed3() {
    trafficLightEl.style.background = ('red');
    trafficLightE2.style.background = ('black');
    trafficLightE3.style.background = ('black');

    trafficLightE3.removeEventListener('click', makeRed3);

    trafficLightE3.addEventListener('click', makeYellow3);
    trafficLightEl.addEventListener('click', makeYellow);
    trafficLightE2.addEventListener('click', makeYellow2);
}

function makeYellow3() {
    trafficLightEl.style.background = ('black');
    trafficLightE2.style.background = ('yellow');
    trafficLightE3.style.background = ('black');

    trafficLightE3.removeEventListener('click', makeYellow3);

    trafficLightE3.addEventListener('click', makeGreen3);
    trafficLightEl.addEventListener('click', makeGreen);
    trafficLightE2.addEventListener('click', makeGreen2);
}

function makeGreen3() {
    trafficLightEl.style.background = ('black');
    trafficLightE2.style.background = ('black');
    trafficLightE3.style.background = ('green');

    trafficLightE3.removeEventListener('click', makeGreen3);

    trafficLightE3.addEventListener('click', makeRed3);
    trafficLightEl.addEventListener('click', makeRed);
    trafficLightE2.addEventListener('click', makeRed2);
}

trafficLightEl.addEventListener('click', makeRed);
trafficLightE2.addEventListener('click', makeRed2);
trafficLightE3.addEventListener('click', makeRed3);