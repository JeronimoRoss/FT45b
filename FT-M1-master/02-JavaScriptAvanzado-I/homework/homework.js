Scope & Hoisting
x = 1;
var a = 5;
var b = 10;
var c = function (a, b, c) {
   var x = 10;
   console.log(x); // IMPRIMIRÁ 10. LA FUNCIÓN 'c' SE DECLARA Y EJECUTA CON ARGUMENTOS 8, 9 Y 10 RESPECTIVAMENTE. DENTRO DE 'c', 'var x = 10', CREA UNA VARIABLE LOCAL 'x' CON VALOR 10. POR ENDE, AL 'CONSOLOGUEAR' SE IMPRIME EL VALOR LOCAL DE 'x', QUE ES 10
   console.log(a); // IMPRIMIRÁ 8. EN ESTE CASO, SE VA A IMPRIMIR EL VALOR DEL ARGUMENTO 'a', QUE ES DE 8.
   var f = function (a, b, c) {
      b = a;
      console.log(b); // IMPRIMIRÁ 8. EN ESTE CASO, LA FUNCIÓN 'f' SE DECLARA Y EJECUTA CON ARGUMENTOS 8, 10 y 10 RESPECTIVAMENTE. POR ENDE CUANDO SEÑALAMOS QUE 'b = a' ESTAMOS ASIGNANDO EL VALOR DE 'a' (8) a 'b'.
      b = c;
      var x = 5;
   };
   f(a, b, c);
   console.log(b); // IMPRIMIRÁ 10. ESTO SE DEBE A QUE PREVIAMENTE FUE SEÑALADO QUE 'b = c;' ASIGNANDO ASI EL VALOR DE 'c' (10) a 'b'. POR ENDE, CUANDO CONSOLOGUEAMOS, EL VALOR RETORNADO ES EL DE 'b' QUE FUE PREVIAMENTE MODIFICADO DENTRO DE LA FUNCIÓN 'f'.
};
c(8, 9, 10);
console.log(b); // IMPRIMIRÁ 10. ESTO SE DEBE A QUE EL VALOR DE 'b' FUE MODIFICADO DENTRO DE LA FUNCIÓN 'c'.
console.log(x); // IMPRIMIRÁ 1, YA QUE 'x' ES UNA VARIABLE GLOBAL Y NO FUE MODIFICADA EN LAS FUNCIONES ANTERIORES.


javascript
console.log(bar); // IMPRIMIRÁ UNDEFINED. ESTO SE DEBE A QUE 'bar' ESTÁ DECLARADO COMO UNA VARIABLE (var), y la misma está elevada en el "L.E"- ES DECIR, ESTÁ HOISTEADA- PERO AUN NO TIENE NINGÚN VALOR ASIGNADO.
console.log(baz); // RETORNARÁ ERROR. SUCEDE YA QUE 'baz' NO ESTÁ DEFINIDA DENTRO DE LA FUNCIÓN NI CON 'var' ni con 'let'. ESTO NOS PRODUCE EL LLAMADO "REFERENCE ERROR: NOT DEFINED".
foo();
function foo() {
   console.log('Hola!'); // IMPRIMIRÁ 'HOLA!', PORQUE LA FUNCIÓN 'foo' ESTÁ HOISTEADA Y SE PUEDE LLAMAR ANTES DE SU DECLARACIÓN.
}
var bar = 1; // SE ASIGNA EL VALOR 1 A 'bar'. ESTÁ DECLARANDO E INICIALIZANDO UNA VARIABLE GLOBAL 'bar' CON VALOR DE 1.
baz = 2; // SE ASIGNA EL VALOR 2 A 'baz'. SE CREÓ UNA VARIABLE GLOBAL 'baz' Y SE LE ASIGNÓ UN VALOR DE 2, DEBIDO A LA FALTA DE 'var, 'let' o 'const'.
``

javascript
var instructor = 'Tony';
if (true) {
   var instructor = 'Franco'; // LA VARIABLE INSTRUCTOR SE SOBREESCRIBE CON VALOR 'Franco'
}
console.log(instructor); // IMPRIMIRÁ 'Franco'. 'var instructor = 'Tony';', DECLARA E INICIALIZA UNA VARIABLE GLOBAL 'instructor' CON EL VALOR 'Tony'. SEGUIDAMENTE, DENTRO DEL BLOQUE 'if', 'var instructor = 'Franco'; SE ESTÁ SOBREESCRIBIENDO LA VARIABLE GLOBAL 'instructor' CON EL VALOR DE 'Franco'. AL CONSOLOGUEAR, LA CONSOLA RETORNARÁ 'Franco', YA QUE LA VARIABLE GLOBAL FUE MODIFICADA DENTRO DEL BLOQUE 'if'.
````

javascript
var instructor = 'Tony';
console.log(instructor); // IMPRIMIRÁ 'Tony'. EN ESTE CASO, 'var instructor = 'Tony';', DECLARA E INCIALIZA UNA VARIABLE GLOBAL 'instructor', CON EL VALOR 'Tony'. 
(function () {
   if (true) {
      var instructor = 'Franco'; // LA VARIABLE 'instructor' DENTRO DE LA FUNCIÓN SE SOBREESCRIBE CON VALOR 'Franco'
      console.log(instructor); // IMPRIMIRÁ 'Franco', PORQUE LA VARIABLE LOCAL DENTRO DE LA FUNCIÓN ANÓNIMA 'var instructor = 'Franco'; SOBREESCRIBE LA VARIABLE LOCAL 'instructor' CON VALOR 'Franco'. ESTO HACE QUE, AL CONSOLOGUEAR, EL VALOR 'Franco' SEA EL QUE RETORNE PORQUE LA VARIABLE LOCAL DENTRO DE LA FUNCIÓN TIENE PRECEDENCIA SOBRE LA VARIABLE GLOBAL CON EL MISMO NOMBRE. 
   }
})();
console.log(instructor); // IMPRIMIRÁ 'Tony'. FUERA DE LA FUNCIÓN ANÓNIMA, EL CONSOLOGUEO IMPRIME 'Tony', YA QUE LA VARIABLE GLOBAL NO SE MODIFICÓ DENTRO DE LA FUNCIÓN ANÓNIMA. 



var instructor = 'Tony'; // ESTO DECLARA E INICIALIZA UNA VARIABLE GLOBAL 'instructor' CON EL VALOR 'Tony'.
let pm = 'Franco'; // DECLARA E INICIALIZA UNA VARIABLE LOCAL 'pm' CON EL VALOR DE 'Franco'.
if (true) {
   var instructor = 'The Flash'; // LA VARIABLE 'instructor' SE SOBREESCRIBE CON VALOR 'The Flash'
   let pm = 'Reverse Flash'; // SE CREA UNA NUEVA VARIABLE LOCAL 'pm' EN EL BLOQUE if
   console.log(instructor); // IMPRIMIRÁ 'The Flash'. ESTO SE DEBE A QUE LA VARIABLE GLOBAL 'instructor' SE MODIFICÓ DENTRO DEL BLOQUE 'if'.
   console.log(pm); // IMPRIMIRÁ 'Reverse Flash'. ESTO SE DEBE A QUE LA VARIABLE LOCAL 'pm' DENTRO DEL BLOQUE 'if' TIENE PRECEDENCIA SOBRE LA VARIABLE LOCAL FUERA DEL BLOQUE.
}
console.log(instructor); // IMPRIMIRÁ 'The Flash'. FUERA DEL BLOQUE 'if', 'console.log(instructor);' IMPRIME EL RESULTADO PREVIAMENTE SEÑALADO YA QUE LA VARIABLE GLOBAL SE MODIFICÓ DENTRO DEL BLOQUE 'if'.
console.log(pm); // RETORNARÁ ERROR. ESTO SE DEBE A QUE 'pm' ESTÁ DEFINIDA CON 'let' Y SU SCOPE ESTÁ LIMITADO AL BLOQUE 'if'.

coercion de datos

6 / "3" // EN ESTE CASO, EL RESULTADO DE LA OPERACIÓN SERÁ DE '2', YA QUE JAVASCRIPT CONVIERTE LA CADENA (STRING) "3" A NUMBER (3), ANTES DE REALIZAR LA OPERACIÓN ASIGNADA.
"2" * "3" // EL RESULTADO EN ESTE CASO ES DE '6', YA QUE JAVASCRIPT EN ESTE CASO REALIZA EL MISMO PROCESO QUE EN LA OPERACIÓN ANTERIOR.
4 + 5 + "px" // EL RESULTADO ES '"9px"', YA QUE PRIMERO SE REALIZA LA SUMA DE LOS NÚMEROS, Y LUEGO SE CONCATENA LA STRING "px" AL RESULTADO NUMÉRICO CONVERTIDO A STRING.
"$" + 4 + 5 // EN ESTE CASO JAVASCRIPT CONVIERTE LOS NÚMEROS 4 Y 5 A STRINGS Y LUEGO LOS CONCATENA CON LA STRING "$". EL RESULTADO SERÁ '"$45"'.
"4" - 2 // EL RESULTADO ES DE '2', YA QUE JAVASCRIPT CONVIERTE LA CADENA "4" A NÚMERO ANTES DE REALIZAR LA RESTA.
"4px" - 2 // EN ESTE CASO LA STRING "4px" NO SE PUEDE CONVERTIR A UN NÚMERO VÁLIDO PARA REALIZAR LA RESTA. POR ESTE MOTIVO EL RESULTADO SERA 'NaN' (Not a Number).
7 / 0 // JAVASCRIPT INTERPRETA AL '0' COMO UN NÚMERO INFINITO CUANDO SE UTILIZA COMO EL DIVISOR DE LA OPERACIÓN. POR ESTE MOTIVO, EL RESULTADO DE LA OPERACIÓN SERÁ 'Infinity'.
{}[0] // JAVASCRIPT INTERPRETA LAS LLAVES ({}) COMO UN BLOQUE DE CÓDIGO, NO COMO UN OBJETO LITERAL. POR ESTE MOTIVO, EL RESULTADO ARROJADO SERÁ 'undefined'.
parseInt("09") // EL RESULTADO ES DE '9', YA QUE 'parseInt' CONVIERTE UNA STRING EN UN NUMERO ENTERO Y OMITE EL '0' INICIAL.
5 && 2 // EL RESULTADO EN ESTE CASO ES '2', YA QUE EL OPERADOR '&&' DEVUELVE EL ÚLTIMO VALOR EVALUADO, SI TODOS LOS VALORES SON VERDADEROS. EN ESTE CASO, AMBOS SON VERDADEROS Y EL ÚLTIMO VALOR ES '2', POR LO TANTO ES ES EL RESULTADO.
2 && 5 // EN ESTE CASO SE CUMPLE EL MISMO CASO DE LA OPERACIÓN ANTERIOR PERO DE MANERA INVERSA, POR LO QUE EL RESULTADO ES DE '5'.
5 || 0 // EL RESULTADO ES DE '5', YA QUE EL OPERADOR '||' DEVUELVE EL PRIMER VALOR VERDADERO QUE ENCUENTRA. EN ESTE CASO, '5' ES VERDADERO Y POR ESTO ES EL RESULTADO.
0 || 5 // EL RESULTADO ES DE '5', YA QUE OCURRE LO MISMO QUE EN EL CASO ANTERIOR, CON LA DIFERENCIA DE QUE EL PRIMER VALOR ES DE '0' Y '0' NO ES UN VALOR VERDADERO, POR LO QUE JAVASCRIPT AUTOMÁTICAMENTE TOMA COMO RESULTADO EL SIGUIENTE VALOR VERDADERO, QUE ES DE '5'.
[3]+[3]-[10] // EL RESULTADO ES DE '23'. ESTO SE DEBE A QUE, PRIMERAMENTE, JAVASCRIPT CONCATENARÁ LAS DOS PRIMERAS MATRICES COMO CADENAS, RESULTANDO EN '33'. ACTO SEGUIDO, SE CONVIERTE A NÚMEROS PARA LA RESTA, DANDO COMO RESULTADO FINAL '23'.
3>2>1 // EL RESULTADO EN ESTE CASO ES 'false'. ÉSTA EXPRESIÓN SE EVALÚA COMO '(3 > 2) > 1', ESTO ES DECIR 'true > 1', LO CUAL ES 'false'.
[] == ![] // EL RESULTADO EN ESTE CASO ES 'true'. ESTO SE DEBE A QUE '![]' SE EVALÚA COMO 'false'; y '[]' SE EVALÚA COMO 'false', EN EL CONTEXTO DE UNA EXPRESIÓN BOOLEANA. DICHO ESTO, NOS RESULTA QUE 'false == false' DA COMO RESULTADO 'true'.

Hoisting

function test() {
    console.log(a);
    console.log(foo());
 
    var a = 1;
    function foo() {
       return 2;
    }
 }
 
 test(); // EL OUTPUT SERÁ 'undefined' y '2'. EN EL CASO DEL CÓDIGO PREVIAMENTE PROPORCIONADO, LA FUNCIÓN 'test' INTENTA IMRPIMIR EL VALOR DE LA VARIABLE 'a' Y EL RESULTADO DE LA FUNCIÓN 'foo()'. LAS DECLARACIONES DE VARIABLES CON 'var' Y FUNCIONES SON ELEVADAS AL PRINCIPIO DE SU CONTEXTO DE EJECUCIÓN. EN ESTE CASO, TANTO 'var a' COMO LA FUNCIÓN 'foo' SON ELEVADAS. AL PROCEDER CON LA EJECUCIÓN DEL CÓDIGO, 'console.log(a)' IMPRIMIRÁ 'undefined', YA QUE 'var a' ESTÁ DECLARADA, PERO AUN NO SE LE HA ASIGNADO UN VALOR HASTA EL MOMENTO. EN EL CASO DE 'console.log(foo())' LLAMA A LA FUNCIÓN 'foo()', QUE DEVOLVERÁ '2'. LA VARIABLE 'a' ES ELEVADA Y DECLARADA EN EL CONTEXTO DE LA FUNCIÓN 'test()', PERO SU VALOR SE INICIALIZA DESPUES DE LA PRIMERA LLAMADA A 'console.log(a)', POR LO QUE EN ESTE PUNTO ES 'undefined'. EN EL CASO DE LA FUNCIÓN 'foo()' SE PUEDE LLAMAR ANTES DE SU DECLARACIÓN DEBIDO AL HOISTING, Y LA MISMA DEVUELVE '2'.

 var snack = 'Meow Mix';

function getFood(food) {
   if (food) {
      var snack = 'Friskies';
      return snack;
   }
   return snack;
}

getFood(false); // EL OUTPUT RETORNADO ANTE SU EJECUCIÓN SERÁ 'Meow Mix'. EN EL CÓDIGO PREVIAMENTE DESCRITO, LA VARIABLE GLOBAL 'snack' FUE INICIALIZADA CON EL VALOR '"Meow Mix"'. ADEMÁS TAMBIÉN SE PUEDE VISUALIZAR LA FUNCIÓN 'getFood(food)', LA CUAL TOMA UN ARGUMENTO LLAMADO 'food'. AL DESGLOSAR EL CÓDIGO PASO A PASO, NOS ENCONTRAMOS CON QUE LA VARIABLE 'snack' SE DECLARA GLOBALMENTE Y LA FUNCIÓN 'getFood' TAMBIEN SE DECLARA. SIN EMBARGO, HAY QUE TENER EN CUENTA QUE LAS VARIABLES DECLARADAS CON 'var' TIENEN UN CARÁCTER DE FUNCIÓN Y NO DE BLOQUE. DICHO ESTO, AL EJECUTAR EL CÓDIGO, SE LLAMA A 'getFood(false)', PASANDO 'false' COMO ARGUMENTO. DENTRO DE LA FUNCIÓN 'getFood', HAY UNA VARIABLE LOCAL LLAMADA 'snack' QUE SE DECLARA CON 'var snack = 'Friskies';' DENTRO DEL BLOQUE CONDICIONAL. NO OBSTANTE, DEBIDO A LA DECLARACIÓN DE 'snack' DENTRO DE LA FUNCIÓN 'getFood', ÉSTA VARIABLE LOCAL TOMA PRECEDENCIA SOBRE LA VARIABLE GLOBAL 'snack' EN EL ÁMBITO DE LA FUNCIÓN. CUANDO SE EVALÚA EL CONDICIONAL 'if (food)', COMO 'food' ES 'false', EL BLOQUE DE CÓDIGO DENTRO DEL 'if' NO SE EJECUTA. LA FUNCIÓN ENTONCES RETORNA LA VARIABLE 'snack' LOCAL QUE ESTÁ DECLARA DENTRO DEL 'if', PERO COMO EL 'if' NO SE EJECUTA, LA VARIABLE 'snack' LOCAL NUNCA SE INICIALIZA. POR LO TANTO, 'snack' DENTRO DE LA FUNCIÓN 'getFood' ES 'undefined'. SI EL 'if' SE EJECUTARA, 'snack' DENTRO DE LA FUNCIÓN 'getFood' TENDRÍA EL VALOR DE '"Friskies"'. DEBIDO A QUE EL 'if' NO SE ESTÁ EJECUTANDO, LA FUNCIÓN DEVUELVE LA VARIABLE 'snack' GLOBAL, QUE ES '"Meow Mix"'.

This

var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function () {
         return this.fullname;
      },
   },
};

console.log(obj.prop.getFullname());

var test = obj.prop.getFullname;

console.log(test()); // EN EL CASO DEL CÓDIGO PREVIAMENTE EXPRESADO, PRESENTA DOS LLAMDAS A LA FUNCIÓN 'getFullname()' EN CONTEXTOS DIFERENTES. EN EL CASO DE LA PRIMERA LLAMADA, LA FUNCIÓN 'getFullname()' SE LLAMA COMO UN MÉTODO DE 'obj.prop'. CUANDO SE LLAMA COMO UN MÉTODO DE UN OBJETO ('obj.prop)'; 'this', DENTRO DE LA FUNCIÓN, HACE REFERENCIA A ESE OBJETO ('obj.prop'). POR LO TANTO, 'this.fullname' DENTRO DE LA FUNCIÓN, SE EVALÚA COMO 'obj.prop.fullname', QUE ES '"Aurelio De Rosa"'. DICHO ESTO, EL OUTPUT DE LA PRIMER LLAMADA SERÍA '"Aurelio De Rosa"'. EN EL CASO DE LA SEGUNDA LLAMADA, LA FUNCIÓN 'getFullname()' SE ASIGNA A LA VARIABLE 'test'. LUEGO, SE LLAMA 'test()'. CUANDO SE LLAMA DE ESTA MANERA; 'this', DENTRO DE LA FUNCIÓN 'getFULLname()', NO SE REFIERE A 'obj.prop' SINO AL OBJETO GLOBAL ('window' EN UN NAVEGADOR O 'global' en Node.js) DEBIDO AL CONTEXTO DE EJECUCIÓN EN EL QUE SE ENCUENTRA LA LLAMADA A 'test()'. COMO RESULTADO, 'this.fullname' DENTRO DE LA FUNCIÓN 'getFullname()', SE EVALÚA COMO 'window.fullname' (o 'global.fullname' en Node.js). NO OBSTANTE, NO HAY UNA VARIABLE 'fullname' EN EL OBJETO GLOBAL, POR LO QUE 'this.fullname', SE EVALÚA COMO 'undefined'.

 Event loop

function printing() {
    console.log(1);
    setTimeout(function () {
       console.log(2);
    }, 1000);
    setTimeout(function () {
       console.log(3);
    }, 0);
    console.log(4);
 }
 
 printing(); // AL SER UNA FUNCIÓN 'setTimeout', TODAS LAS OPERACIONES ASÍNCRONAS REALIZADAS DENTRO DE ÉSTA FUNCIÓN, SON MANEJADAS MEDIANTE EL "Event Loop". EL CÓDIGO PREVIAMENTE MENCIONADO TIENE DOS LLAMADAS A 'setTimeout'. UNA PRESENTA UN RETRASO DE 1000 MILISEGUNDOS (LO QUE ES LO MISMO QUE 1 SEGUNDO), Y OTRA CON UN RETRASO DE 0 MILISEGUNDOS (ES DECIR, SE EJECUTA INMEDIATAMENTE). ANALIZANDO EL ORDEN EN EL QUE SE MOSTRARÍAN LOS RESULTADOS POR CONSOLA, DAMOS CON QUE 'console.log(1);' SE EJECUTA DE INMEDIATO, Y MUESTRA '1' EN LA CONSOLA. EN EL CASO DE 'setTimeout'(function() { console.log(2); }, 1000); ES UNA LINEA QUE CREA UN TEMPORIZADOR QUE EJECUTARÁ LA FUNCIÓN DE CALLBACK DESPUES DE 1000 MILISEGUNDOS (1 SEGUNDO). MIENTRAS TANTO, EL CÓDIGO CONTINÚA EJECUTÁNDOSE. SEGUIDAMENTE EL CASO DE 'setTimeout'(function() { console.log(3); }, 0); ES UNA LINEA QUE CREA OTRO TEMPORIZADOR CON UN RETRASO DE 0 MILISEGUNDOS. AUNQUE EL RETRASO ES DE 0, ÉSTA FUNCIÓN SE COLOCA EN LA COLA DE TAREAS Y SE EJECUTARÁ DESPUÉS DE QUE EL CÓDIGO ACTUAL SE HAYA COMPLETADO Y EL "stack" ESTÉ VACÍO. EN EL ÚLTIMO CASO, 'console.log(4);', ES UNA LINEA QUE SE EJECUTA DE INMEDIATO Y MUESTRA '4' EN LA CONSOLA. DESPUÉS DE '0' MILISEGUNDOS, LA FUNCIÓN DE CALLBACK DEL PRIMER 'setTimeout' SE EJECUTA Y MUESTRA '3' EN LA CONSOLA. DESPUÉS DE '1000' MILISEGUNDOS (1 SEGUNDO), LA FUNCIÓN CALLBACK DEL SEGUNDO 'setTimeout' SE EJECUTA Y MUESTRA '2' EN LA CONSOLA. DICHO ESTO, EL OUTPUT QUE VERIAMOS SERIA EN EL SIGUIENTE ORDEN: 1, 4, 3, 2