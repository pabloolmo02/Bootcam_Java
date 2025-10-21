// EX03: Operadores aritméticos

const a = 10;
const b = 3;

console.log("=== OPERADORES ARITMÉTICOS ===");
console.log(`a = ${a}, b = ${b}`);
console.log("");

// Operaciones básicas
console.log("Suma (a + b):", a + b);           // 13
console.log("Resta (a - b):", a - b);          // 7
console.log("Multiplicación (a * b):", a * b); // 30
console.log("División (a / b):", a / b);       // 3.333...
console.log("Módulo (a % b):", a % b);         // 1 (resto de la división)
console.log("Exponenciación (a ** b):", a ** b); // 1000

// Incremento y decremento
let contador = 5;
console.log("\n=== INCREMENTO Y DECREMENTO ===");
console.log("contador inicial:", contador);

console.log("contador++:", contador++); // 5 (muestra antes de incrementar)
console.log("contador después de++:", contador); // 6

console.log("++contador:", ++contador); // 7 (incrementa y muestra)

console.log("contador--:", contador--); // 7 (muestra antes de decrementar)
console.log("contador después de--:", contador); // 6

// Operadores de asignación compuesta
let x = 10;
console.log("\n=== ASIGNACIÓN COMPUESTA ===");
console.log("x inicial:", x);

x += 5; // x = x + 5
console.log("x += 5:", x); // 15

x -= 3; // x = x - 3
console.log("x -= 3:", x); // 12

x *= 2; // x = x * 2
console.log("x *= 2:", x); // 24

x /= 4; // x = x / 4
console.log("x /= 4:", x); // 6

x %= 4; // x = x % 4
console.log("x %= 4:", x); // 2
