// en este ejemplo/ejercicio empezamos con la API del DOM y eventos
// la idea es escuchar el evento click del boton y aumentar en uno el texto que
// se muestra (un contador) 

// para eso implementar una funcion handleClick(event) y asociarla al boton
// en ese handler conviene usar la propiedad textContent de element

function handleClick(event) {
  let n = +event.target.textContent; // event.target es el elemento button
                                     // con element.textContent tenes el texto del elemento
  n++;
  event.target.textContent = n;
}

// en general event.target es el elemento que genero el evento
// en el caso de un evento click como el de este ejemplo siempre event.target es el 
// elemento HTML que clickeo el usuario, podemos hacer esto mas explicito escribiendo:
// let button = event.target;
// let n = +button.textContent;
// n++;
// button.textContent = n;
