'use strict';

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)
  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/
function createNode(value) {
   return {
     value,
     left: null,
     right: null,
   };
 }
 
 function createBinarySearchTree(value) {
   const tree = createNode(value);
 
   function size(node) {
     if (!node) {
       return 0;
     }
 
     const leftSize = node.left ? size(node.left) : 0;
     const rightSize = node.right ? size(node.right) : 0;
 
     return 1 + leftSize + rightSize;
   }
 
   function insert(node, value) {
     if (value < node.value) {
       if (!node.left) {
         node.left = createNode(value);
       } else {
         insert(node.left, value);
       }
     } else if (value > node.value) {
       if (!node.right) {
         node.right = createNode(value);
       } else {
         insert(node.right, value);
       }
     }
   }
 
   function contains(node, value) {
     if (!node) {
       return false;
     }
 
     if (value === node.value) {
       return true;
     }
 
     if (value < node.value) {
       return contains(node.left, value);
     } else if (value > node.value) {
       return contains(node.right, value);
     }
 
     return false;
   }
 
   function depthFirstForEach(node, callback, order = 'in-order') {
     if (order === 'pre-order') {
       callback(node.value);
     }
 
     if (node.left) {
       depthFirstForEach(node.left, callback, order);
     }
 
     if (order === 'in-order') {
       callback(node.value);
     }
 
     if (node.right) {
       depthFirstForEach(node.right, callback, order);
     }
 
     if (order === 'post-order') {
       callback(node.value);
     }
   }
 
   function breadthFirstForEach(node, callback) {
     const queue = [node];
 
     while (queue.length > 0) {
       const current = queue.shift();
       callback(current.value);
 
       if (current.left) {
         queue.push(current.left);
       }
 
       if (current.right) {
         queue.push(current.right);
       }
     }
   }
 
   return {
     size: () => size(tree),
     insert: (value) => insert(tree, value),
     contains: (value) => contains(tree, value),
     depthFirstForEach: (callback, order = 'in-order') =>
       depthFirstForEach(tree, callback, order),
     breadthFirstForEach: (callback) => breadthFirstForEach(tree, callback),
   };
 }

 const bst = createBinarySearchTree(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);
bst.insert(12);
bst.insert(20);

console.log(bst.size()); // Retorna 6
console.log(bst.contains(7)); // Retorna true
console.log(bst.contains(8)); // Retorna false

console.log('In-order:');
bst.depthFirstForEach((value) => console.log(value)); // Imprime en orden ascendente
console.log('Pre-order:');
bst.depthFirstForEach((value) => console.log(value), 'pre-order'); // Imprime en pre-order
console.log('Post-order:');
bst.depthFirstForEach((value) => console.log(value), 'post-order'); // Imprime en post-order

console.log('Breadth-first:');
bst.breadthFirstForEach((value) => console.log(value)); // Imprime por niveles

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   BinarySearchTree,
};
