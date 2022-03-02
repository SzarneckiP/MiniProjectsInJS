const startBtn = document.querySelector('.start');
const pauseBtn = document.querySelector('.pause');
const stopBtn = document.querySelector('.stop');
const resetBtn = document.querySelector('.reset');
const historyBtn = document.querySelector('.history');
const closeModalBtn = document.querySelector('.close');
const infoBtn = document.querySelector('.fa-question');
const stopwatch = document.querySelector('.stopwatch');
const time = document.querySelector('.time');
const timeList = document.querySelector('.time-list');
const modalShadow = document.querySelector('.modal-shadow');

const colorBtn = document.querySelector('.fa-paint-brush');
const colorPanel = document.querySelector('.colors')
const colorOne = document.querySelector('.one');
const colorTwo = document.querySelector('.two');
const colorThree = document.querySelector('.three');
let root = document.documentElement;

let countTime;
let minutes = 0;
let seconds = 0;

let timesArr = [];

const handleStart = () => {
    clearInterval(countTime)
    countTime = setInterval(() => {
        if (seconds < 9) {
            seconds++;
            stopwatch.textContent = `${minutes}:0${seconds}`
        } else if (seconds >= 9 && seconds <= 59) {
            seconds++
            stopwatch.textContent = `${minutes}:${seconds}`
        } else {
            minutes++
            stopwatch.textContent = `${minutes}:00`
        }
    }, 1000);
}

const handleStop = () => {

    time.textContent = `Ostatni czas: ${stopwatch.textContent}`

    if (stopwatch.textContent !== '0:00') {
        time.style.visibility = 'visible';
        timesArr.push(stopwatch.textContent);
    };
    clearStuff();

}

const handlePause = () => {
    clearInterval(countTime);
}

const handleReset = () => {
    timesArr = [];
    time.style.visibility = 'hidden'
    clearStuff();
}

const clearStuff = () => {
    clearInterval(countTime);
    stopwatch.textContent = '0:00';
    timeList.textContent = '';
    seconds = 0;
    minutes = 0;
}

const showHistory = () => {

    timeList.textContent = '';
    let num = 1;

    timesArr.forEach(time => {
        const newTime = document.createElement('li')
        newTime.innerHTML = `Pomiar nr ${num}: <span>${time}</span>`
        timeList.append(newTime);
        num++;
    });
}

const showModal = () => {
    if (!(modalShadow.style.display === 'block')) {
        modalShadow.style.display = 'block';
    } else {
        modalShadow.style.display = 'none';
    }

    modalShadow.classList.toggle('modal-animation');
}

startBtn.addEventListener('click', handleStart);
pauseBtn.addEventListener('click', handlePause);
stopBtn.addEventListener('click', handleStop);
resetBtn.addEventListener('click', handleReset);
historyBtn.addEventListener('click', showHistory);

infoBtn.addEventListener('click', showModal);
closeModalBtn.addEventListener('click', showModal);
window.addEventListener('click', e => e.target === modalShadow ? showModal() : null);

colorBtn.addEventListener('click', () => {
    colorPanel.classList.toggle('show-colors')
});

colorOne.addEventListener('click', () => {
    root.style.setProperty('--first-color', 'rgb(250, 20, 6)');
    root.style.setProperty('--hover-color', 'rgb(172, 56, 50)');

});
colorTwo.addEventListener('click', () => {
    root.style.setProperty('--first-color', 'rgb(6, 132, 250)');
    root.style.setProperty('--hover-color', 'rgb(42, 107, 167)');

});
colorThree.addEventListener('click', () => {
    root.style.setProperty('--first-color', 'rgb(6, 250, 47)');
    root.style.setProperty('--hover-color', 'rgb(37, 158, 57)');

});
