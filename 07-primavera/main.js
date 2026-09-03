// cuanto falta para la primavera?
// hay que escribir un script para calcular cuanto tiempo falta para la primavera
// como en las placas de Cronica
// hay que mostrar con un alert la cantidad de semanas, dias, horas, minutos, (opcional segundos)
// que faltan para el 21/09
// pista: restar dos fechas
// necesario: si falta 1 hora mostrar "1 hora", no "1 horas", respetar plural y singular

// bonus track: hacerlo en un documento HTML usando un h1 blanco sobre fondo rojo

// poné tu solución acá

const target = new Date('2026-09-21T00:00:00');
const h1     = document.querySelector('h1');
setInterval(() => {
  const now    = new Date();
  let diff       = target - now;
  const weeks    = Math.floor(diff / (1000 * 60 * 60 * 24 * 7));
  diff          %= 1000 * 60 * 60 * 24 * 7;
  const days     = Math.floor(diff / (1000 * 60 * 60 * 24));
  diff          %= 1000 * 60 * 60 * 24;
  const hours    = Math.floor(diff / (1000 * 60 * 60));
  diff          %= 1000 * 60 * 60;
  const minutes  = Math.floor(diff / (1000 * 60));
  diff          %= 1000 * 60;
  const seconds  = Math.floor(diff / 1000);
  h1.textContent = `FALTAN ${weeks} SEMANA${weeks == 1 ? '' : 'S'}, ` + 
                   `${days} DIA${days == 1 ? '' : 'S'}, ` + 
                   `${hours} HORA${hours == 1 ? '' : 'S'}, ` +  
                   `${minutes} MINUTO${minutes == 1 ? '' : 'S'} Y ` + 
                   `${seconds} SEGUNDO${seconds == 1 ? '' : 'S'} ` + 
                   `PARA LA PRIMAVERA`;
}, 1000);

