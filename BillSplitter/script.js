"use strict";
const priceInput = document.querySelector('#price');
const peopleInput = document.querySelector('#people');
const tip = document.querySelector('#tip');
const countBtn = document.querySelector('.count');
const err = document.querySelector('.error');
const cost = document.querySelector('.cost');
const costInfo = document.querySelector('.cost-info');
const checkFields = () => {
    if (priceInput.value !== '' && peopleInput.value !== '' && tip.value != 0) {
        countBill();
        err.textContent = '';
        costInfo.style.display = 'block';
    }
    else {
        err.textContent = 'Wypełnij wszystki pola!';
        costInfo.style.display = 'none';
    }
};
const countBill = () => {
    const price = parseFloat(priceInput.value);
    const people = parseInt(peopleInput.value);
    const tips = parseFloat(tip.value);
    const sum = (price + price * tips) / people;
    costInfo.style.display = 'block';
    cost.textContent = sum.toFixed(2);
};
countBtn.addEventListener('click', checkFields);
// const checkFields = () => {
//     if (priceInput?.value == '' || peopleInput?.value == '' || tip.value == 0) {
//         err.textContent = 'Wszystkie pola muszą być wypełnione!'
//         costInfo.style.display = 'none'
//     } else {
//         countBill()
//         err.textContent = ''
//     }
// }
// const countBill = () => {
//     const price: number = parseFloat(priceInput.value)
//     const people: number = parseInt(peopleInput.value)
//     const tips: number = parseFloat(tip.value)
//     const sum: number = (price + price * tips) / people
//     costInfo.style.display = 'block'
//     cost.textContent = sum.toFixed(2)
// }
// countBtn.addEventListener('click', checkFields)
