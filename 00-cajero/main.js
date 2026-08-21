// variables globales
let saldo = 1000;
let opcion;
// loop principal
// dentro de la cadena de if else uso funciones para cada operacion
// el loop del menu es un do while del que se sale con un break, podria ser un while true
do {
  opcion = prompt('1 - Ver saldo\n2 - Depositar dinero\n3 - Retirar dinero\n4 - Salir');
  if (opcion == 4) break;
  else if (opcion == 1) verSaldo();
  else if (opcion == 2) depositar();
  else if (opcion == 3) retirar();
  else alert('Opción incorrecta');
} while (opcion != 4);

function verSaldo() {
  alert(`Te quedan ${saldo} pesos`);
}
// Number.isFinite() devuelve true si su argumento es un numero pero no es NaN ni Infinity
// tambien da false cuando es un string tipo numero como '1234'
function depositar() {
  let cantidad = +prompt('Cuanto vas a depositar?');
  if (Number.isFinite(cantidad)) saldo += cantidad;
  else                           alert('Valor incorrecto');
}

function retirar() {
  let cantidad = +prompt('Cuanto queres?');
  if (Number.isFinite(cantidad) && cantidad <= saldo) saldo -= cantidad;
  else if (!Number.isFinite(cantidad))                alert('Valor incorrecto');
  else                                                alert('Fondos insuficientes');
}

