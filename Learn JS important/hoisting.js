/* =====================================================
   HOISTING EN JAVASCRIPT
   -----------------------------------------------------
   Le hoisting est le comportement de JavaScript où :
   - Les déclarations sont "remontées" en haut du scope
   - MAIS pas les assignations
   ===================================================== */


/* =====================================================
   1️⃣ HOISTING AVEC var
   ===================================================== */

// JavaScript comprend ce code comme si c'était écrit ainsi :
/*
var x;           // déclaration hoistée
console.log(x); // x existe mais n'a pas encore de valeur
x = 10;          // assignation après
*/

// Ce que tu écris :
console.log(x); // 👉 undefined (PAS une erreur)
var x = 10;

// Explication :
// - var est hoisté
// - la variable existe avant la ligne var x = 10
// - mais sa valeur est undefined jusqu'à l’assignation

/* =====================================================
   2️⃣ PAS DE HOISTING UTILISABLE AVEC let
   ===================================================== */

// ❌ Ceci provoquerait une erreur :
// console.log(y);
// let y = 10;

// Explication :
// - let est hoisté MAIS placé dans la "Temporal Dead Zone"
// - tu ne peux PAS utiliser la variable avant sa déclaration

// ✅ Bonne façon :
let y = 10;
console.log(y); // 👉 10

/* =====================================================
   3️⃣ HOISTING DES FONCTIONS (Function Declaration)
   ===================================================== */

// Les déclarations de fonctions sont ENTIEREMENT hoistées
// Tu peux appeler la fonction AVANT sa déclaration

hello(); // ✅ fonctionne

function hello() {
  console.log("Hello");
}

// Explication :
// - le nom ET le corps de la fonction sont hoistés
// - JavaScript connaît déjà la fonction

/* =====================================================
   4️⃣ FONCTIONS FLÉCHÉES (Arrow Functions)
   ===================================================== */

// ❌ Ceci provoquerait une erreur si appelé avant :
/*
hi();
const hi = () => {
  console.log("Hi");
};
*/

// Pourquoi ?
// - les fonctions fléchées sont stockées dans des variables
// - const / let ne sont PAS accessibles avant déclaration

// ✅ Bonne façon :
const hi = () => console.log("Hi");
hi(); // 👉 "Hi"

/* =====================================================
   📌 RÉSUMÉ FINAL DU HOISTING
   ===================================================== */

/*
✔ var :
   - déclaration hoistée
   - valeur = undefined

❌ let / const :
   - hoistés mais bloqués (TDZ)
   - erreur si utilisés avant déclaration

✔ function declaration :
   - entièrement hoistée

❌ function expression / arrow function :
   - PAS hoistée
*/
