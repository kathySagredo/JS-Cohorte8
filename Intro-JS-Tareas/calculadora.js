//función para sumar
function sumar(a,b){
    return a + b;
}

//función para restar
function restar(a,b){
    return a - b;
}

//función para multiplicar
function multiplicar(a,b){
    return a * b;
}

// función para dividir => si b es distinto a cero ejecuta la división, caso contrario no.
function dividir(a,b){
    if(b !== 0){
        return a / b;
    } else {
        return "Error: No se puede dividir por cero"
    }
}

//función principal de la calculadora

function calculadora(a,b,operacion){
    switch (operacion) {
        case "sumar":
            return sumar(a,b);
        case "restar":
            return restar(a,b);
        case "multiplicar":
            return multiplicar(a,b);
        case "dividir":
            return dividir(a,b);
        default:
            return "Operación no valida";
}}

const numero1 = parseFloat(prompt("ingrese el primer número:"));
const numero2 = parseFloat(prompt("ingrese el segundo número:"));
const operacionInput = prompt("Ingrese la operación: sumar, restar, multiplicar y dividir.");

const resultado = calculadora(numero1,numero2,operacionInput) 
console.log(`El resultado de la operación es: ${resultado}`) 