type ElementMy = Element | null | HTMLElement | any

const sizeUpBtn = document.querySelector('.sizeUp')
const sizeDownBtn = document.querySelector('.sizeDown')
const p: ElementMy = document.querySelector('p')
const colorBtn = document.querySelector('.color')

let sizeNumber = 36

const sizeUp = () => {
    if (sizeNumber !== 60) {
        sizeNumber += 4
        p.style.fontSize = `${sizeNumber}px`
    }
}

const sizeDown = () => {
    if (sizeNumber !== 20) {
        sizeNumber -= 4
        p.style.fontSize = `${sizeNumber}px`
    }
}

const changeColor = () => {
    const red = Math.floor(Math.random() * 225)
    const green = Math.floor(Math.random() * 225)
    const blue = Math.floor(Math.random() * 225)

    p.style.color = `rgb(${red},${green},${blue})`
}


sizeUpBtn?.addEventListener('click', sizeUp)
sizeDownBtn?.addEventListener('click', sizeDown)
colorBtn?.addEventListener('click', changeColor)

