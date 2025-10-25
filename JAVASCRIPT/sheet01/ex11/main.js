// EX11: Funciones - Declaración y expresión

console.log("=== FUNCIONES ===\n");

// 1. Función declarativa (Function Declaration)
console.log("--- Función declarativa ---");

function saludar(nombre) {
    return `¡Hola, ${nombre}!`;
}

console.log(saludar("Ana"));
console.log(saludar("Carlos"));

// 2. Función expresión (Function Expression)
console.log("\n--- Función expresión ---");

const despedir = function(nombre) {
    return `¡Adiós, ${nombre}!`;
};

console.log(despedir("Ana"));
console.log(despedir("Carlos"));

// 3. Función sin parámetros
console.log("\n--- Sin parámetros ---");

function obtenerFechaActual() {
    const fecha = new Date();
    return fecha.toLocaleDateString();
}

console.log("Fecha actual:", obtenerFechaActual());

// 4. Función con múltiples parámetros
console.log("\n--- Múltiples parámetros ---");

function sumar(a, b) {
    return a + b;
}

function calcularArea(base, altura) {
    return base * altura;
}

console.log("5 + 3 =", sumar(5, 3));
console.log("Área (base: 10, altura: 5) =", calcularArea(10, 5));

// 5. Función con parámetros por defecto
console.log("\n--- Parámetros por defecto ---");

function saludarConTitulo(nombre, titulo = "Sr./Sra.") {
    return `¡Hola, ${titulo} ${nombre}!`;
}

console.log(saludarConTitulo("García"));
console.log(saludarConTitulo("López", "Dr."));

// 6. Función sin return (return undefined)
console.log("\n--- Sin return ---");

function mostrarMensaje(mensaje) {
    console.log(`📢 ${mensaje}`);
    // No hay return, devuelve undefined
}

const resultado = mostrarMensaje("Hola Mundo");
console.log("Valor retornado:", resultado); // undefined

// 7. Return anticipado
console.log("\n--- Return anticipado ---");

function esMayorDeEdad(edad) {
    if (edad >= 18) {
        return true;
    }
    return false;
}

// Versión más corta
function esMayorDeEdadCorta(edad) {
    return edad >= 18;
}

console.log("¿18 años es mayor de edad?", esMayorDeEdad(18));
console.log("¿15 años es mayor de edad?", esMayorDeEdadCorta(15));

// 8. Funciones que llaman a otras funciones
console.log("\n--- Funciones anidadas ---");

function calcularIVA(precio) {
    return precio * 0.21;
}

function calcularPrecioFinal(precio) {
    const iva = calcularIVA(precio);
    return precio + iva;
}

console.log("Precio: 100€");
console.log("IVA:", calcularIVA(100), "€");
console.log("Precio final:", calcularPrecioFinal(100), "€");

// 9. Scope (ámbito) de variables
console.log("\n--- Scope ---");

let global = "Variable global";

function ejemploScope() {
    let local = "Variable local";
    console.log("Dentro de la función:");
    console.log("  - Accedo a global:", global);
    console.log("  - Accedo a local:", local);
}

ejemploScope();
console.log("Fuera de la función:");
console.log("  - Accedo a global:", global);
// console.log("  - Accedo a local:", local); // ❌ Error: local no está definida

// 💡 Diferencia: Declarativa vs Expresión
console.log("\n💡 HOISTING:");
console.log("Las funciones declarativas se pueden usar antes de definirlas");

// ✅ Esto funciona (hoisting)
console.log(funcionDeclarativa());

function funcionDeclarativa() {
    return "Soy una función declarativa";
}

// ❌ Esto NO funciona
// console.log(funcionExpresion()); // Error!

const funcionExpresion = function() {
    return "Soy una función expresión";
};

console.log(funcionExpresion()); // ✅ Ahora sí funciona
