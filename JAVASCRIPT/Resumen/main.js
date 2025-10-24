const data = {
	"id": 2,
	"name": "Ivysaur",
	types: [
		{
			type: {
				name: "grass"
			}
		},
		{
			type: {
				name: "poison"
			}
		}
	]
}

//Desestructuración - Desestructuring assignment

const { id, name, sprites: { front_default: sprite } } = data;
const types = data.types.map(type => type?.type?.name);

return { id, name, sprite, types };


function division(num, div) {
	return num / div;
}
const result = division(2, 3);

const dividir = {
	num: 2,
	div: 3,
}
function division({ num, div }) {
	return num / div;
}

//Default Parameters - Permite definir valores por defecto para los parámetros de una

const greet = (name = "invitado") => `Hola, ${name}`;
console.log(greet()); // Salida: Hola, invitado
console.log(greet("Luis")); // Salida: Hola, Luis

//Spread Operators
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [...arr1, 6, 7, 8, 9, 10]

const obj1 = {
	a: "a",
	b: "b",
	c: "c",
}
const obj2 = {
	d: "d",
	e: "e",
}
const nuevoObjeto = { ...obj1, ...obj2 }

console.log(nuevoObjeto); // Salida: { a: 'a', b: 'b', c: 'c', d: 'd', e: 'e'}

//Rest Parameters

const [, dos, tres, , ...residuo] = [10, 20, 30, 40, 50, 60]; // residuo = [50, 60]

const obj3 = {
	a: "a",
	b: "b",
	c: "c",
}
const { a: primer, ...rest } = obj3;


// Modules - EXPORTAR E IMPORTAR

//Archivo math.js :
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;
const hidden = () => console.log("Esta función no está disponible desde el exterior");

//Archivo app.js :
import { add, subtract } from './math.js';
console.log(add(5, 3)); // Salida: 8

// Ternary Operator

const age = 18;
const message = age >= 18 ? "Adulto" : "Menor";
console.log(message); // Salida: Adulto

//Array Methods

	//map(devuelve un nuevo arreglo sin modificar el original y del mismo tamaño):
const numbers = [1, 2, 3];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // Salida: [2, 4, 6]
// Otro ejemplo con arreglo de objetos
const tasks = [
	{ name: 'Write an article for my blog', duration: 120 },
	{ name: 'Work out', duration: 60 },
	{ name: 'Procrastinate on the sofa', duration: 240 }
];
const taskNames = tasks.map((task) => task.name);

console.log(taskNames); // Output: ["Write an article for my blog", "Work out", "Procrastinate on the sofa"]


//Promises, Async/Await


// Optional Chaining ( ?. ):
const user = { profile: { name: "Sara" } };
const namee = user?.profile?.name
console.log(namee); // Salida: Sara
console.log(user?.address?.street); // Salida: undefined

// Nullish Coalescing Operator ( ?? ):
const value = null;
const resul = value ?? "Valor por defecto";
console.log(resul); // Salida: Valor por defecto
// Otro ejemplo
function suma (a, b) {
a = a ?? 0;
b = b ?? 0;
return a + b;
}