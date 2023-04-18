// 2. Strings

console.log('--EXERCISE 2: STRINGS');

// a. Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula 
//      (utilizar toUpperCase).

console.log('-Exercise 2.a:');

var tenLettersA = 'supercalifragilisticexpialidocious';
var result2a = tenLettersA.toUpperCase();

console.log('Result 2.a: ' + result2a);

// b. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 
//      caracteres guardando el resultado en una nueva variable (utilizar substring).

console.log('-Exercise 2.b:');

var tenLettersB = 'supercalifragilisticexpialidocious';
var firstFiveLetters = tenLettersB.substring(0, 5);

console.log('Result 2.b: ' + firstFiveLetters);

// c. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3 
//      caracteres guardando el resultado en una nueva variable (utilizar substring).

console.log('-Exercise 2.c:');

var tenLettersC = 'supercalifragilisticexpialidocious';
var lastThreeLetters = tenLettersC.substring(tenLettersC.length - 3);

console.log('Result 2.c: ' + lastThreeLetters);

// d. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en 
//         mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable 
//         (utilizar substring, toUpperCase, toLowerCase y el operador +).

console.log('-Exercise 2.d:');

var tenLettersD = 'supercalifragilisticexpialidocious';
var firstLetterUpper = tenLettersD.substring(0, 1).toUpperCase();
var remainingLetters = tenLettersD.substring(1).toLowerCase();

console.log('Result 2.d: ' + firstLetterUpper + remainingLetters);

// e. Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición 
//      del primer espacio en blanco y guardarla en una variable (utilizar indexOf).

console.log('-Exercise 2.e:');

var tenCharacters = 'Rosario was always close';
var blankSpace = tenCharacters.indexOf(" ");

console.log('Result 2.e: ' + blankSpace);

// f. Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio). 
//      Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de 
//      ambas palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, 
//      toLowerCase y el operador +).

console.log('-Exercise 2.f:');

var twoWords = 'green house';
var twoWordsButtUpper = twoWords.toUpperCase();
var blankPosition = twoWords.indexOf(" ");
var upperG = twoWordsButtUpper.substring(0, 1);
var houseWord = twoWordsButtUpper.substring(blankPosition + 1);
var upperH = houseWord.substring(0,1);
var reen = twoWordsButtUpper.substring(1,blankPosition);
var ouse = twoWordsButtUpper.substring(blankPosition + 2);
var lowerReen = reen.toLowerCase();
var lowerOuse = ouse.toLowerCase();
var result2f = upperG + lowerReen + " " + upperH + lowerOuse;

console.log(result2f);