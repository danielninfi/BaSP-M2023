//6. Funciones

console.log('--EXERCISE 6: FUNCTIONS');

//a. Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y guardar el 
//  resultado en una variable, mostrando el valor de dicha variable en la consola del navegador.

console.log('-Exercise 6.a:');

function suma(a, b) {
    return a + b;
}

var result6a = suma(5, 10);

console.log('Result 6.a: ' + result6a);

//b. Copiar la función suma anterior y agregarle una validación para controlar si alguno de los parámetros no es un 
//  número; de no ser un número, mostrar un alert aclarando que uno de los parámetros tiene error y retornar 
//  el valor NaN como resultado.
//6. Funciones

console.log('--EXERCISE 6: FUNCTIONS');

//a. Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y guardar el 
//  resultado en una variable, mostrando el valor de dicha variable en la consola del navegador.

console.log('-Exercise 6.a:');

function suma(a, b) {
    return a + b;
}

var result6a = suma(5, 10);

console.log('Result 6.a: ' + result6a);

//b. Copiar la función suma anterior y agregarle una validación para controlar si alguno de los parámetros no es un 
//  número; de no ser un número, mostrar un alert aclarando que uno de los parámetros tiene error y retornar 
//  el valor NaN como resultado.

console.log('-Exercise 6.b:');

function suma(a, b) {
    
    if (typeof a !== 'number' || typeof b !== 'number') {
        alert('Error! One of the parameters is not a number.');
        return NaN;
    }
    return a + b;
}
var result6b = suma(5, 'h');
console.log(result6b);

//c. Crear una función “validateInteger” que reciba un número como parámetro y devuelva verdadero si es un 
//  número entero.

console.log('-Exercise 6.c:');

function validateInteger(number) {
    if(Number.isInteger(number)){
        return true;
    } else {
        return false;
    }
}

console.log('Result 6.c: 5 ' + validateInteger(5));
console.log('Result 6.c: 2.5 ' + validateInteger(2.5));

//d. Copiar y renombrar la función suma del ejercicio 6b) y agregarle una llamada a la función del ejercicio 
//       6c. y que valide que los números sean enteros. En caso que haya decimales mostrar un alert con el error y retornar el número convertido a entero (redondeado).

console.log('-Exercise 6.d:');

function suma2(a, b) {
    
    if (!validateInteger(a) || !validateInteger(b)) {
        alert('¡Error! One of the parameters is not an integer.');
        return Math.round(a) + Math.round(b); 
    }
    return a + b;
}

var result6d = suma2(5, 10);
console.log(result6d);

//e. Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de una nueva función 
//  probando que todo siga funcionando igual que en el apartado anterior.

console.log('-Exercise 6.e:');

function probarSuma() {
    var result6e = suma2(60.4, 10); 
    console.log(result6e); 
}

probarSuma();