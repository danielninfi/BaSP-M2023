// 3. Arrays

console.log('--EXERCISE 3: ARRAYS');

// a. Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", 
//      "Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11 
//      (utilizar console.log).

console.log('-Exercise 3.a:');

var monthsA = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

console.log('Result 3.a: ' + monthsA[5] + ' - ' + monthsA[11]);

// b. Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).

console.log('-Exercise 3.b:');

var monthsB = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

console.log('Result 3.b: ' + monthsB.sort());

// c. Agregar un elemento al principio y al final del array (utilizar unshift y push).

console.log('-Exercise 3.c:');

var monthsC = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

monthsC.unshift('first');
monthsC.push('last');

console.log('Result 3.c: ' + monthsC);

// d. Quitar un elemento del principio y del final del array (utilizar shift y pop).

console.log('-Exercise 3.d:');

var monthsD = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

monthsD.shift();
monthsD.pop();

console.log('Result 3.d: ' + monthsD);

// e. Invertir el orden del array (utilizar reverse).

console.log('-Exercise 3.e:');

var monthsE = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

console.log('Result 3.e: ' + monthsE.reverse());

// f. Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join).

console.log('-Exercise 3.f:');

var monthsF = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

console.log('Result 3.f: ' + monthsF.join('-'));

// g. Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).

console.log('-Exercise 3.g:');

var monthsG = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

console.log('Result 3.g: ' + monthsG.slice(4,11));