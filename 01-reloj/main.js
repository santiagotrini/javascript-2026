// la expresion de funcion flecha adentro de setInterval es la callback,
// setInterval NO ES una callback, el segundo argumento es un numero (milisegundos)
// ademas demuestra como acceder a propiedades de objetos el ejemplo porque now es
// un objeto de tipo Date
// en las lineas 6 a 8 se usan funciones para pasar a string y para agregar ceros delante
setInterval(() => {
  let now = new Date();
  let s = now.getSeconds();
  let m = now.getMinutes();
  let h = now.getHours();
  s = s.toString().padStart(2,'0');
  m = m.toString().padStart(2,'0');
  h = h.toString().padStart(2,'0');
  console.log(`${h}:${m}:${s}`);
}, 1000);
