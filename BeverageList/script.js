"use strict";
const search = document.querySelector('.search');
const li = document.querySelectorAll('li');
const searchEngine = () => {
    const value = search?.value.toLocaleLowerCase();
    li?.forEach((el) => {
        const beverage = el.textContent.toLocaleLowerCase();
        if (beverage.indexOf(value) !== -1) {
            el.style.display = 'block';
        }
        else {
            el.style.display = 'none';
        }
    });
};
search?.addEventListener('keyup', searchEngine);
