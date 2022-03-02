const username = document.querySelector('#username')
const pass = document.querySelector('#pass')
const repeatedPass = document.querySelector('#repeat-pass')
const email = document.querySelector('#email')
const sendBtn = document.querySelector('.send')
const closeBtn = document.querySelector('.close')
const clearBtn = document.querySelector('.clear')
const popup = document.querySelector('.popup')

const arr = [username, pass, repeatedPass, email]

const showError = (input, msg) => {
    const formBox = input.parentElement
    const errorMsg = formBox.querySelector('.error-text')
    formBox.classList.add('error')
    errorMsg.textContent = msg
}

const clearError = input => {
    const formBox = input.parentElement
    formBox.classList.remove('error')
}

const checkForm = input => {
    input.forEach(el => {
        if (el.value === '') {
            showError(el, el.placeholder)
        } else {
            clearError(el)
        }
    })
}

const checkLength = (input, min) => {
    const secondError = `${input.previousElementSibling.innerText.slice(0, -1)} powinna składać się z min. ${min} znaków.`
    if (input.value.length < min) {
        showError(input, secondError)
    }
}

const checkPassword = (pass1, pass2) => {
    if (pass1.value !== pass2.value) {
        showError(pass2, 'Hasła do siebie nie pasują.')
    }
}

const checkEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    if (re.test(email.value)) {
        clearError(email)
    } else {
        showError(email, 'E-mail jest niepoprawny.')
    }
}

const showPopup = () => {
    const allInputs = document.querySelectorAll('.form-box')
    let errCount = 0


    allInputs.forEach(el => {
        if (el.classList.contains('error')) {
            errCount++
        }
    })

    if (errCount === 0) {
        popup.classList.add('show-popup')
    }
}


sendBtn.addEventListener('click', e => {
    e.preventDefault()

    checkForm([username, pass, repeatedPass, email])
    checkLength(username, 3)
    checkLength(pass, 8)
    checkPassword(pass, repeatedPass)
    checkEmail(email)
    showPopup()
})


clearBtn.addEventListener('click', e => {
    e.preventDefault()

    arr.forEach(el => {
        el.value = ''
        clearError(el)
    })
})

closeBtn.addEventListener('click', e => {
    e.preventDefault()

    arr.forEach(el => {
        el.value = ''
        clearError(el)
        popup.classList.remove('show-popup')
    })
})
