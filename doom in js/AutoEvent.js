let txt =document.getElementById('txt');
let btn =document.getElementById('btn');

window.onload=function(){
    txt.focus()
}

btn.onclick=function(){
    btn.style.background='#ffa'
}

let txt1 =document.getElementById('txt1');
let btn1 =document.getElementById('btn1');
window.onload=function(){
    txt1.placeholder='tap something';
}