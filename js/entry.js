"use strict";

document.addEventListener('DOMContentLoaded', ()=>{
    const btn1 = document.querySelector('.perEntry').querySelector('.btn-form').querySelectorAll('button');
    const btn2 = document.querySelector('.register-form').querySelector('.btn-form').querySelectorAll('button');
    const info1 = document.querySelector('.perEntry');
    const info2 = document.querySelector('.register-form');
    const info3 = document.querySelector('.personalData');
    const info4 = document.querySelector('.card-block').querySelector('h4');
    const info5 = document.querySelector('.card-block').querySelector('p');


    btn1[2].addEventListener('click',()=>{
        info1.style=`
        display: none;
        `;
    
        info2.style=`
        display: initial;
        `;
    });

    btn1[0].addEventListener('click',()=>{
        info1.style=`
        display: none;
        `;
    
        info3.style=`
        display: initial;
        `;

        info4.textContent="Спасибо, что Вы с нами и пользуетесь личным кабинетом!";
        info5.textContent="Взгляните на преимущества, которые у Вас есть :)";

    });

    btn2[0].addEventListener('click', () =>{ 
        info2.style=`
        display: none;
        `;
    
        info3.style=`
        display: initial;
        `;

        info4.textContent="Спасибо, что Вы с нами и пользуетесь личным кабинетом!";
        info5.textContent="Взгляните на преимущества, которые у Вас есть :)";
    });
    
    btn2[1].addEventListener('click', () =>{ 
        info2.style=`
        display: none;
        `;
    
        info1.style=`
        display: initial;
        `;
    });

    // btn3.addEventListener('click', () =>{ 
    //     info2.style=`
    //     display: none;
    //     `;
    
    //     info1.style=`
    //     display: initial;
    //     `;
    // });
});