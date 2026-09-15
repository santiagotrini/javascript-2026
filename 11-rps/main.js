// implementar el juego de piedra papel o tijera para jugar contra la CPU
// usar 3 botones para la opción del usuario

// globales para mas comodidad
let totalGames   = 0;
let playerPoints = 0;
let cpuPoints    = 0;
let choices      = ['Piedra', 'Papel', 'Tijera'];
let h2           = document.querySelector('h2');
let p            = document.querySelector('p');
// event handler (el click de alguno de los 3 botones)
function handleClick(e) {
  let btn = e.target;
  let playerChoice = btn.dataset.choice;
  let cpuChoice;
  // animacion para la CPU
  let timerId = setInterval(() => {
    cpuChoice = choices[Math.floor(Math.random() * 3)];
    h2.textContent = cpuChoice;
  }, 50);
  setTimeout(() => {
    // cortar la animacion
    clearInterval(timerId);
    // opcion final
    cpuChoice = choices[Math.floor(Math.random() * 3)];
    h2.textContent = cpuChoice;
    // logica del juego
    if (cpuChoice == playerChoice) {
      // no hacemos nada (empate)
    } else if ( playerChoice == 'Piedra' && cpuChoice == 'Tijera' ||
                playerChoice == 'Papel'  && cpuChoice == 'Piedra' ||
                playerChoice == 'Tijera' && cpuChoice == 'Papel'     ) {
      playerPoints++; // gana el jugador
    } else {
      cpuPoints++; // gana la CPU
    }
    // actualizar score
    totalGames++;
    p.textContent = `[Jugador: ${playerPoints} / CPU: ${cpuPoints} / Total: ${totalGames}]`
  }, 1000);  
}

