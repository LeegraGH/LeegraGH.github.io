"use strict";

const btn1 = document.querySelector('.changePer');
const btn2 = document.querySelector('.reset-btn');
const btn3 = document.querySelector('.get-data-btn');
const info1 = document.querySelector('.personalData');
const info2 = document.querySelector('.changePersonalAccount');
const info3 = document.querySelector('.perEntry');

btn1.addEventListener('click', () =>{ 
    info1.style=`
    display: none;
    `;

    info2.style=`
    display: initial;
    `;
});

btn2.addEventListener('click', () =>{ 
    info2.style=`
    display: none;
    `;

    info1.style=`
    display: initial;
    `;
});

btn3.addEventListener('click', () =>{ 
    info2.style=`
    display: none;
    `;

    info1.style=`
    display: initial;
    `;
});