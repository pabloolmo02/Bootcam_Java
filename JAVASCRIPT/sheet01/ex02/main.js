// EX02: Tipos de datos primitivos

// Tipos de datos
const numero = 42;               // Number
const decimal = 3.14;            // Number (float)
const texto = "Hola Mundo";      // String
const booleano = true;           // Boolean
const indefinido = undefined;    // Undefined
const nulo = null;               // Null
const simbolo = Symbol("id");    // Symbol

// Mostrar tipo de cada variable
console.log("=== TIPOS DE DATOS ===");
console.log("numero:", numero, "-> typeof:", typeof numero);
console.log("decimal:", decimal, "-> typeof:", typeof decimal);
console.log("texto:", texto, "-> typeof:", typeof texto);
console.log("booleano:", booleano, "-> typeof:", typeof booleano);
console.log("indefinido:", indefinido, "-> typeof:", typeof indefinido);
console.log("nulo:", nulo, "-> typeof:", typeof nulo); //  typeof null = "object" (bug histórico de JS)
console.log("simbolo:", simbolo, "-> typeof:", typeof simbolo);

// Conversión de tipos
console.log("\n=== CONVERSIÓN DE TIPOS ===");
const numeroString = "100";
const numeroConvertido = Number(numeroString);
console.log("String '100' convertido a número:", numeroConvertido, "->", typeof numeroConvertido);

const numeroAString = String(42);
console.log("Número 42 convertido a string:", numeroAString, "->", typeof numeroAString);
