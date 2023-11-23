// Suma de elementos
function sumarElementos(arreglo) {
    let suma = 0;
    for (let i = 0; i < arreglo.length; i++) {
      suma += arreglo[i]; //suma = suma + arreglo[1]
    }
    return suma;
  }
const listaNumeros = [1, 4, 6, 2, 4];
const resultado = sumarElementos(listaNumeros);
console.log(`La suma de los elementos del array es: ${resultado}`);

// Encontrar el número más grande en un array de números:
function encontrarNumero(arreglo) {
    if (arreglo.length === 0) {
      return undefined;
    }
  
    let numeroMasGrande = arreglo[0];
    for (let i = 1; i < arreglo.length; i++) {
      if (arreglo[i] > numeroMasGrande) {
        numeroMasGrande = arreglo[i];
      }
    }
    return numeroMasGrande;
  }

const numeroMasGrande = encontrarNumero(listaNumeros);
console.log(`El número más grande es: ${numeroMasGrande}`);

// Encontrar elementos pares
function encontrarPares(arreglo) {
    return arreglo.filter(numero => numero % 2 === 0);
  } 

const numeroPar = encontrarPares(listaNumeros);
console.log(`Los numeros pares son: ${numeroPar}`)

// Elementos unicos
function eliminarDuplicados(arreglo) {
    const nuevoArreglo = [];
    if (arreglo.length === 0) {
        return undefined;
      }
    for (let i = 0; i < arreglo.length; i++) {
        if (nuevoArreglo.indexOf(arreglo[i]) == -1) {
          nuevoArreglo.push(arreglo[i])
        }
      }
    return nuevoArreglo;
  }

const nuevoArreglo = eliminarDuplicados(listaNumeros)
console.log(`La nueva lista sin duplicados: ${nuevoArreglo}`)

// Contar elemento
  function contarElemento(arreglo, elemento) {
    let contador = 0;
    
    for (let i = 0; i < arreglo.length; i++) {
      if (arreglo[i] === elemento) {
        contador++;
      }
    }
    
    return contador;
  }

const elementoABuscar = 4;
const cantidad = contarElemento(listaNumeros, elementoABuscar);
console.log(`El elemento ${elementoABuscar} aparece ${cantidad} veces.`);
  
// Combinar arreglos sin duplicados
  function combinarArrays(arreglo1, arreglo2){
    const arrayCombinado = arreglo1.concat(arreglo2);
    return eliminarDuplicados(arrayCombinado)
  }

const listaNumeros2 = [2, 3, 5, 6, 7];
arregloCombinadoSinDobles = combinarArrays(listaNumeros, listaNumeros2)
console.log(`La nueva lista combinada sin duplicados: ${arregloCombinadoSinDobles}`)

// Ordenar arreglo de forma ascendente y descendente  
  function ordenarAsc(arreglo) {
    for (let i = 0; i < arreglo.length -1; i++){
      for (let j = 0; j < arreglo.length - i - 1; j++) {
        if (arreglo[j] > arreglo[j + 1]) { 
            const mayor = arreglo[j];
            arreglo[j] = arreglo[j + 1];
            arreglo[j + 1] = mayor;
          }
        }
      }
    return arreglo;
  }
  function ordenarDesc(arreglo){
    for (let i = 0; i < arreglo.length -1; i++){
      for (let j = 0; j < arreglo.length - i - 1; j++) {
        if (arreglo[j] < arreglo[j + 1]) { 
            const menor = arreglo[j];
            arreglo[j] = arreglo[j + 1];
            arreglo[j + 1] = menor;
          }
        }
      }
    return arreglo;
  }

const ascendente = ordenarAsc(arregloCombinadoSinDobles);
console.log("Orden ascendente:", ascendente);
const descendente = ordenarDesc(arregloCombinadoSinDobles);
console.log("Orden descendente:", descendente);

// Suma de matrices
  function sumarMatrices(matriz1, matriz2) {
    if (matriz1.length !== matriz2.length || matriz1[0].length !== matriz2[0].length) {
      return "Las matrices deben tener las mismas dimensiones para sumarse.";
    }

    const resultado = [];

    for (let i = 0; i < matriz1.length; i++) {
      resultado[i] = [];
      for (let j = 0; j < matriz1[i].length; j++) {
        resultado[i][j] = matriz1[i][j] + matriz2[i][j];
      }
    }
    return resultado;
  }

const matriz1 = [[1, 2], [3, 4]];
const matriz2 = [[5, 6], [7, 8]];
const matriz3 = sumarMatrices(matriz1, matriz2);
console.log("Resultado de la suma de matrices:", matriz3);

// Filtrar un arreglo por longitud
  function filtrarLongitud(arreglo, longitud) {
    return arreglo.filter(elemento => elemento.length === longitud);
  }

const listaDeFruta = ["manzana", "pera", "kiwi", "naranja"];
const longitud = 4;
const elementoFiltrado = filtrarLongitud(listaDeFruta, longitud);
console.log(`Elementos con longitud ${longitud}:`, elementoFiltrado);

// Revertir orden
  function invertir(arreglo) {
    const arregloInvertido = arreglo.slice().reverse();
    return arregloInvertido;
}

const arregloInvertido = invertir(listaNumeros);
console.log("Arreglo invertido:", arregloInvertido)

// Arrays combinados y ordenados




  
  