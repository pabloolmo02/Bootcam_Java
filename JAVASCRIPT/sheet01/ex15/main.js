// EX15: Arrays avanzados - Spread, Destructuring, Rest

console.log("=== ARRAYS AVANZADOS ===\n");

// 1. Spread Operator (...) - Expandir arrays
console.log("--- Spread Operator ---");

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

// Combinar arrays
const combinado = [...arr1, ...arr2];
console.log("arr1:", arr1);
console.log("arr2:", arr2);
console.log("Combinado:", combinado);

// Copiar array
const copia = [...arr1];
copia[0] = 999;
console.log("\nOriginal arr1:", arr1);
console.log("Copia modificada:", copia);

// Añadir elementos
const conNuevos = [...arr1, 4, 5, ...arr2, 7, 8];
console.log("Con nuevos:", conNuevos);

// Pasar array como argumentos
console.log("\nMáximo de [3, 7, 2, 9, 1]:");
console.log(Math.max(...[3, 7, 2, 9, 1])); // Equivale a Math.max(3, 7, 2, 9, 1)

// 2. Destructuring - Extraer valores de arrays
console.log("\n--- Destructuring ---");

const frutas = ["🍎 Manzana", "🍌 Plátano", "🍊 Naranja", "🍇 Uvas"];

// Extraer primeros elementos
const [primera, segunda] = frutas;
console.log("Primera fruta:", primera);
console.log("Segunda fruta:", segunda);

// Saltar elementos
const [, , tercera] = frutas;
console.log("Tercera fruta:", tercera);

// Rest en destructuring
const [fruta1, fruta2, ...resto] = frutas;
console.log("Primeras dos:", fruta1, fruta2);
console.log("Resto:", resto);

// 3. Rest Parameters - Funciones con n argumentos
console.log("\n--- Rest Parameters ---");

function sumar(...numeros) {
    console.log("Argumentos recibidos:", numeros);
    return numeros.reduce((total, num) => total + num, 0);
}

console.log("Suma de 1, 2, 3:", sumar(1, 2, 3));
console.log("Suma de 10, 20, 30, 40:", sumar(10, 20, 30, 40));

// Combinar parámetros normales con rest
function presentar(nombre, edad, ...hobbies) {
    console.log(`\n${nombre}, ${edad} años`);
    console.log("Hobbies:", hobbies.join(", "));
}

presentar("Ana", 25, "Leer", "Nadar", "Pintar");

// 4. Valores por defecto en destructuring
console.log("\n--- Valores por defecto ---");

const colores = ["rojo", "verde"];

const [color1, color2, color3 = "azul"] = colores;
console.log(color1, color2, color3); // "azul" es el valor por defecto

// 5. Intercambiar variables con destructuring
console.log("\n--- Intercambiar variables ---");

let a = 1;
let b = 2;
console.log("Antes - a:", a, "b:", b);

[a, b] = [b, a];
console.log("Después - a:", a, "b:", b);

// 6. Destructuring en funciones
console.log("\n--- Destructuring en parámetros ---");

function imprimirPrimerosElementos([primero, segundo]) {
    console.log("Primer elemento:", primero);
    console.log("Segundo elemento:", segundo);
}

imprimirPrimerosElementos([10, 20, 30]);

// 7. Array.from() - Crear array desde iterable
console.log("\n--- Array.from ---");

// Desde string
const letras = Array.from("Hola");
console.log("Desde 'Hola':", letras);

// Crear array de números
const numeros = Array.from({ length: 5 }, (_, i) => i + 1);
console.log("Números del 1 al 5:", numeros);

// 8. Array.of() - Crear array con elementos
console.log("\n--- Array.of ---");

const arr3 = Array.of(1, 2, 3, 4, 5);
const arr4 = Array.of(7); // [7], no array de longitud 7
console.log("Array.of(1,2,3,4,5):", arr3);
console.log("Array.of(7):", arr4);

// 9. fill() - Rellenar array
console.log("\n--- fill ---");

const arr5 = new Array(5).fill(0);
console.log("Array de 5 ceros:", arr5);

const arr6 = [1, 2, 3, 4, 5];
arr6.fill(9, 2, 4); // Rellenar con 9 desde índice 2 hasta 4
console.log("fill(9, 2, 4):", arr6);

// 10. flat() - Aplanar arrays anidados
console.log("\n--- flat ---");

const anidado = [1, 2, [3, 4, [5, 6]]];
const aplanado1 = anidado.flat(); // 1 nivel
const aplanado2 = anidado.flat(2); // 2 niveles

console.log("Original:", anidado);
console.log("flat():", aplanado1);
console.log("flat(2):", aplanado2);

// 11. Ejemplo práctico completo
console.log("\n--- Ejemplo práctico ---");

const estudiantes = [
    { nombre: "Ana", notas: [8, 9, 7] },
    { nombre: "Carlos", notas: [6, 7, 8] },
    { nombre: "Beatriz", notas: [9, 9, 10] }
];

// Calcular promedio de cada estudiante
const promedios = estudiantes.map(({ nombre, notas }) => {
    const promedio = notas.reduce((sum, nota) => sum + nota, 0) / notas.length;
    return { nombre, promedio: promedio.toFixed(2) };
});

console.log("Promedios:", promedios);

// Todas las notas en un solo array
const todasLasNotas = estudiantes
    .map(e => e.notas)
    .flat();

console.log("Todas las notas:", todasLasNotas);

// Promedio general
const promedioGeneral = todasLasNotas
    .reduce((sum, nota) => sum + nota, 0) / todasLasNotas.length;

console.log("Promedio general:", promedioGeneral.toFixed(2));

// 💡 Resumen
console.log("\n💡 RESUMEN:");
console.log("- Spread (...): expandir/copiar arrays");
console.log("- Destructuring: extraer valores fácilmente");
console.log("- Rest: agrupar múltiples argumentos");
console.log("- Array.from/of: crear arrays");
console.log("- flat: aplanar arrays anidados");
