const input = document.querySelector('input')
const image = document.querySelector('img')
const answer = document.querySelector('.answer')
const error = document.querySelector('.error')

const answers = [
    'Tak!', 'Nie.', 'Może.', 'Ciężko powiedzieć...', 'Nie chcesz wiedzieć!', 'Być może.'
]

const runAnimation = () => {
    image.classList.add('shake-animation')
    setTimeout(checkLength, 1000)
}

const checkLength = () => {
    if (input.value !== '') {
        if (input.value.slice(-1).includes('?')) {
            randomAnswer()
            error.textContent = ''
        } else {
            answer.textContent = ''
            error.textContent = 'Pytanie musi być zakończone "?".'
        }
    } else {
        error.textContent = 'Wpisz jakieś pytanie...'
        answer.textContent = ''
    }
    image.classList.remove('shake-animation')
}

const randomAnswer = () => {
    const random = answers[Math.floor(Math.random() * 5)]
    answer.innerHTML = `<span>Odpowiedz: </span>${random}`
}


image.addEventListener('click', runAnimation)