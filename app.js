// Pedir los dos números al usuario
let num1 = parseFloat(prompt("Ingrese el primer número:"));
let num2 = parseFloat(prompt("Ingrese el segundo número:"));

// Pedir al usuario la operación que desea realizar
let operacion = prompt("¿Qué operación desea realizar? (+, -, *, /)");

// Evaluar la operación usando estructura if...else
if (operacion === "+") {
    let resultado = num1 + num2;
    alert("El resultado de la suma es: " + resultado);
} else if (operacion === "-") {
    let resultado = num1 - num2;
    alert("El resultado de la resta es: " + resultado);
} else if (operacion === "*") {
    let resultado = num1 * num2;
    alert("El resultado de la multiplicación es: " + resultado);
} else if (operacion === "/") {
    if (num2 !== 0) {
        let resultado = num1 / num2;
        alert("El resultado de la división es: " + resultado);
    } else {
        alert("Error: No se puede dividir por cero.");
    }
} else {
    alert("Operación no válida. Por favor, use +, -, * o /");
}
