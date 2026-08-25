// en este ejercicio hay que convertir temperaturas de un sistema a otro
// el usuario ingresa el numero y la unidad: 'C', 'F' o 'K'.
// mostrar la temperatura en las otras dos unidades
// por ejemplo si el usuario ingresa 212 F
// la conversion arroja 100 C y 373.15 K

// solución a partir de aquí
let answer = prompt('que haces usuario, dame una temperatura con unidad como "88 C" o "67 K"');
// split permite partir un string en varios usando un "delimitador"
// aca el delimitador es el espacio y el resultado de split es un array con dos elementos
// primer elemento
let unit = answer.split(' ')[1];
let T = +answer.split(' ')[0];
// ver que unidad ingresaron, hacer las cuentas y mostrar el resultado en un alert
if (unit == 'C') {
  let F = (9/5)*T + 32;
  let K = T + 273.15;
  alert(`${answer} es igual a ${F.toFixed(2)} F y ${K.toFixed(2)} K`);
} else if (unit == 'F') {
  let C = (5/9)*(T - 32);
  let K = (5/9)*(T - 32) + 273.15;
  alert(`${answer} es igual a ${C.toFixed(2)} C y ${K.toFixed(2)} K`);
} else if (unit == 'K') {
  let C = T - 273.15;
  let F = (9/5)*(T-273.15) + 32;
  alert(`${answer} es igual a ${C.toFixed(2)} C y ${F.toFixed(2)} F`);
} else {
  alert('ingresaste cualquier cosa');
}
// la funcion o metodo toFixed() del tipo Number es para mostrar hasta dos decimales
