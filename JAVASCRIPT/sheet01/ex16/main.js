// EX16: Objetos - Fundamentos

console.log("=== OBJETOS ===\n");

// 1. Crear objetos
console.log("--- Crear objetos ---");

// Notación literal (más común)
const persona = {
    nombre: "Ana",
    edad: 25,
    ciudad: "Madrid"
};

console.log("Persona:", persona);

// Objeto vacío
const objetoVacio = {};
console.log("Objeto vacío:", objetoVacio);

// 2. Acceder a propiedades
console.log("\n--- Acceder a propiedades ---");

// Notación de punto
console.log("Nombre:", persona.nombre);
console.log("Edad:", persona.edad);

// Notación de corchetes
console.log("Ciudad:", persona["ciudad"]);

// Útil con variables
const propiedad = "nombre";
console.log("Acceso dinámico:", persona[propiedad]);

// 3. Modificar propiedades
console.log("\n--- Modificar propiedades ---");

persona.edad = 26;
persona["ciudad"] = "Barcelona";
console.log("Persona modificada:", persona);

// 4. Añadir propiedades
console.log("\n--- Añadir propiedades ---");

persona.profesion = "Desarrolladora";
persona.email = "ana@example.com";
console.log("Con nuevas propiedades:", persona);

// 5. Eliminar propiedades
console.log("\n--- Eliminar propiedades ---");

delete persona.email;
console.log("Después de delete:", persona);

// 6. Métodos en objetos
console.log("\n--- Métodos ---");

const usuario = {
    nombre: "Carlos",
    edad: 30,
    
    // Método tradicional
    saludar: function() {
        return `Hola, soy ${this.nombre}`;
    },
    
    // Método corto (ES6)
    despedir() {
        return `Adiós de ${this.nombre}`;
    },
    
    // Arrow function (no tiene 'this' propio)
    info: () => {
        return "Información del usuario";
    }
};

console.log(usuario.saludar());
console.log(usuario.despedir());
console.log(usuario.info());

// 7. this en objetos
console.log("\n--- this ---");

const coche = {
    marca: "Toyota",
    modelo: "Corolla",
    año: 2022,
    
    detalles() {
        return `${this.marca} ${this.modelo} (${this.año})`;
    },
    
    actualizar(año) {
        this.año = año;
    }
};

console.log(coche.detalles());
coche.actualizar(2023);
console.log("Después de actualizar:", coche.detalles());

// 8. Objetos anidados
console.log("\n--- Objetos anidados ---");

const empresa = {
    nombre: "TechCorp",
    empleados: 100,
    direccion: {
        calle: "Gran Vía 123",
        ciudad: "Madrid",
        pais: "España"
    },
    fundador: {
        nombre: "Juan",
        edad: 45
    }
};

console.log("Empresa:", empresa.nombre);
console.log("Ciudad:", empresa.direccion.ciudad);
console.log("Fundador:", empresa.fundador.nombre);

// 9. Arrays de objetos
console.log("\n--- Arrays de objetos ---");

const estudiantes = [
    { nombre: "Ana", nota: 8.5 },
    { nombre: "Carlos", nota: 7.0 },
    { nombre: "Beatriz", nota: 9.5 }
];

console.log("Estudiantes:");
estudiantes.forEach(est => {
    console.log(`- ${est.nombre}: ${est.nota}`);
});

// 10. Comprobar si existe una propiedad
console.log("\n--- Comprobar propiedades ---");

console.log("¿Tiene 'nombre'?", 'nombre' in persona);
console.log("¿Tiene 'apellido'?", 'apellido' in persona);

// hasOwnProperty
console.log("¿hasOwnProperty 'edad'?", persona.hasOwnProperty('edad'));

// 11. Obtener claves y valores
console.log("\n--- Object.keys/values/entries ---");

const producto = {
    nombre: "Laptop",
    precio: 999,
    stock: 5,
    categoria: "Electrónica"
};

console.log("Claves:", Object.keys(producto));
console.log("Valores:", Object.values(producto));
console.log("Entradas:", Object.entries(producto));

// Iterar sobre propiedades
console.log("\nIterar propiedades:");
Object.entries(producto).forEach(([clave, valor]) => {
    console.log(`${clave}: ${valor}`);
});

// 12. Copiar objetos
console.log("\n--- Copiar objetos ---");

// Copia superficial con spread
const personaCopia = { ...persona };
personaCopia.nombre = "María";

console.log("Original:", persona.nombre);
console.log("Copia:", personaCopia.nombre);

// Object.assign
const personaCopia2 = Object.assign({}, persona);
console.log("Copia con assign:", personaCopia2);

// 13. Combinar objetos
console.log("\n--- Combinar objetos ---");

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const obj3 = { e: 5 };

const combinado = { ...obj1, ...obj2, ...obj3 };
console.log("Combinado:", combinado);

// Sobreescribir propiedades
const base = { nombre: "Base", valor: 100 };
const modificado = { ...base, valor: 200, nuevo: true };
console.log("Modificado:", modificado);

// 14. Shorthand properties (ES6)
console.log("\n--- Shorthand properties ---");

const nombre = "Luis";
const edad = 28;

// Antes
const persona1 = { nombre: nombre, edad: edad };

// Ahora (shorthand)
const persona2 = { nombre, edad };

console.log("persona1:", persona1);
console.log("persona2:", persona2);

// 15. Computed property names
console.log("\n--- Computed property names ---");

const campo = "telefono";
const valor = "123456789";

const contacto = {
    nombre: "Pedro",
    [campo]: valor, // Nombre de propiedad dinámico
    [`${campo}Secundario`]: "987654321"
};

console.log("Contacto:", contacto);

// 💡 Resumen
console.log("\n💡 RESUMEN:");
console.log("- Objetos almacenan pares clave-valor");
console.log("- Acceso con punto o corchetes");
console.log("- Métodos son funciones dentro de objetos");
console.log("- 'this' hace referencia al objeto");
console.log("- Spread operator para copiar/combinar");
