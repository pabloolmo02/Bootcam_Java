// EX18: Spread Operator y Rest Parameters

console.log("=== SPREAD & REST ===\n");

// SPREAD OPERATOR (...)

// 1. Spread con arrays
console.log("--- Spread con arrays ---");

const numeros1 = [1, 2, 3];
const numeros2 = [4, 5, 6];

// Combinar arrays
const combinado = [...numeros1, ...numeros2];
console.log("Combinado:", combinado);

// Insertar en el medio
const intermedio = [...numeros1, 99, ...numeros2];
console.log("Intermedio:", intermedio);

// Copiar array
const copia = [...numeros1];
copia[0] = 999;
console.log("Original:", numeros1);
console.log("Copia modificada:", copia);

// 2. Spread con objetos
console.log("\n--- Spread con objetos ---");

const persona = {
    nombre: "Ana",
    edad: 25
};

const direccion = {
    ciudad: "Madrid",
    pais: "España"
};

// Combinar objetos
const personaCompleta = { ...persona, ...direccion };
console.log("Persona completa:", personaCompleta);

// Sobreescribir propiedades
const personaActualizada = {
    ...persona,
    edad: 26,
    profesion: "Desarrolladora"
};
console.log("Actualizada:", personaActualizada);

// 3. Spread en funciones (como argumentos)
console.log("\n--- Spread en funciones ---");

function sumar(a, b, c) {
    return a + b + c;
}

const nums = [10, 20, 30];
console.log("Suma:", sumar(...nums));

// Math.max con array
const valores = [5, 2, 9, 1, 7];
console.log("Máximo:", Math.max(...valores));
console.log("Mínimo:", Math.min(...valores));

// 4. Clonar y modificar objetos
console.log("\n--- Clonar con modificaciones ---");

const producto = {
    id: 1,
    nombre: "Laptop",
    precio: 999,
    stock: 5
};

const productoConDescuento = {
    ...producto,
    precio: producto.precio * 0.9,
    descuento: "10%"
};

console.log("Original:", producto);
console.log("Con descuento:", productoConDescuento);

// 5. Spread con strings
console.log("\n--- Spread con strings ---");

const palabra = "Hola";
const letras = [...palabra];
console.log("Letras:", letras);

// REST PARAMETERS (...)

// 6. Rest en funciones - Argumentos variables
console.log("\n--- Rest parameters ---");

function sumarTodos(...numeros) {
    console.log("Argumentos:", numeros);
    return numeros.reduce((total, num) => total + num, 0);
}

console.log("Suma de 1,2,3:", sumarTodos(1, 2, 3));
console.log("Suma de 10,20,30,40:", sumarTodos(10, 20, 30, 40));

// 7. Rest con parámetros normales
console.log("\n--- Rest con otros parámetros ---");

function crearMensaje(titulo, ...lineas) {
    console.log(`=== ${titulo} ===`);
    lineas.forEach(linea => console.log(`- ${linea}`));
}

crearMensaje("Lista de tareas", "Estudiar", "Hacer ejercicio", "Leer");

// 8. Rest en destructuring de arrays
console.log("\n--- Rest en destructuring (arrays) ---");

const colores = ["rojo", "verde", "azul", "amarillo", "naranja"];
const [primero, segundo, ...restoColores] = colores;

console.log("Primero:", primero);
console.log("Segundo:", segundo);
console.log("Resto:", restoColores);

// 9. Rest en destructuring de objetos
console.log("\n--- Rest en destructuring (objetos) ---");

const usuario = {
    id: 1,
    username: "anagarcia",
    email: "ana@example.com",
    edad: 25,
    ciudad: "Madrid",
    pais: "España"
};

const { id, username, ...datosExtra } = usuario;

console.log("ID:", id);
console.log("Username:", username);
console.log("Datos extra:", datosExtra);

// 10. Combinar spread y rest
console.log("\n--- Combinar spread y rest ---");

function procesarDatos(primero, segundo, ...resto) {
    console.log("Primero:", primero);
    console.log("Segundo:", segundo);
    console.log("Resto:", resto);
    
    // Usar spread para combinar
    const todos = [primero, segundo, ...resto];
    return todos;
}

const resultado = procesarDatos(1, 2, 3, 4, 5, 6);
console.log("Todos:", resultado);

// 11. Ejemplo práctico: Actualizar objetos inmutables
console.log("\n--- Actualizar objetos inmutables ---");

const estadoInicial = {
    usuario: {
        nombre: "Ana",
        edad: 25
    },
    configuracion: {
        tema: "claro",
        notificaciones: true
    }
};

// Actualizar solo el tema
const nuevoEstado = {
    ...estadoInicial,
    configuracion: {
        ...estadoInicial.configuracion,
        tema: "oscuro"
    }
};

console.log("Estado inicial:", estadoInicial);
console.log("Nuevo estado:", nuevoEstado);

// 12. Ejemplo práctico: Función de utilidad
console.log("\n--- Función merge ---");

function merge(...objetos) {
    return objetos.reduce((resultado, obj) => {
        return { ...resultado, ...obj };
    }, {});
}

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const obj3 = { e: 5, f: 6 };

const merged = merge(obj1, obj2, obj3);
console.log("Merged:", merged);

// 13. Eliminar propiedades de objeto
console.log("\n--- Eliminar propiedades ---");

const personaConEmail = {
    nombre: "Carlos",
    edad: 30,
    email: "carlos@example.com",
    password: "secreto123"
};

// Extraer y eliminar password
const { password, ...personaSinPassword } = personaConEmail;

console.log("Sin password:", personaSinPassword);

// 14. Ejemplo práctico: Logger flexible
console.log("\n--- Logger flexible ---");

function log(nivel, ...mensajes) {
    const timestamp = new Date().toLocaleTimeString();
    console.log(`[${timestamp}] [${nivel}]`, ...mensajes);
}

log("INFO", "Aplicación iniciada");
log("WARNING", "Memoria baja:", "75%", "usado");
log("ERROR", "Fallo en conexión", { code: 500, endpoint: "/api/users" });

// 💡 Diferencias y usos
console.log("\n💡 RESUMEN:");
console.log("\nSPREAD (...):");
console.log("- Expandir arrays/objetos");
console.log("- Copiar sin mutar el original");
console.log("- Combinar arrays/objetos");
console.log("- Pasar elementos como argumentos");

console.log("\nREST (...):");
console.log("- Agrupar múltiples elementos");
console.log("- Funciones con n argumentos");
console.log("- Destructuring: capturar el 'resto'");
console.log("- Siempre debe ser el último parámetro");
