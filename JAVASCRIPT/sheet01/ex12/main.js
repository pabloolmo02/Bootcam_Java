// EX12: Arrow Functions (Funciones flecha)

console.log("=== ARROW FUNCTIONS ===\n");

// 1. Sintaxis tradicional vs Arrow Function
console.log("--- Comparación sintaxis ---");

// Función tradicional
function sumarTradicional(a, b) {
    return a + b;
}

// Arrow function
const sumarFlecha = (a, b) => {
    return a + b;
};

// Arrow function corta (return implícito)
const sumarCorta = (a, b) => a + b;

console.log("Tradicional:", sumarTradicional(5, 3));
console.log("Arrow:", sumarFlecha(5, 3));
console.log("Arrow corta:", sumarCorta(5, 3));

// 2. Arrow function con un solo parámetro
console.log("\n--- Un solo parámetro ---");

// Los paréntesis son opcionales con 1 parámetro
const doble = num => num * 2;
const cuadrado = (num) => num * num;

console.log("Doble de 5:", doble(5));
console.log("Cuadrado de 5:", cuadrado(5));

// 3. Arrow function sin parámetros
console.log("\n--- Sin parámetros ---");

const saludar = () => "¡Hola Mundo!";
const obtenerNumeroAleatorio = () => Math.floor(Math.random() * 100);

console.log(saludar());
console.log("Número aleatorio:", obtenerNumeroAleatorio());

// 4. Arrow function con cuerpo de varias líneas
console.log("\n--- Varias líneas ---");

const calcularPrecioFinal = (precio, descuento) => {
    const precioConDescuento = precio - (precio * descuento / 100);
    const iva = precioConDescuento * 0.21;
    return precioConDescuento + iva;
};

console.log("Precio final (100€, 10% dto):", calcularPrecioFinal(100, 10), "€");

// 5. Retornar objetos (necesita paréntesis)
console.log("\n--- Retornar objetos ---");

// ❌ Esto NO funciona (interpreta {} como bloque de código)
// const crearPersona = (nombre, edad) => { nombre: nombre, edad: edad };

// ✅ Necesita paréntesis
const crearPersona = (nombre, edad) => ({ nombre: nombre, edad: edad });

// Versión con shorthand property names
const crearPersonaCorta = (nombre, edad) => ({ nombre, edad });

console.log(crearPersona("Ana", 25));
console.log(crearPersonaCorta("Carlos", 30));

// 6. Arrow functions en métodos de array
console.log("\n--- Con métodos de array ---");

const numeros = [1, 2, 3, 4, 5];

// map
const dobles = numeros.map(num => num * 2);
console.log("Dobles:", dobles);

// filter
const pares = numeros.filter(num => num % 2 === 0);
console.log("Pares:", pares);

// reduce
const suma = numeros.reduce((acum, num) => acum + num, 0);
console.log("Suma:", suma);

// 7. Múltiples parámetros
console.log("\n--- Múltiples parámetros ---");

const calcularArea = (base, altura) => base * altura;
const saludarCompleto = (nombre, apellido, edad) => 
    `Hola, soy ${nombre} ${apellido} y tengo ${edad} años`;

console.log("Área (10x5):", calcularArea(10, 5));
console.log(saludarCompleto("Ana", "García", 28));

// 8. Comparación con función tradicional
console.log("\n--- Cuándo usar cada una ---");

const personas = [
    { nombre: "Ana", edad: 25 },
    { nombre: "Carlos", edad: 30 },
    { nombre: "Beatriz", edad: 22 }
];

// Arrow function (más corta)
const nombres = personas.map(p => p.nombre);
console.log("Nombres:", nombres);

// Función tradicional (más legible para lógica compleja)
const mayoresDeEdad = personas.filter(function(persona) {
    const esMayor = persona.edad >= 18;
    return esMayor;
});
console.log("Mayores de edad:", mayoresDeEdad);

// 9. this en arrow functions (diferencia importante)
console.log("\n--- Diferencia con 'this' ---");

const objeto = {
    nombre: "Mi Objeto",
    
    // Función tradicional: 'this' apunta al objeto
    metodoTradicional: function() {
        console.log("Tradicional - this.nombre:", this.nombre);
    },
    
    // Arrow function: 'this' apunta al contexto externo
    metodoFlecha: () => {
        console.log("Arrow - this.nombre:", this.nombre); // undefined
    }
};

objeto.metodoTradicional();
objeto.metodoFlecha();

// 💡 Buenas prácticas
console.log("\n💡 CUÁNDO USAR ARROW FUNCTIONS:");
console.log("✅ Callbacks y funciones cortas");
console.log("✅ map, filter, reduce");
console.log("✅ Funciones puras sin 'this'");
console.log("❌ Métodos de objetos que usan 'this'");
console.log("❌ Constructores");
console.log("❌ Funciones que necesitan 'arguments'");
