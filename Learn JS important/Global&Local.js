/* =====================================================
   VARIABLE GLOBALE
   ===================================================== */

// 👉 Variable déclarée en dehors de toute fonction
// 👉 Accessible PARTOUT dans le fichier
let globalVar = "Je suis globale";

function showGlobal() {
  console.log(globalVar); // ✅ accessible ici
}

showGlobal();
console.log(globalVar); // ✅ accessible ici aussi


/* =====================================================
   VARIABLE LOCALE (SCOPE DE FONCTION)
   ===================================================== */

function showLocal() {
  // 👉 Variable déclarée DANS la fonction
  // 👉 Accessible UNIQUEMENT ici
  let localVar = "Je suis locale";
  console.log(localVar); // ✅ OK
}

showLocal();

// console.log(localVar); 
// ❌ Erreur : localVar is not defined


/* =====================================================
   VARIABLE LOCALE (SCOPE DE BLOC)
   ===================================================== */

if (true) {
  let blockVar = "Je suis locale au bloc";
  console.log(blockVar); // ✅ OK
}

// console.log(blockVar);
// ❌ Erreur : blockVar is not defined


/* =====================================================
   var vs let (IMPORTANT)
   ===================================================== */

if (true) {
  var testVar = "var sort du bloc";
}

console.log(testVar); // ✅ fonctionne (dangereux)


/* =====================================================
   MAUVAISE PRATIQUE ❌
   ===================================================== */

// ❌ Variable globale créée par erreur
function badExample() {
  x = 10; // PAS de let / const / var
}

badExample();
console.log(x); // ❌ x devient globale (à éviter)


/* =====================================================
   BONNES PRATIQUES ✅
   ===================================================== */

// ✔ Toujours déclarer les variables
// ✔ Utiliser let / const
// ✔ Éviter les variables globales inutiles




//fonction appel lui meme
(   function(){
   console.log("test");
})  ();



//hoisting des fonctions 
console.log ( x0())
function x0(){
   function y(){
       return 0; }
   return y();
   function y(){
       return 1; }
   function y(){
       return 2; }
}

