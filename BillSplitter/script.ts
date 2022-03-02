const priceInput = document.querySelector('#price') as HTMLInputElement
const peopleInput = document.querySelector('#people') as HTMLInputElement
const tip = document.querySelector('#tip') as any
const countBtn = document.querySelector('.count') as HTMLButtonElement
const err = document.querySelector('.error') as Element
const cost = document.querySelector('.cost') as Element | any
const costInfo = document.querySelector('.cost-info') as Element | any


const checkFields = () => {
    if (priceInput.value !== '' && peopleInput.value !== '' && tip.value != 0) {
        countBill()
        err.textContent = ''
        costInfo.style.display = 'block'
    } else {
        err.textContent = 'Wypełnij wszystki pola!'
        costInfo.style.display = 'none'
    }
}

const countBill = () => {
    const price: number = parseFloat(priceInput.value)
    const people: number = parseInt(peopleInput.value)
    const tips: number = parseFloat(tip.value)

    const sum: number = (price + price * tips) / people
    costInfo.style.display = 'block'
    cost.textContent = sum.toFixed(2)
}

countBtn.addEventListener('click', checkFields)























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