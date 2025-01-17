'use strict';

/*
Definir las funciones recursivas nFactorial y nFibonacci.

nFactorial(n) debe retornar el factorial de n sabiendo que, siendo n un número natural, su factorial (representado como n!) es el producto de n por todos los números naturales menores que él y mayores a 0. Ejemplo: 5! = 5 * 4 * 3 * 2 * 1

nFibonacci(n) debe retornar el enésimo número de la secuencia de Fibonacci, tomando al 0 y al 1, respectivamente, como primer y segundo elementos de la misma, y sabiendo que cualquier elemento que se agregue a esta secuencia será el resultado de la suma del último elemento y el anterior.
Ejemplo: nFibonacci(7) retornará 13, ya que 13 es el dígito que está en la posición 7 de la secuencia.

Secuencia:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ... 


Como ejercicio adicional y completamente opcional, al terminar de resolver este problema pueden intentar definir funciones que logren los mismos resultados pero de manera iterativa.
*/

function nFactorial(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * nFactorial(n - 1);
  }
}

console.log(nFactorial(5));



function nFibonacci(n) {
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else {
    return nFibonacci(n - 1) + nFibonacci(n - 2);
  }
}

console.log(nFibonacci(7));

// FUNCIONES ITERATIVAS

function factorialIterativo(n) {
  if (n === 0) {
    return 1;
  }
  let resultado = 1;
  for (let i = 1; i <= n; i++) {
    resultado *= i;
  }
  return resultado;
}

console.log(factorialIterativo(5));



function fibonacciIterativo(n) {
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  let prev = 0;
  let curr = 1;
  for (let i = 2; i <= n; i++) {
    let temp = curr;
    curr = prev + curr;
    prev = temp;
  }
  return curr;
}
console.log(fibonacciIterativo(7));

/*
Implementar la clase Queue, sabiendo que es una estructura de tipo FIFO, donde el primer elemento que ingresa es el primero que se quita. Definir los siguientes métodos:
  - enqueue: agrega un valor respetando el orden.
  - dequeue: remueve un valor respetando el orden. Retorna undefined cuando la queue está vacía.
  - size: retorna el tamaño (cantidad de elementos) de la queue.

Pueden utilizar class o función constructora.
*/

function Queue() {
  this.elements = [];
}

Queue.prototype.enqueue = function(value) {
  this.elements.push(value);
};

Queue.prototype.dequeue = function() {
  if (this.elements.length === 0) {
    return undefined;
  }
  return this.elements.shift();
};

Queue.prototype.size = function() {
  return this.elements.length;
};
let myQueue = new Queue();
myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);
console.log(myQueue.dequeue());
console.log(myQueue.size());

/*⚠️ No modificar nada debajo de esta línea ⚠️*/
module.exports = {
   Queue,
   nFactorial,
   nFibonacci,
};
