// EX09: Bucle while

console.log("=== BUCLE WHILE ===\n");

// While básico
console.log("--- While básico ---");
let contador = 0;

while (contador < 5) {
    console.log(`Contador: ${contador}`);
    contador++;
}

// Cuenta regresiva
console.log("\n--- Cuenta regresiva ---");
let tiempo = 5;

while (tiempo > 0) {
    console.log(tiempo);
    tiempo--;
}
console.log("¡Tiempo agotado! ⏰");

// While con condición compleja
console.log("\n--- Adivinar número ---");
let numeroSecreto = 7;
let intento = 1;

while (intento !== numeroSecreto) {
    console.log(`Intento ${intento}: No es el número correcto`);
    intento++;
}
console.log(`¡Correcto! El número era ${numeroSecreto}`);

// While con break
console.log("\n--- While con break ---");
let numero = 0;

while (true) { // Bucle infinito controlado con break
    console.log(numero);
    numero++;
    
    if (numero === 5) {
        console.log("Llegué a 5, salgo del bucle");
        break;
    }
}

// While con continue
console.log("\n--- While con continue ---");
let n = 0;

while (n < 10) {
    n++;
    
    if (n % 2 === 0) {
        continue; // Salta los números pares
    }
    
    console.log(`Número impar: ${n}`);
}

// Suma acumulativa
console.log("\n--- Suma hasta llegar a 50 ---");
let suma = 0;
let i = 1;

while (suma < 50) {
    suma += i;
    console.log(`${i}: Suma actual = ${suma}`);
    i++;
}

// Recorrer array con while
console.log("\n--- Recorrer array ---");
const colores = ["🔴 Rojo", "🟢 Verde", "🔵 Azul"];
let index = 0;

while (index < colores.length) {
    console.log(`${index}: ${colores[index]}`);
    index++;
}

// ⚠️ Cuidado con bucles infinitos
console.log("\n⚠️ CUIDADO: Asegúrate de que la condición se vuelva false");
console.log("O usa break para salir del bucle");
console.log("Ejemplo de bucle infinito (comentado):");
console.log("// let x = 0;");
console.log("// while (x < 5) {");
console.log("//     console.log(x);");
console.log("//     // ❌ Falta x++ - bucle infinito!");
console.log("// }");
