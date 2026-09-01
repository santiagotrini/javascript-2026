// este ejercicio es para jugar una trivia
// cada pregunta es un objeto asi
let firstQuestion = {
  questionText: 'Cual es la raiz cuadrada de 144?',
  answerA: '9',
  answerB: '100',
  answerC: '12',
  answerD: '25',
  correctAnswer: '12'
};
// el programa debe mostrar al menos 4 preguntas, preguntar al usuario por una opcion
// y acumular los puntos obtenidos en una variable

// avance de la proxima temporada: usar arrays en este ejercicio para manejar un numero
// arbitrario de preguntas (en la prueba igual no entra arrays)

// solucion a partir de aca
// 3 preguntas mas
let secondQuestion = {
  questionText: 'Que ave puede imitar a una motosierra?',
  answerA: 'El Ave Lira Soberbia',
  answerB: 'La cotorra',
  answerC: 'El pajaro carpintero',
  answerD: 'El pajaro Caniggia',
  correctAnswer: 'El Ave Lira Soberbia'
};
let thirdQuestion = {
  questionText: 'Que hacer si te ataca un tiburon?',
  answerA: 'Correr',
  answerB: 'Saltar',
  answerC: 'Nadar',
  answerD: 'Rotarlo',
  correctAnswer: 'Rotarlo'
};
let fourthQuestion = {
  questionText: 'De que color son las plumas de un flamenco al nacer?',
  answerA: 'Negro',
  answerB: 'Rosa',
  answerC: 'Gris',
  answerD: 'Blanco',
  correctAnswer: 'Gris'
};
// puntos totales
let puntos = 0;
// arranca el juego
let answer = '';
let choice = '';
choice = prompt(`${firstQuestion.questionText}\n
 A - ${firstQuestion.answerA}\n
 B - ${firstQuestion.answerB}\n
 C - ${firstQuestion.answerC}\n
 D - ${firstQuestion.answerD}`);
answer;
if (choice.toLowerCase() == 'a') answer = firstQuestion.answerA;
if (choice.toLowerCase() == 'b') answer = firstQuestion.answerB;
if (choice.toLowerCase() == 'c') answer = firstQuestion.answerC;
if (choice.toLowerCase() == 'd') answer = firstQuestion.answerD;
if (answer == firstQuestion.correctAnswer) puntos++;
// lo mismo con las otras 3
choice = prompt(`${secondQuestion.questionText}\n
 A - ${secondQuestion.answerA}\n
 B - ${secondQuestion.answerB}\n
 C - ${secondQuestion.answerC}\n
 D - ${secondQuestion.answerD}`);
answer;
if (choice.toLowerCase() == 'a') answer = secondQuestion.answerA;
if (choice.toLowerCase() == 'b') answer = secondQuestion.answerB;
if (choice.toLowerCase() == 'c') answer = secondQuestion.answerC;
if (choice.toLowerCase() == 'd') answer = secondQuestion.answerD;
if (answer == secondQuestion.correctAnswer) puntos++;

choice = prompt(`${thirdQuestion.questionText}\n
 A - ${thirdQuestion.answerA}\n
 B - ${thirdQuestion.answerB}\n
 C - ${thirdQuestion.answerC}\n
 D - ${thirdQuestion.answerD}`);
answer;
if (choice.toLowerCase() == 'a') answer = thirdQuestion.answerA;
if (choice.toLowerCase() == 'b') answer = thirdQuestion.answerB;
if (choice.toLowerCase() == 'c') answer = thirdQuestion.answerC;
if (choice.toLowerCase() == 'd') answer = thirdQuestion.answerD;
if (answer == thirdQuestion.correctAnswer) puntos++;

choice = prompt(`${fourthQuestion.questionText}\n
 A - ${fourthQuestion.answerA}\n
 B - ${fourthQuestion.answerB}\n
 C - ${fourthQuestion.answerC}\n
 D - ${fourthQuestion.answerD}`);
answer;
if (choice.toLowerCase() == 'a') answer = fourthQuestion.answerA;
if (choice.toLowerCase() == 'b') answer = fourthQuestion.answerB;
if (choice.toLowerCase() == 'c') answer = fourthQuestion.answerC;
if (choice.toLowerCase() == 'd') answer = fourthQuestion.answerD;
if (answer == fourthQuestion.correctAnswer) puntos++;


alert(`Sacaste ${puntos}/4 puntos`);