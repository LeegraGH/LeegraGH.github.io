"use strict";

const btn = document.querySelector('.question-message');
const form = document.querySelector('.link-form');

btn.addEventListener("click", () => {
    form.style=`
    display: inline-block;
    `;
    btn.style=`
    display: none;
    `;
});

const close = document.querySelector('.close-form')

close.addEventListener("click", () => {
    form.style=`
    display: none;
    `;
    btn.style=`
    display: inline-block;
    `;
})