// ex01/main.js

// Declaraciones
var numero = 42;       // var: ámbito global o de función
let texto = "Hola JS"; // let: ámbito de bloque
const esVerdadero = true; // const: no se puede reasignar

// Mostrar valores
console.log("var numero:", numero);
console.log("let texto:", texto);
console.log("const esVerdadero:", esVerdadero);

// Reasignaciones
numero = 100;       // ✅ permitido
texto = "Adiós JS"; // ✅ permitido
// esVerdadero = false; // ❌ error: no se puede reasignar

// Comentario:
// var y let permiten reasignar, const no.
// let y const tienen un ámbito más seguro que var.
  