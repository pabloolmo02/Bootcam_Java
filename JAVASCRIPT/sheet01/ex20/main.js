// EX20: Conceptos avanzados - Resumen y práctica

console.log("=== JAVASCRIPT: CONCEPTOS AVANZADOS ===\n");

// 1. Inmutabilidad y métodos que NO mutan
console.log("--- Inmutabilidad ---");

const original = [1, 2, 3];

// ❌ Mutan el array original
const mutable = original;
mutable.push(4);
console.log("Original mutado:", original); // [1, 2, 3, 4]

// ✅ NO mutan (crean nuevo array)
const inmutable = [...original];
const conNuevo = [...original, 5];
const mapeado = original.map(x => x * 2);
const filtrado = original.filter(x => x > 1);

console.log("Inmutable:", inmutable);
console.log("Con nuevo:", conNuevo);
console.log("Mapeado:", mapeado);
console.log("Filtrado:", filtrado);

// 2. Composición de funciones
console.log("\n--- Composición de funciones ---");

const sumarUno = x => x + 1;
const duplicar = x => x * 2;
const alCuadrado = x => x ** 2;

// Aplicar funciones en secuencia
const resultado1 = alCuadrado(duplicar(sumarUno(5)));
console.log("(5 + 1) * 2 ^ 2 =", resultado1);

// Función compose
const compose = (...funciones) => valor =>
    funciones.reduceRight((acc, fn) => fn(acc), valor);

const transformar = compose(alCuadrado, duplicar, sumarUno);
console.log("Con compose:", transformar(5));

// 3. Currying
console.log("\n--- Currying ---");

// Función normal
function sumarNormal(a, b, c) {
    return a + b + c;
}

// Función currificada
const sumarCurry = a => b => c => a + b + c;

console.log("Normal:", sumarNormal(1, 2, 3));
console.log("Curry:", sumarCurry(1)(2)(3));

// Uso práctico de currying
const multiplicarPor = factor => numero => numero * factor;
const duplicarValor = multiplicarPor(2);
const triplicar = multiplicarPor(3);

console.log("Duplicar 5:", duplicarValor(5));
console.log("Triplicar 5:", triplicar(5));

// 4. Closures (clausuras)
console.log("\n--- Closures ---");

function crearContador() {
    let contador = 0; // Variable privada
    
    return {
        incrementar() {
            contador++;
            return contador;
        },
        decrementar() {
            contador--;
            return contador;
        },
        obtener() {
            return contador;
        }
    };
}

const contador1 = crearContador();
console.log("Incrementar:", contador1.incrementar()); // 1
console.log("Incrementar:", contador1.incrementar()); // 2
console.log("Decrementar:", contador1.decrementar()); // 1
console.log("Obtener:", contador1.obtener());        // 1

// 5. Higher-Order Functions (funciones de orden superior)
console.log("\n--- Higher-Order Functions ---");

// Función que recibe función como parámetro
function ejecutarDobleVeces(fn, valor) {
    return fn(fn(valor));
}

const incrementar = x => x + 1;
console.log("Incrementar 5 dos veces:", ejecutarDobleVeces(incrementar, 5));

// Función que retorna función
function crearMultiplicador(factor) {
    return numero => numero * factor;
}

const por5 = crearMultiplicador(5);
console.log("10 * 5 =", por5(10));

// 6. Method Chaining
console.log("\n--- Method Chaining ---");

class Calculadora {
    constructor(valor = 0) {
        this.valor = valor;
    }
    
    sumar(n) {
        this.valor += n;
        return this; // Retorna this para encadenar
    }
    
    restar(n) {
        this.valor -= n;
        return this;
    }
    
    multiplicar(n) {
        this.valor *= n;
        return this;
    }
    
    resultado() {
        return this.valor;
    }
}

const calc = new Calculadora(10);
const resultado2 = calc.sumar(5).multiplicar(2).restar(10).resultado();
console.log("(10 + 5) * 2 - 10 =", resultado2);

// 7. Memoization (caché de resultados)
console.log("\n--- Memoization ---");

function memoize(fn) {
    const cache = {};
    
    return (...args) => {
        const key = JSON.stringify(args);
        
        if (key in cache) {
            console.log(`Desde caché: ${key}`);
            return cache[key];
        }
        
        console.log(`Calculando: ${key}`);
        const resultado = fn(...args);
        cache[key] = resultado;
        return resultado;
    };
}

const factorial = memoize(n => {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
});

console.log("factorial(5):", factorial(5));
console.log("factorial(5) de nuevo:", factorial(5)); // Desde caché

// 8. Debounce (limitar ejecución frecuente)
console.log("\n--- Debounce ---");

function debounce(fn, delay) {
    let timeoutId;
    
    return (...args) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => fn(...args), delay);
    };
}

const buscar = texto => console.log(`Buscando: ${texto}`);
const buscarDebounced = debounce(buscar, 300);

// Simular escritura rápida
console.log("Simulando búsqueda...");
buscarDebounced("J");
buscarDebounced("Ja");
buscarDebounced("Jav");
buscarDebounced("Java"); // Solo este se ejecutará después de 300ms

// 9. Pipe (opuesto a compose)
console.log("\n--- Pipe ---");

const pipe = (...funciones) => valor =>
    funciones.reduce((acc, fn) => fn(acc), valor);

const procesarNumero = pipe(
    x => x + 1,
    x => x * 2,
    x => x ** 2
);

console.log("pipe(5 + 1, * 2, ^ 2):", procesarNumero(5));

// 10. Ejemplo práctico completo
console.log("\n--- Ejemplo práctico: Procesador de datos ---");

const datos = [
    { id: 1, nombre: "Ana", edad: 25, activo: true, salario: 30000 },
    { id: 2, nombre: "Carlos", edad: 30, activo: false, salario: 40000 },
    { id: 3, nombre: "Beatriz", edad: 22, activo: true, salario: 25000 },
    { id: 4, nombre: "Luis", edad: 35, activo: true, salario: 50000 },
    { id: 5, nombre: "María", edad: 28, activo: false, salario: 35000 }
];

// Pipeline de transformaciones
const resultado3 = datos
    .filter(({ activo }) => activo)                    // Solo activos
    .filter(({ edad }) => edad >= 25)                  // Mayores de 25
    .map(({ nombre, edad, salario }) => ({             // Transformar
        nombre,
        edad,
        salario,
        salarioAnual: salario * 14 // En España
    }))
    .sort((a, b) => b.salarioAnual - a.salarioAnual)  // Ordenar por salario
    .map(p => `${p.nombre}: ${p.salarioAnual.toLocaleString()}€/año`);

console.log("Empleados activos (≥25 años) ordenados por salario:");
resultado3.forEach((linea, i) => console.log(`${i + 1}. ${linea}`));

// 11. Funciones puras
console.log("\n--- Funciones puras ---");

// ✅ Pura: mismo input = mismo output, sin efectos secundarios
const sumarPura = (a, b) => a + b;

// ❌ Impura: modifica estado externo
let total = 0;
const sumarImpura = (n) => {
    total += n; // Efecto secundario
    return total;
};

console.log("Pura:", sumarPura(5, 3));
console.log("Pura:", sumarPura(5, 3)); // Siempre igual
console.log("Impura:", sumarImpura(5));
console.log("Impura:", sumarImpura(5)); // Diferente!

// 💡 Resumen de conceptos
console.log("\n💡 CONCEPTOS CLAVE:");
console.log("\n1. INMUTABILIDAD:");
console.log("   - Usar spread, map, filter, reduce");
console.log("   - Evitar push, pop, splice directamente");

console.log("\n2. FUNCIONES DE ORDEN SUPERIOR:");
console.log("   - Funciones que reciben/retornan funciones");
console.log("   - map, filter, reduce son ejemplos");

console.log("\n3. CLOSURES:");
console.log("   - Funciones que 'recuerdan' su ámbito");
console.log("   - Útil para privacidad y factories");

console.log("\n4. COMPOSICIÓN:");
console.log("   - Combinar funciones pequeñas");
console.log("   - Código más modular y reutilizable");

console.log("\n5. FUNCIONES PURAS:");
console.log("   - Sin efectos secundarios");
console.log("   - Predecibles y fáciles de testear");

console.log("\n🎉 ¡HAS COMPLETADO LOS 20 EJERCICIOS!");
console.log("Ahora tienes una base sólida en JavaScript moderno");
