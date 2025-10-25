// EX10: Bucle do-while

console.log("=== BUCLE DO-WHILE ===\n");

// Do-while básico
console.log("--- Do-while básico ---");
let contador = 0;

do {
    console.log(`Contador: ${contador}`);
    contador++;
} while (contador < 5);

// Diferencia entre while y do-while
console.log("\n--- Diferencia: while vs do-while ---");

console.log("While (condición falsa desde el inicio):");
let x = 10;
while (x < 5) {
    console.log("Esto NO se ejecuta");
}
console.log("No imprimió nada");

console.log("\nDo-while (condición falsa desde el inicio):");
let y = 10;
do {
    console.log("Esto SÍ se ejecuta al menos una vez");
} while (y < 5);

// Menú de opciones (caso de uso típico)
console.log("\n--- Menú de opciones ---");
let opcion = 0;
let intentos = 0;

do {
    intentos++;
    console.log(`\nIntento ${intentos}:`);
    console.log("1. Ver perfil");
    console.log("2. Configuración");
    console.log("3. Salir");
    
    // Simulamos que el usuario elige diferentes opciones
    if (intentos === 1) opcion = 1;
    else if (intentos === 2) opcion = 2;
    else opcion = 3;
    
    console.log(`Opción elegida: ${opcion}`);
    
    switch(opcion) {
        case 1:
            console.log("→ Mostrando perfil...");
            break;
        case 2:
            console.log("→ Abriendo configuración...");
            break;
        case 3:
            console.log("→ Saliendo...");
            break;
        default:
            console.log("→ Opción no válida");
    }
} while (opcion !== 3);

console.log("¡Adiós! 👋");

// Validación de entrada
console.log("\n--- Validación de número ---");
let numero;
let contador2 = 0;

do {
    contador2++;
    // Simulamos números hasta encontrar uno válido
    numero = contador2 === 3 ? 7 : -1;
    
    console.log(`Intento ${contador2}: número = ${numero}`);
    
    if (numero <= 0) {
        console.log("❌ El número debe ser positivo");
    }
} while (numero <= 0);

console.log(`✅ Número válido: ${numero}`);

// Do-while con break
console.log("\n--- Do-while con break ---");
let i = 0;

do {
    console.log(i);
    i++;
    
    if (i === 5) {
        console.log("Llegué a 5, salgo");
        break;
    }
} while (i < 10);

// Suma acumulativa
console.log("\n--- Suma hasta pasar de 30 ---");
let suma = 0;
let n = 1;

do {
    suma += n;
    console.log(`${n}: Suma = ${suma}`);
    n++;
} while (suma < 30);

console.log(`Suma final: ${suma}`);

// 💡 Cuándo usar do-while
console.log("\n CUÁNDO USAR DO-WHILE:");
console.log("- Cuando necesitas ejecutar el código al menos una vez");
console.log("- Menús interactivos");
console.log("- Validación de entrada del usuario");
console.log("- Juegos (al menos una ronda)");
