// el juego del ahorcado
// necesitamos un string para adivinar
let dictionary = []; // corchetes vacios es el array
                     // vacio en JS
dictionary[0] = 'aveztruz'; // usamos subindices 
                            // para asignar
dictionary.push('burro')    // burro esta en el indice
                            // uno (dictionary[1])
dictionary.push('caballo');
dictionary.push('delfin');
dictionary.push('elefante');
dictionary.push('foca');
dictionary.push('gato');
dictionary.push('hormiga');
dictionary.push('iguana');
dictionary.push('jirafa');
dictionary.push('koala');
dictionary.push('loro');
dictionary.push('mono');
dictionary.push('nutria');
dictionary.push('ñandu');
dictionary.push('orca');
dictionary.push('perro');
dictionary.push('quirquincho');
dictionary.push('raton');
dictionary.push('sapo');
dictionary.push('tucan');
dictionary.push('urraca');
dictionary.push('venado');
dictionary.push('wombat');
dictionary.push('xilofon');
dictionary.push('yaguarete');
dictionary.push('zorro');

// para saber la longitud o dimension de este arreglo
// podemos consultar la prop dictionary.length

// elegir una palabra al azar del array 
// random entre 0 y 26 o lo que  fuera
let randomIndex = Math.floor(Math.random() * dictionary.length); 
let word = dictionary[randomIndex];
let lettersNotInWord = [];

console.log(word, word.length);  // DEBUG

let guess = [];  // ahi voy viendo que va probando el jugador
for (let i = 0; i < word.length; i++)
  guess.push('_');

console.log(guess);  // DEBUG

let h2 = document.querySelector('h2');
for (let i = 0; i < guess.length; i++)
  h2.textContent += '_ ';

function handleSubmit(event) {
  event.preventDefault(); // evita la redireccion de la pagina
  let form = event.target; // event.target siempre es el elemento
                           // que genera el evento
  console.log(form.letter.value); // lo que el tipo escribio
                                  // accedemos a cada input de un form
                                  // por el nombre
  
                                  
  let l = form.letter.value[0];
  console.log(form.letter);   
  
  // loopeamos la palabra correcta
  // podriamos hacer esto
  // chequeamos si lo que el jugador ingresa esta en word
  let letterFound = false;
  for (let i = 0; i < word.length; i++) {
    if (word[i] == l) { 
      guess[i] = l;
      letterFound = true;
    } 
  }

  if (!letterFound)
    lettersNotInWord.push(l);

  console.log(lettersNotInWord);
  // actualizamos el h2 con lo nuevo que haya en guess
  let h2 = document.querySelector('h2');
  h2.textContent = '';
  for (let i = 0; i < guess.length; i++)
      h2.textContent += `${guess[i]} `;


  event.target.reset(); // blanquea el form
}

