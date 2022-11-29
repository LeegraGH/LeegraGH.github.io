"use strict";

document.addEventListener('DOMContentLoaded', ()=>{
    
    const btn1=document.querySelector(".clear-btn");
    const empty=document.querySelector(".empty-basket");
    const basket=document.querySelector(".basket");
    const buyItems=document.querySelector(".buy-items");
    const buyItem=buyItems.querySelectorAll(".buy-item");
    const money=document.querySelector(".allSum");
    const fon=document.querySelector('.popular-item-slider');

    btn1.addEventListener('click',()=>{
        buyItem.forEach(item => {item.remove();});
        basket.style=`
        display: none;
        `;
    
        empty.style=`
        display: initial;
        `;

        fon.style=`
        background: none;
        `;
    });

    let k=buyItem.length;
    
    for(let i=0;i<buyItem.length;i++){
        let btnDel=buyItem[i].querySelector(".fa-xmark");
        let clearSum=buyItem[i].querySelector(".item-sum");
        btnDel.addEventListener('click', ()=>{
            let cnt = buyItem[i].querySelector('.cnt-item').querySelector('p');
            money.textContent=+money.textContent-(+clearSum.textContent)*(+cnt.textContent);
            buyItem[i].remove();
            k--;
            if (k==0){
                basket.style=`
                display: none;
                `;
            
                empty.style=`
                display: initial;
                `;
                
                fon.style=`
                background: none;
                `;
            }
        });
    }

    buyItem.forEach(item => {
        let sumItem=item.querySelector('.item-sum');
        money.textContent=+money.textContent+(+sumItem.textContent);
    });

    for(let i=0;i<buyItem.length;i++){
        let plus = buyItem[i].querySelector('.fa-plus');
        let minus = buyItem[i].querySelector('.fa-minus');
        let cnt = buyItem[i].querySelector('.cnt-item').querySelector('p');

        plus.addEventListener('click',()=>{
            cnt.textContent=+cnt.textContent+1;
            let sumItem=buyItem[i].querySelector('.item-sum');
            money.textContent=+money.textContent+(+sumItem.textContent);
        });

        minus.addEventListener('click',()=>{
            if (cnt.textContent>1){
                cnt.textContent=+cnt.textContent-1;
                let cntSumItem=buyItem[i].querySelector('.cnt-item').querySelector('p');
                let sumItem=buyItem[i].querySelector('.item-sum');
                money.textContent=+money.textContent-(+sumItem.textContent);
            }
        });
    }
});