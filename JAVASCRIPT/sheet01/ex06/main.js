// EX06: Condicionales if-else

console.log("=== CONDICIONALES IF-ELSE ===\n");

// If simple
const edad = 20;
console.log(`Edad: ${edad}`);

if (edad >= 18) {
    console.log("Eres mayor de edad ✅");
}

// If-else
console.log("\n--- If-else ---");
const temperatura = 15;
console.log(`Temperatura: ${temperatura}°C`);

if (temperatura > 25) {
    console.log("Hace calor 🌞");
} else {
    console.log("Hace frío ❄️");
}

// If-else if-else
console.log("\n--- If-else if-else ---");
const nota = 85;
console.log(`Nota: ${nota}`);

if (nota >= 90) {
    console.log("Calificación: Sobresaliente 🌟");
} else if (nota >= 70) {
    console.log("Calificación: Notable 👍");
} else if (nota >= 50) {
    console.log("Calificación: Aprobado ✓");
} else {
    console.log("Calificación: Suspenso ✗");
}

// Operador ternario (alternativa corta a if-else)
console.log("\n--- Operador ternario ---");
const esMayorDeEdad = edad >= 18 ? "Sí" : "No";
console.log(`¿Es mayor de edad? ${esMayorDeEdad}`);

const mensaje = temperatura > 20 
    ? "Ponte camiseta" 
    : "Ponte abrigo";
console.log(mensaje);

// Condiciones compuestas
console.log("\n--- Condiciones compuestas ---");
const usuario = "admin";
const contrasena = "1234";

if (usuario === "admin" && contrasena === "1234") {
    console.log("Acceso concedido 🔓");
} else {
    console.log("Acceso denegado 🔒");
}

// Anidación de if
console.log("\n--- If anidados ---");
const hora = 14;

if (hora >= 6 && hora < 12) {
    console.log("Buenos días 🌅");
} else {
    if (hora >= 12 && hora < 20) {
        console.log("Buenas tardes 🌤️");
    } else {
        console.log("Buenas noches 🌙");
    }
}
