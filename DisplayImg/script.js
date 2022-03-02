"use strict";
const img = document.querySelector('.item1');
const arrowBtn = document.querySelector('.arrow');
const arrowIcon = document.querySelector('.fas');
const addClassNameHide = () => {
    img?.classList.toggle('hide');
    if (img?.classList.contains('hide')) {
        arrowIcon.style.transform = 'rotate(540deg)';
    }
    else {
        arrowIcon.style.transform = 'rotate(0)';
    }
};
arrowBtn?.addEventListener('click', addClassNameHide);
