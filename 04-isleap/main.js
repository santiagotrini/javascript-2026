// hay que implementar una funcion isLeap(year) que devuelva true o false si
// un año es bisiesto o no
// reglas para ser año bisiesto: 1. sos divisible por 4
//                               2. no sos divisible por 100
//                               3. salvo que seas divisible por 400
//                               4. si cumplis todas estas reglas sos bisiesto sino no

// usar un loop para preguntar al usuario un año, decirle si es bisiesto y darle la 
// opcion de volver a comenzar



function isLeap(year) {
  let r = year % 4 == 0 && year % 100 != 0;
  r     = r || year % 400 == 0;
  return r; 
}

function main() {
  do {
    let year = +prompt('ingrese un año');
    alert(`el año ${year} ${isLeap(year) ? 'es' : 'no es'} bisiesto`);
  } while (confirm('otro?'));
}

main();
