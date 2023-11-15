'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:

  function factorear(num) {
    const factores = [];
    let divisor = 2;
  
    while (num > 1) {
      while (num % divisor === 0) {
        factores.push(divisor);
        num /= divisor;
      }
      divisor++;
    }
  
    return factores;
  }
  const resultado = factorear(180);
console.log(resultado);

}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  function bubbleSort(array) {
    const n = array.length;
  
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - 1 - i; j++) {
        if (array[j] > array[j + 1]) {
          // Intercambiar elementos si están en el orden incorrecto
          const temp = array[j];
          array[j] = array[j + 1];
          array[j + 1] = temp;
        }
      }
    }
  
    return array;
  }
  const arrayDesordenado = [64, 34, 25, 12, 22, 11, 90];
  const arrayOrdenado = bubbleSort(arrayDesordenado.slice());
  console.log(arrayOrdenado);

}


function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:

  function insertionSort(array) {
    const n = array.length;
  
    for (let i = 1; i < n; i++) {
      const current = array[i];
      let j = i - 1;
  
      while (j >= 0 && array[j] > current) {
        array[j + 1] = array[j];
        j--;
      }
  
      array[j + 1] = current;
    }
  
    return array;
  }
  const arrayDesordenado = [48, 25, 36, 1, 538, 112, 1190];
  const arrayOrdenado = insertionSort(arrayDesordenado.slice());
  console.log(arrayOrdenado);

}


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:

  function selectionSort(array) {
    const n = array.length;
  
    for (let i = 0; i < n - 1; i++) {
      let minIndex = i;
  
      for (let j = i + 1; j < n; j++) {
        if (array[j] < array[minIndex]) {
          minIndex = j;
        }
      }
  
      if (minIndex !== i) {
        // Intercambiar elementos si el mínimo no está en su posición actual
        const temp = array[i];
        array[i] = array[minIndex];
        array[minIndex] = temp;
      }
    }
  
    return array;
  }
  const arrayDesordenado = [22, 21, 782, 655, 19, 239, 1];
const arrayOrdenado = selectionSort(arrayDesordenado.slice());
console.log(arrayOrdenado);

}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
