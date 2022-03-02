const burgerBtn = document.querySelector('.burger') as HTMLButtonElement | null
const barsIco = document.querySelector('.fa-bars') as HTMLElement | null
const xIco = document.querySelector('.fa-times') as HTMLElement | null
const nav = document.querySelector('nav ul') as HTMLElement | null

const handleNav = () => {
    nav?.classList.toggle('active')
    burgerBtn?.classList.toggle('active')
    barsIco?.classList.toggle('hide')
    xIco?.classList.toggle('hide')
}

burgerBtn?.addEventListener('click', handleNav)