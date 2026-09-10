// implementar un juego de ruleta de casino en este script
// se puede jugar a PAR / IMPAR
//                a ROJO / NEGRO
//                a DOCENA (1, 2 o 3)
//                a COLUMNAS (1, 2 o 3)
//                a numero en particular
//                a mitad (1-18 o 19-36)
//                para las que no saben la ruleta tiene numeros del 0 al 36

// Del 1 al 10 y del 19 al 28: Los números impares son rojos y los pares son negros.
// Del 11 al 18 y del 29 al 36: La regla se invierte; 
// los números impares son negros y los pares son rojos.

// el jugador inicia con un capital de $50.000
// cuando el capital llega a cero terminar el juego
// despues de cada ronda preguntar si desea seguir, y si no informar con cuanto se retiro

// acá va tu solución
let cash = 50000;
do {
  let input = prompt(`decime tu jugada, te quedan \$${cash.toFixed(2)}`);
  let bet = {
    type: input.split(' ')[0],
    amount: input.split(' ')[1]
  };
  if (bet.amount > cash) {
    alert('no te alcanza hermano!');
    continue;
  }
  cash -= bet.amount;
  let rn = Math.floor(Math.random() * 37); // random en [0,36]
  let color = 'red';
  if ((rn % 2 == 1) && (rn >= 11 && rn <= 18) || (rn >= 29) && (rn <= 36)) color = 'black';
  if ((rn % 2 == 0) && (rn >= 1  && rn <= 10) || (rn >= 19) && (rn <= 28)) color = 'black';
  if (bet.type == 'PAR'   && rn % 2 == 0) cash += bet.amount*2; 
  if (bet.type == 'IMPAR' && rn % 2 == 1) cash += bet.amount*2; 
  if (bet.type == 'PASA'  && rn > 18)     cash += bet.amount*2; 
  if (bet.type == 'FALTA' && rn > 0 && rn < 19)   cash += bet.amount*2; 
  if (bet.type == 'NEGRO' && color == 'black')    cash += bet.amount*2; 
  if (bet.type == 'ROJO'  && color == 'red')      cash += bet.amount*2; 
  if (isFinite(bet.type)  && rn    == +bet.type)  cash += bet.amount * 36;
  // falta chequear las demas jugadas: docenas, columnas
  if (cash <= 0) {
    alert('no tenes mas plata, a casa!');
    break;
  } 
} while (confirm('una jugada mas?'));
