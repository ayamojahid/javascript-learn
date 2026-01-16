   // 1️⃣ getElementById
        // Sélectionne UN SEUL élément par son ID
        let head = document.getElementById('head');
        head.style.color = 'red';

        // 2️⃣ getElementsByClassName
        // Sélectionne PLUSIEURS éléments par leur classe
        let texts = document.getElementsByClassName('text');
        texts[0].style.color = 'blue'; // premier élément
        texts[1].style.color = 'green'; // deuxième élément

        // 3️⃣ getElementsByTagName
        // Sélectionne tous les éléments avec la même balise
        let divs = document.getElementsByTagName('div');
        divs[0].style.backgroundColor = 'yellow';
        divs[1].style.backgroundColor = 'orange';

        // 4️⃣ querySelector
        // Sélectionne LE PREMIER élément correspondant au sélecteur CSS
        let firstP = document.querySelector('.text');
        firstP.style.fontWeight = 'bold';

        // 5️⃣ querySelectorAll
        // Sélectionne TOUS les éléments correspondant au sélecteur CSS
        let allP = document.querySelectorAll('.text');
        allP.forEach(p => {
            p.style.fontSize = '20px';
        });


//pour go to the body all body
let body=document.body;
body.style.background='#4444444b';


//go to the title
document.title='aya website';

//go to all images
let images=document.images;

//go to one image
let image=document.images[1];

//for go to all links 
let links=document.links;

//go to all forms
let forms=document.forms;

//attribute
let img=document.getElementById('img');
console.log(img);
console.log(img.src);
//pour modifier something
img.src='/img/imag1';
img.title='test1';
//to see if has attribute or not we use 
console.log(img.hasAttributes());
console.log(img.hasAttribute('src'));
console.log(img.attributes);
//or par index
console.log(img.attributes);
//modifier une attribut
img.setAttribute('alt' , 'aya')
console.log(img.alt);
//supprimer une attribut
img.removeAttribute('class');
console.log(img);

// ===============================
// INNER & OUTER (EXPLICATION)
// ===============================

// innerHTML :
// → permet de LIRE ou MODIFIER le contenu HTML À L’INTÉRIEUR d’un élément
// → inclut les balises HTML internes
// → DANGER : peut exécuter du HTML (attention si données utilisateur)

// innerText :
// → retourne ou modifie seulement le TEXTE visible
// → ignore les balises HTML
// → plus sécurisé que innerHTML

// textContent :
// → similaire à innerText
// → inclut même le texte caché (display:none)
// → plus rapide, recommandé en JS pur

// ===============================
// OUTER
// ===============================

// outerHTML :
// → retourne ou REMPLACE l’élément LUI-MÊME + son contenu
// → l’élément original est supprimé du DOM


let container=document.getElementById('container');
console.log(container.outerHTML);
console.log(container.innerHTML);

//update h3  par paragraphe
container.outerHTML='<p>hello</p>';
//changer container
container.innerHTML='<p>hello</p>';
//text
container.innerText='<p>hello</p>';

//sibling and parent

// parentElement :
// → retourne l’élément PARENT direct d’un élément
// → si pas de parent, retourne null

// parentElement            → parent HTML direct
// parentNode               → parent (node)
// children                 → tous les enfants éléments
// firstElementChild        → 1er enfant
// lastElementChild         → dernier enfant
// previousElementSibling   → frère précédent
// nextElementSibling       → frère suivant
// previousSibling          → frère (node, peut être texte)
// nextSibling              → frère (node, peut être texte)

let element1=document.getElementById('second');
console.log(element1.previousElementSibling);
console.log(element1.nextElementSibling);
console.log(element1.previousSibling);
console.log(element1.parentElement);

//dom css style
let el=document.getElementById('box');

el.style.color = "red";                 // couleur du texte
el.style.backgroundColor = "yellow";    // couleur de fond
el.style.fontSize = "20px";             // taille du texte
el.style.border = "2px solid black";    // bordure
el.style.display = "none";              // cacher élément
el.style.display = "block";             // afficher élément

el.innerText += 'Heloo another texte';


let el1=document.getElementById('box1');
//autre methose decrire css like its real
el1.innerText ='heloo 2 broo avec css like reel';
el1.style.cssText = `
  background: green;
  color : white;
`;
el1.style.removeProperty('color');
//add color
el1.style.setProperty('color' , 'yellow');














