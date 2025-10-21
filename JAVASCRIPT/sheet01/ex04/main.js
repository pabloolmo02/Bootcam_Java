// EX04: Operadores de comparación

console.log("=== OPERADORES DE COMPARACIÓN ===\n");

const a = 10;
const b = 5;
const c = "10";

// Igualdad (==) - compara valores, convierte tipos
console.log("== (igualdad con conversión de tipo):");
console.log(`${a} == ${b}:`, a == b);     // false
console.log(`${a} == ${c}:`, a == c);     // true (convierte "10" a 10)
console.log(`${a} == "10":`, a == "10");  // true

// Igualdad estricta (===) - compara valores Y tipos
console.log("\n=== (igualdad estricta):");
console.log(`${a} === ${b}:`, a === b);    // false
console.log(`${a} === ${c}:`, a === c);    // false (tipos diferentes: number vs string)
console.log(`${a} === 10:`, a === 10);     // true

// Desigualdad (!=) y desigualdad estricta (!==)
console.log("\n!= y !== (desigualdad):");
console.log(`${a} != ${b}:`, a != b);      // true
console.log(`${a} != ${c}:`, a != c);      // false (convierte tipos)
console.log(`${a} !== ${c}:`, a !== c);    // true (tipos diferentes)

// Mayor y menor
console.log("\n> < >= <= (comparaciones numéricas):");
console.log(`${a} > ${b}:`, a > b);        // true
console.log(`${a} < ${b}:`, a < b);        // false
console.log(`${a} >= 10:`, a >= 10);       // true
console.log(`${b} <= 5:`, b <= 5);         // true

// Comparaciones con strings
console.log("\nComparaciones con strings (orden alfabético):");
console.log("'a' < 'b':", 'a' < 'b');      // true
console.log("'z' > 'a':", 'z' > 'a');      // true
console.log("'10' < '2':", '10' < '2');    // true (compara como strings, no números)

// Mejores prácticas
console.log("\n💡 BUENA PRÁCTICA:");
console.log("Siempre usa === y !== en lugar de == y !=");
console.log("Evita conversiones de tipo implícitas inesperadas");
