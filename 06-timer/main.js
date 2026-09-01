// este script implementa un timer o temporizador
// como para saber cuando esta la torta que dejaste en el horno o algo de eso
// pedirle al usuario que ingrese una cantidad de segundos, minutos, horas o lo que sea
// arrancar una cuenta regresiva desde esa cantidad a cero
// cuando llegue a cero avisarle al usuario con un alert
let answer = prompt('Decime cuantos H/M/S queres esperar');
let amount = answer.split(' ')[0];
let unit = answer.split(' ')[1];
if (unit == 'M') amount *= 60;
else if (unit == 'H') amount *= 3600;
// el timer
setTimeout(() => {
  alert('Tiempo!!!!');
}, amount * 1000)