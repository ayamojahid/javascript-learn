window.localStorage.setItem('name' , 'aya');
localStorage.prenom='salma';

//lire
console.log(localStorage.getItem('name'));
console.log(localStorage.name);

localStorage.setItem('age',25)

localStorage.setItem('skills',JSON.stringify([1,2,3,4,5]));
localStorage.user=JSON.stringify({
    name:  'aya',
    age: '23',
})


console.log(JSON.parse(localStorage.getItem('skills')));
//clear
localStorage.removeItem('user');

//meme chose avec sessionStorage la diff est il save data juste dans le navigateur quand je sort il gone data



let txt=document.getElementById('txt');
if(localStorage.length > 0) {
    txt.value = localStorage.getItem('txt')
}
txt.onkeyup=function(){
    localStorage.setItem('txt' , txt.value)
}


let txtsession=document.getElementById('txtsession');
if(sessionStorage.length > 0) {
    txtsession.value = sessionStorage.getItem('txtsession')
}
txtsession.onkeyup=function(){
    sessionStorage.setItem('txtsession' , txtsession.value)
}


//
if(localStorage.length > 0) {
    document.body.style.background=localStorage.color;
}
function setColor(color){
    localStorage.setItem('color' , color);
    document.body.style.background=color;
}