'use strict';

/* EJERCICIO 1
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback. En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true. 
  EJEMPLO 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/
function Node(value) {
  return {
    value: value,
    next: null,
  };
}

function LinkedList() {
  const list = {
    head: null,
  };

  function add(value) {
    const newNode = Node(value);
    if (!list.head) {
      list.head = newNode;
    } else {
      let current = list.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  function remove() {
    if (!list.head) {
      return null;
    }

    let removedValue;
    if (!list.head.next) {
      // Caso particular: solo hay un nodo en la lista
      removedValue = list.head.value;
      list.head = null;
    } else {
      let current = list.head;
      while (current.next && current.next.next) {
        current = current.next;
      }
      removedValue = current.next.value;
      current.next = null;
    }

    return removedValue;
  }

  function search(param) {
    if (!list.head) {
      return null;
    }

    let current = list.head;
    while (current) {
      if (typeof param === 'function' && param(current.value)) {
        return current.value;
      } else if (param === current.value) {
        return current.value;
      }
      current = current.next;
    }

    return null;
  }

  return {
    add,
    remove,
    search,
  };
}

const linkedList = LinkedList();
linkedList.add(1);
linkedList.add(2);
linkedList.add(3);

console.log(linkedList.search(2)); // Retorna 2
console.log(linkedList.search(value => value % 2 === 0)); // Retorna 2 (número par)
console.log(linkedList.remove()); // Elimina el último nodo (con valor 3) y retorna 3

/* EJERCICIO 2
Implementar la clase HashTable.
Nuetra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores, o casilleros; es decir, posiciones posibles para almacenar la información), donde guardaremos datos en formato clave-valor (por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). (Luego de haber pasado todos los tests, a modo de ejercicio adicional, pueden modificar un poco la clase para que reciba la cantidad de buckets por parámetro al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input alfabético, suma el código numérico de cada caracter del input (investigar el método charCodeAt de los strings) y calcula el módulo de ese número total por la cantidad de buckets; de esta manera determina la posición de la tabla en la que se almacenará el dato.
  - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash, y almacena todo el conjunto en el bucket correcto.
  - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.
  - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, con hasKey, si ya hay algo en la tabla con el nombre 'instructora'; luego, invocando set('instructora', 'Ani'), se almacenará el par clave-valor en un bucket específico (determinado al hashear la clave)
*/
function createHashTable() {
  const numBuckets = 35;
  const buckets = new Array(numBuckets).fill(null).map(() => []);

  function hash(key) {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i);
    }
    return total % numBuckets;
  }

  function set(key, value) {
    const index = hash(key);
    const bucket = buckets[index];

    for (let i = 0; i < bucket.length; i++) {
      const [storedKey, storedValue] = bucket[i];
      if (storedKey === key) {
        // La clave ya existe, actualizamos el valor
        bucket[i] = [key, value];
        return;
      }
    }

    // La clave no existe, la agregamos al bucket
    bucket.push([key, value]);
  }

  function get(key) {
    const index = hash(key);
    const bucket = buckets[index];

    for (let i = 0; i < bucket.length; i++) {
      const [storedKey, storedValue] = bucket[i];
      if (storedKey === key) {
        // La clave existe, retornamos el valor asociado
        return storedValue;
      }
    }

    // La clave no existe en la tabla
    return undefined;
  }

  function hasKey(key) {
    const index = hash(key);
    const bucket = buckets[index];

    for (let i = 0; i < bucket.length; i++) {
      const [storedKey, storedValue] = bucket[i];
      if (storedKey === key) {
        // La clave existe en la tabla
        return true;
      }
    }

    // La clave no existe en la tabla
    return false;
  }

  return {
    set,
    get,
    hasKey,
  };
}

const myHashTable = createHashTable();
myHashTable.set('instructora', 'Ani');
console.log(myHashTable.hasKey('instructora')); // Retorna true
console.log(myHashTable.get('instructora')); // Retorna 'Ani'
console.log(myHashTable.hasKey('otraClave')); // Retorna false

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   Node,
   LinkedList,
   HashTable,
};
