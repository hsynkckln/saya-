
let heading=document.querySelector('.heading');
let counter=document.querySelector('.counter');
let incr=document.querySelector('.incr');
let decr=document.querySelector('.decr');

let index=0;

updateDisplay();
function updateDisplay(){
    counter.innerHTML=index;
}

incr.addEventListener('click',(e)=>{
    index++;
    updateDisplay(e);
})

decr.addEventListener('click',(e)=>{
    index--;
    updateDisplay(e);
})
