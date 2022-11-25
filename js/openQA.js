"use strict";

const btns = document.querySelectorAll('.quastion');

for(let k=0;k<btns.length;k++){

    let i = btns[k].querySelector('.fa-solid');
    let j = btns[k].querySelector('.answer-down');

    btns[k].addEventListener("click", () => {
        if (i.classList.contains('fa-up-right-and-down-left-from-center')) {
            i.classList.remove('fa-up-right-and-down-left-from-center');
            i.classList.add('fa-down-left-and-up-right-to-center');
            j.classList.add('active');
            btns[k].classList.add('active');
        } else {
            i.classList.remove('fa-down-left-and-up-right-to-center');
            i.classList.add('fa-up-right-and-down-left-from-center');
            j.classList.remove('active');
            btns[k].classList.remove('active');
        }
    });
}