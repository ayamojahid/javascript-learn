// after before append
let after = document.getElementById('after');
let before = document.getElementById('before');
let append = document.getElementById('append');
let content = document.getElementById('content');
let container = document.getElementById('container');

container.style.backgroundColor='#a67b5b';
container.style.height='50px';

after.onclick=function(){
    container.after(content);
}

before.onclick=function(){
    container.before(content);
}

append.onclick=function(){
    container.append(content);
}


//add and remove and toggle class
let hello=document.getElementById('hello');
// hello.onclick=function(){
//     hello.classList.add("name");
// }

// hello.oncontextmenu=function(){
//     hello.classList.remove("name");
// }

hello.onclick=function(){
    hello.classList.toggle("name");
}

