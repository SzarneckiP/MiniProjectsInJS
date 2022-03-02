"use strict";
const converter = document.querySelector('#converter');
const result = document.querySelector('.result');
const convBtn = document.querySelector('.conv');
const resetBtn = document.querySelector('.reset');
const changeBtn = document.querySelector('.change');
const one = document.querySelector('.one');
const two = document.querySelector('.two');
let fahrenheit;
let celsius;
const changeFahToCel = () => {
    fahrenheit = converter.value * 1.8 + 32;
    result.textContent = `${converter.value}°C to ${fahrenheit.toFixed(1)}°F`;
    converter.value = '';
};
const changeCelToFah = () => {
    celsius = (converter.value - 32) / 1.8;
    result.textContent = `${converter.value}°F to ${celsius.toFixed(1)}°C`;
    converter.value = '';
};
const swapDegrees = () => {
    if (one.textContent === '°C') {
        one.textContent = '°F';
        two.textContent = '°C';
        result.textContent = '';
    }
    else {
        one.textContent = '°C';
        two.textContent = '°F';
        result.textContent = '';
    }
};
const conversion = () => {
    if (converter.value !== '') {
        if (one.textContent === '°C') {
            changeFahToCel();
        }
        else {
            changeCelToFah();
        }
    }
    else {
        result.textContent = 'Podaj jakąś zawartość!';
    }
};
const reset = () => {
    result.textContent = '';
    converter.value = '';
};
changeBtn?.addEventListener('click', swapDegrees);
convBtn.addEventListener('click', conversion);
resetBtn.addEventListener('click', reset);
