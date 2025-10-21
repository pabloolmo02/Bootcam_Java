// EX14: Métodos de arrays - map, filter, reduce

console.log("=== MÉTODOS DE ARRAYS ===\n");

// 1. forEach - Iterar sobre cada elemento
console.log("--- forEach ---");

const numeros = [1, 2, 3, 4, 5];

numeros.forEach((num, index) => {
    console.log(`Índice ${index}: ${num}`);
});

// 2. map - Transformar cada elemento (devuelve nuevo array)
console.log("\n--- map (transformar) ---");

const dobles = numeros.map(num => num * 2);
const cuadrados = numeros.map(num => num ** 2);

console.log("Original:", numeros);
console.log("Dobles:", dobles);
console.log("Cuadrados:", cuadrados);

// Ejemplo práctico: transformar objetos
const personas = [
    { nombre: "Ana", edad: 25 },
    { nombre: "Carlos", edad: 30 },
    { nombre: "Beatriz", edad: 22 }
];

const nombres = personas.map(p => p.nombre);
const edades = personas.map(p => p.edad);

console.log("\nPersonas:", personas);
console.log("Solo nombres:", nombres);
console.log("Solo edades:", edades);

// 3. filter - Filtrar elementos (devuelve nuevo array)
console.log("\n--- filter (filtrar) ---");

const pares = numeros.filter(num => num % 2 === 0);
const impares = numeros.filter(num => num % 2 !== 0);
const mayoresQue2 = numeros.filter(num => num > 2);

console.log("Original:", numeros);
console.log("Pares:", pares);
console.log("Impares:", impares);
console.log("Mayores que 2:", mayoresQue2);

// Ejemplo práctico: filtrar objetos
const mayoresDe25 = personas.filter(p => p.edad > 25);
const nombresCon5Letras = personas.filter(p => p.nombre.length === 5);

console.log("\nMayores de 25:", mayoresDe25);
console.log("Nombres de 5 letras:", nombresCon5Letras);

// 4. reduce - Reducir array a un solo valor
console.log("\n--- reduce (reducir) ---");

// Suma de todos los números
const suma = numeros.reduce((acumulador, num) => {
    console.log(`Acum: ${acumulador}, Num: ${num}`);
    return acumulador + num;
}, 0);

console.log("Suma total:", suma);

// Producto de todos los números
const producto = numeros.reduce((acum, num) => acum * num, 1);
console.log("Producto:", producto);

// Encontrar el máximo
const maximo = numeros.reduce((max, num) => num > max ? num : max);
console.log("Máximo:", maximo);

// Contar ocurrencias
const letras = ["a", "b", "a", "c", "b", "a"];
const conteo = letras.reduce((acum, letra) => {
    acum[letra] = (acum[letra] || 0) + 1;
    return acum;
}, {});
console.log("\nConteo de letras:", conteo);

// 5. find - Encontrar el primer elemento que cumple condición
console.log("\n--- find (encontrar) ---");

const encontrado = numeros.find(num => num > 3);
const personaAna = personas.find(p => p.nombre === "Ana");

console.log("Primer número > 3:", encontrado);
console.log("Persona llamada Ana:", personaAna);

// 6. findIndex - Encontrar el índice del primer elemento
console.log("\n--- findIndex ---");

const indice = numeros.findIndex(num => num > 3);
console.log("Índice del primer número > 3:", indice);

// 7. some - ¿Alguno cumple la condición?
console.log("\n--- some (alguno) ---");

const hayPares = numeros.some(num => num % 2 === 0);
const hayNegativos = numeros.some(num => num < 0);

console.log("¿Hay números pares?", hayPares);
console.log("¿Hay números negativos?", hayNegativos);

// 8. every - ¿Todos cumplen la condición?
console.log("\n--- every (todos) ---");

const todosPositivos = numeros.every(num => num > 0);
const todosPares = numeros.every(num => num % 2 === 0);

console.log("¿Todos son positivos?", todosPositivos);
console.log("¿Todos son pares?", todosPares);

// 9. Encadenar métodos
console.log("\n--- Encadenar métodos ---");

const resultado = numeros
    .filter(num => num % 2 === 0)  // Solo pares: [2, 4]
    .map(num => num * 3)            // Multiplicar por 3: [6, 12]
    .reduce((acum, num) => acum + num, 0); // Sumar: 18

console.log("Pares * 3 sumados:", resultado);

// Ejemplo práctico complejo
const productos = [
    { nombre: "Laptop", precio: 1000, stock: 5 },
    { nombre: "Mouse", precio: 25, stock: 0 },
    { nombre: "Teclado", precio: 75, stock: 10 },
    { nombre: "Monitor", precio: 300, stock: 3 }
];

// Obtener nombre de productos en stock con precio > 50
const productosDisponibles = productos
    .filter(p => p.stock > 0)
    .filter(p => p.precio > 50)
    .map(p => p.nombre);

console.log("\nProductos disponibles (precio > 50€):", productosDisponibles);

// Calcular valor total del inventario
const valorTotal = productos
    .map(p => p.precio * p.stock)
    .reduce((total, valor) => total + valor, 0);

console.log("Valor total del inventario:", valorTotal, "€");

// 💡 Buenas prácticas
console.log("\n💡 CUÁNDO USAR CADA MÉTODO:");
console.log("- forEach: iterar sin retornar nada");
console.log("- map: transformar cada elemento");
console.log("- filter: obtener subconjunto");
console.log("- reduce: calcular un valor único");
console.log("- find: encontrar un elemento");
console.log("- some/every: verificar condiciones");
