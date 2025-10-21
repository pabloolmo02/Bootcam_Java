// EX05: Operadores lógicos

console.log("=== OPERADORES LÓGICOS ===\n");

const llueve = true;
const tengosParaguas = false;
const esDeDia = true;
const haceCalor = true;

// AND (&&) - Verdadero solo si AMBOS son verdaderos
console.log("&& (AND - Y lógico):");
console.log(`llueve && tengosParaguas: ${llueve && tengosParaguas}`); // false
console.log(`esDeDia && haceCalor: ${esDeDia && haceCalor}`);          // true
console.log("true && true:", true && true);                             // true
console.log("true && false:", true && false);                           // false

// OR (||) - Verdadero si AL MENOS UNO es verdadero
console.log("\n|| (OR - O lógico):");
console.log(`llueve || tengosParaguas: ${llueve || tengosParaguas}`); // true
console.log(`!esDeDia || haceCalor: ${!esDeDia || haceCalor}`);       // true
console.log("false || false:", false || false);                        // false
console.log("false || true:", false || true);                          // true

// NOT (!) - Invierte el valor booleano
console.log("\n! (NOT - Negación):");
console.log(`!llueve: ${!llueve}`);                   // false
console.log(`!tengosParaguas: ${!tengosParaguas}`);   // true
console.log("!true:", !true);                          // false
console.log("!false:", !false);                        // true

// Combinaciones
console.log("\nCombinaciones:");
const salgoSinParaguas = !llueve || tengosParaguas;
console.log(`Salgo sin paraguas (!llueve || tengosParaguas): ${salgoSinParaguas}`); // false

const meQuedoEnCasa = llueve && !tengosParaguas;
console.log(`Me quedo en casa (llueve && !tengosParaguas): ${meQuedoEnCasa}`); // true

// Cortocircuito (Short-circuit)
console.log("\n=== CORTOCIRCUITO (Short-circuit) ===");
console.log("false && console.log('No se ejecuta'):"); 
false && console.log("No se ejecuta"); // No imprime nada

console.log("true || console.log('No se ejecuta'):");
true || console.log("No se ejecuta"); // No imprime nada

console.log("false || console.log('Sí se ejecuta'):");
false || console.log("Sí se ejecuta"); // Imprime "Sí se ejecuta"

// Valores truthy y falsy
console.log("\n=== VALORES TRUTHY Y FALSY ===");
console.log("Falsy values: false, 0, '', null, undefined, NaN");
console.log("Todo lo demás es truthy");

console.log("\n!0:", !0);           // true (0 es falsy)
console.log("!'':", !'');           // true (string vacío es falsy)
console.log("!'Hola':", !'Hola');   // false (string con contenido es truthy)
console.log("![]:", ![]);           // false (array vacío es truthy)
console.log("!{}:", !{});           // false (objeto vacío es truthy)
