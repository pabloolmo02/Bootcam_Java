// EX08: Bucle for

console.log("=== BUCLE FOR ===\n");

// For básico
console.log("--- For básico ---");
for (let i = 0; i < 5; i++) {
    console.log(`Iteración ${i}`);
}

// For con decremento
console.log("\n--- Cuenta regresiva ---");
for (let i = 5; i > 0; i--) {
    console.log(i);
}
console.log("¡Despegue! 🚀");

// For con saltos
console.log("\n--- Números pares del 0 al 10 ---");
for (let i = 0; i <= 10; i += 2) {
    console.log(i);
}

// For con arrays
console.log("\n--- Recorrer un array ---");
const frutas = ["🍎 Manzana", "🍌 Plátano", "🍊 Naranja", "🍇 Uvas"];

for (let i = 0; i < frutas.length; i++) {
    console.log(`${i + 1}. ${frutas[i]}`);
}

// For anidado (tablas de multiplicar)
console.log("\n--- For anidado: Tabla del 2 y 3 ---");
for (let tabla = 2; tabla <= 3; tabla++) {
    console.log(`\nTabla del ${tabla}:`);
    for (let i = 1; i <= 5; i++) {
        console.log(`${tabla} x ${i} = ${tabla * i}`);
    }
}

// Break y continue
console.log("\n--- Break: Detener el bucle ---");
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        console.log(`Encontré el 5, detengo el bucle`);
        break; // Sale del bucle completamente
    }
    console.log(i);
}

console.log("\n--- Continue: Saltar iteración ---");
for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        continue; // Salta los números pares
    }
    console.log(`Número impar: ${i}`);
}

// For con strings
console.log("\n--- Recorrer un string ---");
const palabra = "JavaScript";
for (let i = 0; i < palabra.length; i++) {
    console.log(`${i}: ${palabra[i]}`);
}

// Suma de números del 1 al 10
console.log("\n--- Suma del 1 al 10 ---");
let suma = 0;
for (let i = 1; i <= 10; i++) {
    suma += i;
}
console.log(`Suma total: ${suma}`);
