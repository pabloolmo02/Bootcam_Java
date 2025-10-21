// EX19: Template Literals (Template Strings)

console.log("=== TEMPLATE LITERALS ===\n");

// 1. Template literals básicos
console.log("--- Básicos ---");

const nombre = "Ana";
const edad = 25;

// Forma tradicional
const mensajeTradicional = "Hola, soy " + nombre + " y tengo " + edad + " años";

// Con template literals
const mensajeModerno = `Hola, soy ${nombre} y tengo ${edad} años`;

console.log("Tradicional:", mensajeTradicional);
console.log("Moderno:", mensajeModerno);

// 2. Strings multilínea
console.log("\n--- Multilínea ---");

// Forma tradicional (difícil de leer)
const textoTradicional = "Primera línea\n" +
                         "Segunda línea\n" +
                         "Tercera línea";

// Con template literals (mucho más claro)
const textoModerno = `Primera línea
Segunda línea
Tercera línea`;

console.log("Tradicional:");
console.log(textoTradicional);
console.log("\nModerno:");
console.log(textoModerno);

// 3. Expresiones dentro de template literals
console.log("\n--- Expresiones ---");

const a = 10;
const b = 5;

console.log(`${a} + ${b} = ${a + b}`);
console.log(`${a} * ${b} = ${a * b}`);
console.log(`El doble de ${a} es ${a * 2}`);

// Expresiones complejas
const precio = 100;
const descuento = 0.2;
console.log(`Precio final: ${precio - (precio * descuento)}€`);

// 4. Llamar funciones
console.log("\n--- Llamar funciones ---");

function obtenerSaludo(nombre) {
    return `¡Hola, ${nombre}!`;
}

const usuario = "Carlos";
console.log(`${obtenerSaludo(usuario)} Bienvenido.`);

// Operador ternario
const hora = 14;
console.log(`Buenas ${hora < 12 ? 'mañanas' : 'tardes'}`);

// 5. Objetos en template literals
console.log("\n--- Con objetos ---");

const persona = {
    nombre: "Beatriz",
    edad: 30,
    profesion: "Diseñadora"
};

console.log(`Nombre: ${persona.nombre}`);
console.log(`Edad: ${persona.edad}`);
console.log(`Ficha: ${persona.nombre}, ${persona.edad} años, ${persona.profesion}`);

// 6. Arrays en template literals
console.log("\n--- Con arrays ---");

const frutas = ["🍎 Manzana", "🍌 Plátano", "🍊 Naranja"];
console.log(`Frutas disponibles: ${frutas.join(", ")}`);
console.log(`Total de frutas: ${frutas.length}`);
console.log(`Primera fruta: ${frutas[0]}`);

// 7. Template literals anidados
console.log("\n--- Anidados ---");

const productos = [
    { nombre: "Laptop", precio: 999 },
    { nombre: "Mouse", precio: 25 },
    { nombre: "Teclado", precio: 75 }
];

const lista = `Productos:
${productos.map(p => `- ${p.nombre}: ${p.precio}€`).join('\n')}`;

console.log(lista);

// 8. HTML dinámico con template literals
console.log("\n--- HTML dinámico ---");

const usuarios = [
    { id: 1, nombre: "Ana", activo: true },
    { id: 2, nombre: "Carlos", activo: false },
    { id: 3, nombre: "Beatriz", activo: true }
];

const html = `
<ul>
${usuarios.map(user => `
  <li class="${user.activo ? 'activo' : 'inactivo'}">
    ${user.nombre} ${user.activo ? '✅' : '❌'}
  </li>
`).join('')}
</ul>
`.trim();

console.log(html);

// 9. Formatear números
console.log("\n--- Formatear números ---");

const numero = 1234567.89;
console.log(`Número formateado: ${numero.toLocaleString('es-ES')}`);
console.log(`Con 2 decimales: ${numero.toFixed(2)}`);

const porcentaje = 0.856;
console.log(`Porcentaje: ${(porcentaje * 100).toFixed(1)}%`);

// 10. Fechas formateadas
console.log("\n--- Fechas ---");

const fecha = new Date();
console.log(`Fecha: ${fecha.toLocaleDateString('es-ES')}`);
console.log(`Hora: ${fecha.toLocaleTimeString('es-ES')}`);
console.log(`Completo: ${fecha.toLocaleString('es-ES')}`);

// 11. Condicionales
console.log("\n--- Condicionales ---");

const stock = 5;
console.log(`Stock: ${stock > 0 ? `${stock} unidades disponibles` : 'Agotado'}`);

const usuario2 = {
    nombre: "Luis",
    admin: true
};

console.log(`${usuario2.nombre} ${usuario2.admin ? '(Administrador)' : '(Usuario)'}`);

// 12. Escapar backticks
console.log("\n--- Escapar backticks ---");

const codigo = `const mensaje = \`Hola Mundo\`;`;
console.log(codigo);

// 13. Tagged templates (avanzado)
console.log("\n--- Tagged templates ---");

function destacar(strings, ...valores) {
    return strings.reduce((resultado, str, i) => {
        return resultado + str + (valores[i] ? `**${valores[i]}**` : '');
    }, '');
}

const nombre2 = "Ana";
const ciudad = "Madrid";
const mensaje = destacar`Hola, soy ${nombre2} y vivo en ${ciudad}`;
console.log(mensaje);

// 14. Ejemplo práctico: Generador de URLs
console.log("\n--- Generador de URLs ---");

function crearURL(base, params) {
    const query = Object.entries(params)
        .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
        .join('&');
    
    return `${base}?${query}`;
}

const url = crearURL('https://api.example.com/search', {
    q: 'JavaScript',
    page: 1,
    limit: 10
});

console.log("URL:", url);

// 15. Ejemplo práctico: Generador de reportes
console.log("\n--- Reporte ---");

const ventas = [
    { producto: "Laptop", cantidad: 5, precio: 999 },
    { producto: "Mouse", cantidad: 20, precio: 25 },
    { producto: "Teclado", cantidad: 10, precio: 75 }
];

const total = ventas.reduce((sum, v) => sum + (v.cantidad * v.precio), 0);

const reporte = `
╔═══════════════════════════════════════╗
║          REPORTE DE VENTAS            ║
╠═══════════════════════════════════════╣
${ventas.map(v => `║ ${v.producto.padEnd(15)} | ${String(v.cantidad).padStart(3)} uds | ${String(v.cantidad * v.precio).padStart(8)}€ ║`).join('\n')}
╠═══════════════════════════════════════╣
║ TOTAL:                     ${String(total).padStart(8)}€ ║
╚═══════════════════════════════════════╝
`.trim();

console.log(reporte);

// 💡 Ventajas
console.log("\n💡 VENTAJAS:");
console.log("- Interpolación de variables fácil");
console.log("- Strings multilínea sin \\n");
console.log("- Expresiones JavaScript dentro");
console.log("- Ideal para HTML/templates");
console.log("- Más legible que concatenación");
console.log("- Formateo complejo simplificado");
