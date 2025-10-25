// EX13: Arrays - Fundamentos

console.log("=== ARRAYS ===\n");

// 1. Crear arrays
console.log("--- Crear arrays ---");

const frutas = ["🍎 Manzana", "🍌 Plátano", "🍊 Naranja"];
const numeros = [1, 2, 3, 4, 5];
const mixto = [1, "texto", true, null, { nombre: "objeto" }];
const vacio = [];

console.log("frutas:", frutas);
console.log("numeros:", numeros);
console.log("mixto:", mixto);
console.log("vacio:", vacio);

// 2. Acceder a elementos
console.log("\n--- Acceder a elementos ---");

console.log("Primer elemento:", frutas[0]);
console.log("Segundo elemento:", frutas[1]);
console.log("Último elemento:", frutas[frutas.length - 1]);

// 3. Modificar elementos
console.log("\n--- Modificar elementos ---");

const colores = ["rojo", "verde", "azul"];
console.log("Original:", colores);

colores[1] = "amarillo";
console.log("Modificado:", colores);

// 4. Propiedades básicas
console.log("\n--- Propiedades ---");

console.log("Longitud de frutas:", frutas.length);
console.log("¿Está vacío?", vacio.length === 0);

// 5. Métodos para añadir elementos
console.log("\n--- Añadir elementos ---");

const animales = ["🐶 Perro", "🐱 Gato"];
console.log("Original:", animales);

// push: añade al final
animales.push("🐭 Ratón");
console.log("Después de push:", animales);

// unshift: añade al principio
animales.unshift("🐘 Elefante");
console.log("Después de unshift:", animales);

// 6. Métodos para eliminar elementos
console.log("\n--- Eliminar elementos ---");

const dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"];
console.log("Original:", dias);

// pop: elimina el último
const ultimoDia = dias.pop();
console.log("Después de pop:", dias);
console.log("Elemento eliminado:", ultimoDia);

// shift: elimina el primero
const primerDia = dias.shift();
console.log("Después de shift:", dias);
console.log("Elemento eliminado:", primerDia);

// 7. Buscar elementos
console.log("\n--- Buscar elementos ---");

const lenguajes = ["JavaScript", "Python", "Java", "C++"];

// indexOf: devuelve el índice, -1 si no existe
console.log("Índice de 'Python':", lenguajes.indexOf("Python"));
console.log("Índice de 'Ruby':", lenguajes.indexOf("Ruby"));

// includes: devuelve true/false
console.log("¿Contiene 'Java'?", lenguajes.includes("Java"));
console.log("¿Contiene 'PHP'?", lenguajes.includes("PHP"));

// 8. Extraer porciones
console.log("\n--- Slice (extraer) ---");

const letras = ["A", "B", "C", "D", "E"];
console.log("Original:", letras);

const porcion1 = letras.slice(1, 4); // Desde índice 1 hasta 4 (sin incluir 4)
const porcion2 = letras.slice(2);    // Desde índice 2 hasta el final
const porcion3 = letras.slice(-2);   // Últimos 2 elementos

console.log("slice(1, 4):", porcion1);
console.log("slice(2):", porcion2);
console.log("slice(-2):", porcion3);
console.log("Original no cambia:", letras);

// 9. Eliminar/insertar elementos
console.log("\n--- Splice (modificar) ---");

const meses = ["Enero", "Febrero", "Marzo", "Abril"];
console.log("Original:", meses);

// Eliminar elementos
const eliminados = meses.splice(1, 2); // Desde índice 1, eliminar 2
console.log("Después de eliminar:", meses);
console.log("Eliminados:", eliminados);

// Insertar elementos
meses.splice(1, 0, "Febrero", "Marzo"); // En índice 1, eliminar 0, insertar elementos
console.log("Después de insertar:", meses);

// Reemplazar elementos
meses.splice(2, 1, "MARZO"); // En índice 2, eliminar 1, insertar "MARZO"
console.log("Después de reemplazar:", meses);

// 10. Concatenar arrays
console.log("\n--- Concat (concatenar) ---");

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [7, 8, 9];

const combinado = arr1.concat(arr2, arr3);
console.log("arr1:", arr1);
console.log("arr2:", arr2);
console.log("Combinado:", combinado);

// 11. Convertir a string
console.log("\n--- Join (unir) ---");

const palabras = ["Hola", "Mundo", "JavaScript"];
const frase1 = palabras.join(" ");      // Separar con espacio
const frase2 = palabras.join("-");      // Separar con guión
const frase3 = palabras.join("");       // Sin separador

console.log("join(' '):", frase1);
console.log("join('-'):", frase2);
console.log("join(''):", frase3);

// 12. Invertir y ordenar
console.log("\n--- Reverse y Sort ---");

const nums = [3, 1, 4, 1, 5, 9, 2, 6];
console.log("Original:", nums);

// reverse: invierte el orden (modifica el original)
const invertido = [...nums].reverse();
console.log("Invertido:", invertido);

// sort: ordena (modifica el original)
const ordenado = [...nums].sort((a, b) => a - b);
console.log("Ordenado:", ordenado);

// 💡 Spread operator [...] crea una copia para no modificar el original

console.log("\n💡 RESUMEN:");
console.log("- Arrays son listas ordenadas de elementos");
console.log("- Índices empiezan en 0");
console.log("- Son mutables (se pueden modificar)");
console.log("- Tienen muchos métodos útiles");
