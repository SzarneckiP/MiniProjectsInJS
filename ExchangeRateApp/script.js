const currencyOne = document.querySelector('#currency-one');
const currencyTwo = document.querySelector('#currency-two');
const inputLeft = document.querySelector('.amount-one');
const inputRight = document.querySelector('.amount-two');
const swapBtn = document.querySelector('.swap');
const rateInfo = document.querySelector('.rate-info');

const calculate = () => {
    const API_URL = `https://api.exchangerate.host/convert?from=${currencyOne.value}&to=${currencyTwo.value}`
    fetch(API_URL)
        .then(res => res.json())
        .then(data => {
            const currencyFirst = currencyOne.value;
            const currencySecond = currencyTwo.value;

            const rate = data.result;
            rateInfo.textContent = `1 ${currencyFirst} = ${rate.toFixed(4)} ${currencySecond}`
            inputRight.value = (inputLeft.value * rate).toFixed(2)
        })
}

const swap = () => {
    const oldValue = currencyOne.value;
    currencyOne.value = currencyTwo.value;
    currencyTwo.value = oldValue;
    calculate()
}

calculate();

currencyOne.addEventListener('change', calculate);
currencyTwo.addEventListener('change', calculate);
inputLeft.addEventListener('input', calculate);
swapBtn.addEventListener('click', swap)