
// // 1. créer les éléments
// let container = document.createElement('div');
// let head = document.createElement('h2');
// let img = document.createElement('img');

// // 2. ajouter le contenu
// let content = document.createTextNode('hello world');
// head.appendChild(content);

// // 3. ajouter au DOM
// container.appendChild(head);
// container.appendChild(img);
// document.body.appendChild(container);
// container.style.background='#666';

//cards create cards by only js


let names=['ahmed', 'ali' , 'mahmoud' ,'aya','salma' ,'simo','khalid' , 'hamid' , 'moha','aziz'];
let ages=['18 years old','48 years old','38 years old','28 years old','20 years old','23 years old' ,'19 years old','40 years old','21 years old' , '10 years old'];


let container1 = document.createElement('div');
document.body.appendChild(container1);
container1.style.textAlign='center';

function element(name,age){
     //elements
     let card = document.createElement('div');
     let title = document.createElement('h2');
     let ageel = document.createElement('p');
     let img = document.createElement('img');
     //create content
    let head=document.createTextNode(name);
    let ageContent= document.createTextNode(age);
    img.src='img/pic1.jpg';
    img.style.width='150px'
   //style
      card.style.width ='200px';
      card.style.background='#ffebcd';
      card.style.color='#060606ff';
      card.style.padding='10px';
      card.style.margin='2px';
      card.style.display='inline-block';
   
   img.style.width='100%';


    title.appendChild(head);
    ageel.appendChild(ageContent);
    card.appendChild(title);
    card.appendChild(ageel);
    card.appendChild(img);
    
    container1.appendChild(card);
}
for(let i=0 ; i<10 ; i++) {
    element(names[i],ages[i]);
}
