// EX17: Destructuring de objetos

console.log("=== DESTRUCTURING DE OBJETOS ===\n");

// 1. Destructuring básico
console.log("--- Destructuring básico ---");

const persona = {
    nombre: "Ana",
    edad: 25,
    ciudad: "Madrid",
    profesion: "Desarrolladora"
};

// Forma tradicional
const nombre1 = persona.nombre;
const edad1 = persona.edad;

// Con destructuring
const { nombre, edad, ciudad } = persona;

console.log("Nombre:", nombre);
console.log("Edad:", edad);
console.log("Ciudad:", ciudad);

// 2. Renombrar variables
console.log("\n--- Renombrar variables ---");

const { nombre: nombreCompleto, edad: años } = persona;

console.log("nombreCompleto:", nombreCompleto);
console.log("años:", años);

// 3. Valores por defecto
console.log("\n--- Valores por defecto ---");

const { nombre: n, pais = "España", idioma = "Español" } = persona;

console.log("País:", pais);     // "España" (no existe en objeto)
console.log("Idioma:", idioma); // "Español" (no existe en objeto)

// 4. Destructuring anidado
console.log("\n--- Destructuring anidado ---");

const usuario = {
    id: 1,
    nombre: "Carlos",
    direccion: {
        calle: "Gran Vía 123",
        ciudad: "Barcelona",
        cp: "08001"
    },
    contacto: {
        email: "carlos@example.com",
        telefono: "123456789"
    }
};

const {
    nombre: nombreUsuario,
    direccion: { ciudad: ciudadUsuario, cp },
    contacto: { email }
} = usuario;

console.log("Usuario:", nombreUsuario);
console.log("Ciudad:", ciudadUsuario);
console.log("CP:", cp);
console.log("Email:", email);

// 5. Destructuring en parámetros de función
console.log("\n--- En parámetros de función ---");

function mostrarPersona({ nombre, edad, ciudad = "Desconocida" }) {
    console.log(`${nombre}, ${edad} años, vive en ${ciudad}`);
}

mostrarPersona({ nombre: "Beatriz", edad: 30, ciudad: "Valencia" });
mostrarPersona({ nombre: "Luis", edad: 28 });

// 6. Destructuring con rest operator
console.log("\n--- Con rest operator ---");

const producto = {
    id: 101,
    nombre: "Laptop",
    precio: 999,
    stock: 5,
    categoria: "Electrónica",
    marca: "Dell"
};

const { id, nombre: nombreProd, ...resto } = producto;

console.log("ID:", id);
console.log("Nombre:", nombreProd);
console.log("Resto de propiedades:", resto);

// 7. Destructuring de arrays dentro de objetos
console.log("\n--- Arrays dentro de objetos ---");

const estudiante = {
    nombre: "María",
    notas: [8, 9, 7, 10]
};

const { nombre: nombreEst, notas: [primera, segunda] } = estudiante;

console.log("Estudiante:", nombreEst);
console.log("Primera nota:", primera);
console.log("Segunda nota:", segunda);

// 8. Intercambio de valores con destructuring
console.log("\n--- Intercambiar propiedades ---");

let config = {
    tema: "oscuro",
    idioma: "es"
};

console.log("Antes:", config);

// Intercambiar valores
config = { tema: config.idioma, idioma: config.tema };

console.log("Después:", config);

// 9. Destructuring en loops
console.log("\n--- En loops ---");

const personas = [
    { nombre: "Ana", edad: 25 },
    { nombre: "Carlos", edad: 30 },
    { nombre: "Beatriz", edad: 22 }
];

console.log("Iterando con destructuring:");
for (const { nombre, edad } of personas) {
    console.log(`${nombre}: ${edad} años`);
}

// 10. Ejemplo práctico: API response
console.log("\n--- Ejemplo práctico ---");

const apiResponse = {
    status: 200,
    data: {
        user: {
            id: 1,
            username: "anagarcia",
            profile: {
                fullName: "Ana García",
                avatar: "avatar.jpg"
            }
        },
        posts: [
            { id: 1, title: "Post 1" },
            { id: 2, title: "Post 2" }
        ]
    },
    message: "Success"
};

const {
    status,
    data: {
        user: {
            username,
            profile: { fullName }
        },
        posts
    },
    message
} = apiResponse;

console.log("Status:", status);
console.log("Username:", username);
console.log("Nombre completo:", fullName);
console.log("Posts:", posts.length);
console.log("Mensaje:", message);

// 11. Funciones que retornan múltiples valores
console.log("\n--- Retornar múltiples valores ---");

function calcularEstadisticas(numeros) {
    const suma = numeros.reduce((a, b) => a + b, 0);
    const promedio = suma / numeros.length;
    const max = Math.max(...numeros);
    const min = Math.min(...numeros);
    
    return { suma, promedio, max, min };
}

const { suma, promedio, max, min } = calcularEstadisticas([1, 2, 3, 4, 5]);

console.log("Suma:", suma);
console.log("Promedio:", promedio);
console.log("Máximo:", max);
console.log("Mínimo:", min);

// 12. Destructuring con valores calculados
console.log("\n--- Valores calculados ---");

const rectangulo = {
    ancho: 10,
    alto: 5
};

const {
    ancho,
    alto,
    area = ancho * alto,
    perimetro = 2 * (ancho + alto)
} = rectangulo;

console.log("Ancho:", ancho);
console.log("Alto:", alto);
console.log("Área:", area);
console.log("Perímetro:", perimetro);

// 💡 Ventajas del destructuring
console.log("\n💡 VENTAJAS:");
console.log("- Código más limpio y legible");
console.log("- Menos variables temporales");
console.log("- Fácil extracción de datos de APIs");
console.log("- Mejor para parámetros de funciones");
console.log("- Facilita el trabajo con datos complejos");
