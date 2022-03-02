const search = document.querySelector('.search') as HTMLInputElement | null
const li = document.querySelectorAll('li') as unknown as HTMLLIElement | any | null


const searchEngine = () => {
    const value = search?.value.toLocaleLowerCase()

    li?.forEach((el: any) => {
        const beverage = el.textContent.toLocaleLowerCase()
        if (beverage.indexOf(value) !== -1) {
            el.style.display = 'block'
        } else {
            el.style.display = 'none'
        }
    });
}


search?.addEventListener('keyup', searchEngine)