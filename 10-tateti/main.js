// tateti: tenes 9 botones y tenes 3 fichas para poner (cruces y circulos)
// no podes poner mas de 3 fichas, no podes poner fichas si no esta vacio, se van turnando
// los jugadores.

// usar event bubbling para poner un handler para todo el tablero 

// mueve X
let xMoves = true;
// quien gano
let winner = false;
// el tablero (un array), representando el estado del tablero con un array
let board = [
  '','','',
  '','','',
  '','',''
];
// hay movimientos restantes? cuantos?
let remainingMoves = 6;
// el h2 y el div
let h2             = document.querySelector('h2');
let div            = document.querySelector('.board');
// la logica del juego cuando clickea cada jugador
function handleClick(e) {
  // renombrando variables para que se entienda mejor
  let btn = e.target;
  let i   = e.target.dataset.index;
  let move        = xMoves ? 'X' : 'O';
  // caso de que hay fichas para poner
  if (remainingMoves > 0) {
    if (btn.textContent != '') return;
    btn.textContent = move;
    board[i]        = move;  // actualizar el array que usamos para chequear quien gano
    xMoves          = !xMoves;
    remainingMoves--;
  } else { // no hay fichas libres, liberar una                             
    if (btn.textContent == '') return;
    if (btn.textContent == move) {
      remainingMoves++;
      btn.textContent = '';
      board[i]        = '';
    }
  }
  winner = getWinner();
  if (winner) {
    h2.textContent = `El ganador es ${winner}!`; // avisamos en el h2
    div.onclick    = null; // no se puede jugar mas! apreta F5 para reiniciar
  }
}
// helper para calcular quien gano si es que gano alguien
// devuelve 'X', 'O' o false
function getWinner() {
  // diagonales
  if (board[0] == board[4] && board[4] == board[8] && board[4] != '')     
    return board[4];
  if (board[2] == board[4] && board[4] == board[6] && board[4] != '')     
    return board[4];
  // presten atencion a la aritmetica de indices! buen ejercicio para evaluar arrays
  for (let i = 0; i < 3; i++) {
    // filas
    if (board[i*3] == board[i*3+1] && board[i*3+1] == board[i*3+2] && board[i*3] != '')
      return board[i*3];
    // columnas
    if (board[i] == board[i+3] && board[i+3] == board[i+6] && board[i] != '')
      return board[i];
  }
  // no encontramos ningun ganador
  return false;
}

// si le encuentran un bug avisen que lo arreglamos