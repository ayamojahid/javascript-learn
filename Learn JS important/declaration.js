/* =====================================================
   DÉCLARATION vs ASSIGNATION
   ===================================================== */

/* =====================================================
   1️⃣ DÉCLARATION SEULE (SANS VALEUR)
   ===================================================== */

// 👉 Déclaration : on crée la variable
// 👉 Aucune valeur n'est donnée
let a;

console.log(a); 
// Résultat : undefined
// Pourquoi ?
// - la variable existe
// - mais aucune valeur n’a été assignée


/* =====================================================
   2️⃣ ASSIGNATION (DONNER UNE VALEUR)
   ===================================================== */

// 👉 Assignation : on donne une valeur à la variable
a = 10;

console.log(a); 
// Résultat : 10


/* =====================================================
   3️⃣ DÉCLARATION + ASSIGNATION EN MÊME TEMPS
   ===================================================== */

// 👉 Ici, on déclare ET on assigne directement
let b = 20;

console.log(b); 
// Résultat : 20


/* =====================================================
   4️⃣ MODIFICATION DE VALEUR
   ===================================================== */

// 👉 On peut changer la valeur d’une variable déclarée avec let
b = 50;

console.log(b); 
// Résultat : 50


/* =====================================================
   5️⃣ var : DÉCLARATION SANS VALEUR
   ===================================================== */

// 👉 var permet la déclaration seule
var x;

console.log(x); 
// Résultat : undefined


/* =====================================================
   6️⃣ var ET HOISTING (IMPORTANT)
   ===================================================== */

// JavaScript comprend le code comme ceci :
/*
var y;           // déclaration hoistée
console.log(y); // undefined
y = 30;          // assignation
*/

console.log(y); // undefined
var y = 30;


/* =====================================================
   7️⃣ let / const AVANT ASSIGNATION ❌
   ===================================================== */

// ❌ Ceci provoque une erreur (Temporal Dead Zone)
/*
console.log(z);
let z = 40;
*/


/* =====================================================
   8️⃣ const : OBLIGATOIREMENT AVEC VALEUR
   ===================================================== */

// ❌ Erreur : const doit avoir une valeur
/*
const c;
*/

// ✅ Correct :
const c = 100;
console.log(c);


/* =====================================================
   9️⃣ ASSIGNATION MULTIPLE
   ===================================================== */

// 👉 Déclaration de plusieurs variables
let m, n, p;

// 👉 Assignation plus tard
m = 1;
n = 2;
p = 3;

console.log(m, n, p);


/* =====================================================
   🔟 EXEMPLE RÉEL
   ===================================================== */

// 👉 Déclaration
let total;

// 👉 Calcul
total = 5 + 10;

// 👉 Utilisation
console.log(total); // 15


/* =====================================================
   📌 RÉSUMÉ FINAL
   ===================================================== */

/*
DÉCLARATION :
- Crée la variable
- Exemple : let a;

ASSIGNATION :
- Donne une valeur
- Exemple : a = 10;

DÉCLARATION + ASSIGNATION :
- let a = 10;

undefined :
- variable déclarée mais sans valeur

const :
- DOIT avoir une valeur dès la déclaration
*/
