// ==========================
// CLICK (plusieurs actions)
// ==========================

// Quand on clique sur btn1 → change le fond du body
btn1.addEventListener('click', function(){
    document.body.style.background = '#faf0e6';
});

// Quand on clique sur btn1 → change la couleur du bouton
btn1.addEventListener('click', function(){
    btn1.style.background = 'blue';
});

// Quand on clique sur btn1 → change la couleur du texte du bouton
btn1.addEventListener('click', function(){
    btn1.style.color = 'white';
});

// addEventListener permet d'ajouter PLUSIEURS actions
// sur le même événement (click)

// ==========================
// MOUSE EVENTS (souris)
// ==========================

let btn3 = document.getElementById('btn2');

// onmouseup : se déclenche quand on RELÂCHE le clic de la souris
btn3.onmouseup = function(){
    console.log('mouseup → bouton relâché');
};

let btn4 = document.getElementById('btn3');

// onmousedown : se déclenche quand on APPUIE sur le bouton de la souris
btn4.onmousedown = function(){
    console.log('mousedown → bouton appuyé');
};

let btn5 = document.getElementById('btn4');

// onmouseover : quand la souris ENTRE sur l'élément
btn5.onmouseover = function(){
    console.log('mouseover → souris entrée');
};

let btn6 = document.getElementById('btn5');

// onmouseout : quand la souris SORT de l'élément
btn6.onmouseout = function(){
    console.log('mouseout → souris sortie');
};

// onmousemove : se déclenche À CHAQUE mouvement de la souris
let i = 1;
let btn7 = document.getElementById('btn6');
btn7.onmousemove = function(){
    console.log('mousemove → mouvement n° ' + i++);
};

// ⚠️ attention : onmousemove est très fréquent
// (peut ralentir la page si lourd)

// ==========================
// KEYBOARD EVENTS (clavier)
// ==========================

let inp = document.getElementById('inp');

// onkeyup : quand on RELÂCHE une touche du clavier
inp.onkeyup = function(){
    console.log('keyup → touche relâchée');
};

let inp1 = document.getElementById('inp1');

// onkeydown : quand on APPUIE sur une touche
inp1.onkeydown = function(){
    console.log('keydown → touche appuyée');
};

// ==========================
// FOCUS EVENTS (formulaire)
// ==========================

let inp2 = document.getElementById('inp2');

// onfocus : quand l'input reçoit le focus (clic ou tab)
inp2.onfocus = function(){
    inp2.style.border = '4px solid red';
};

let inp3 = document.getElementById('inp3');

// onblur : quand l'input PERD le focus
inp3.onblur = function(){
    inp3.style.border = '4px solid red';
};

// onfocus : quand on revient dans l'input
inp3.onfocus = function(){
    inp3.style.border = 'none';
};

// ==========================
// WINDOW EVENTS
// ==========================

// onresize : se déclenche quand la taille de la fenêtre change
window.onresize = function(){
    console.log('resize → fenêtre redimensionnée');
};
