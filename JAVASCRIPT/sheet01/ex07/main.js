// EX07: Switch

console.log("=== SWITCH ===\n");

// Switch básico
const diaSemana = 3;
console.log(`Día número: ${diaSemana}`);

switch (diaSemana) {
    case 1:
        console.log("Lunes");
        break;
    case 2:
        console.log("Martes");
        break;
    case 3:
        console.log("Miércoles");
        break;
    case 4:
        console.log("Jueves");
        break;
    case 5:
        console.log("Viernes");
        break;
    case 6:
        console.log("Sábado");
        break;
    case 7:
        console.log("Domingo");
        break;
    default:
        console.log("Día no válido");
}

// Switch con múltiples casos
console.log("\n--- Múltiples casos ---");
const mes = "Febrero";
console.log(`Mes: ${mes}`);

switch (mes) {
    case "Enero":
    case "Marzo":
    case "Mayo":
    case "Julio":
    case "Agosto":
    case "Octubre":
    case "Diciembre":
        console.log("Este mes tiene 31 días");
        break;
    case "Abril":
    case "Junio":
    case "Septiembre":
    case "Noviembre":
        console.log("Este mes tiene 30 días");
        break;
    case "Febrero":
        console.log("Este mes tiene 28/29 días");
        break;
    default:
        console.log("Mes no válido");
}

// Switch con strings
console.log("\n--- Switch con operaciones ---");
const operacion = "+";
const num1 = 10;
const num2 = 5;

let resultado;

switch (operacion) {
    case "+":
        resultado = num1 + num2;
        console.log(`${num1} + ${num2} = ${resultado}`);
        break;
    case "-":
        resultado = num1 - num2;
        console.log(`${num1} - ${num2} = ${resultado}`);
        break;
    case "*":
        resultado = num1 * num2;
        console.log(`${num1} * ${num2} = ${resultado}`);
        break;
    case "/":
        resultado = num1 / num2;
        console.log(`${num1} / ${num2} = ${resultado}`);
        break;
    default:
        console.log("Operación no válida");
}

// ⚠️ Cuidado: Sin break, se ejecutan todos los casos siguientes
console.log("\n--- ⚠️ Sin break (fall-through) ---");
const opcion = 2;

switch (opcion) {
    case 1:
        console.log("Caso 1");
        // Sin break!
    case 2:
        console.log("Caso 2");
        // Sin break!
    case 3:
        console.log("Caso 3");
        break;
    default:
        console.log("Default");
}
console.log("↑ Se ejecutan el caso 2 y 3 por falta de break");
