// //simulador de turnos peluqueria:
const turnosDisponibles = [
  {
    id:1,
    dia: "Martes",
    horario: "9 hs",

  },
  {
    id:2,
    dia:"Martes",
    horario:"13 hs",
  },
  {
    id:3,
    dia:"Martes",
    horario:"16 hs",
  },
  {
    id:4,
    dia: "Miércoles",
    horario:"9 hs",
  },
  {
    id:5,
    dia: "Miércoles",
    horario:"13 hs",
  },
  {
    id:6,
    dia: "Miércoles",
    horario:"16 hs",
  },
  {
    id:7,
    dia: "Jueves",
    horario:"9 hs"
  },
  {
    id:8,
    dia:"Jueves",
    horario: "13 hs",
  },
  {
    id:9,
    dia:"Jueves",
    horario:"16 hs",
  },
  {
    id:10,
    dia:"Viernes",
    horario:"9 hs"
  },
  {
    id:11,
    dia:"Viernes",
    horario:"13 hs",
  },
  {
    id:12,
    dia:"Viernes",
    horario:"16 hs",
  }

]



const turnosReservados = {};

alert("Bienvenidos al sistema de turnos online de Beauty Studio");
const nombreCliente = prompt("Ingresa tu nombre y apellido");
const telefonoCliente = parseInt(prompt("Ingresa tu nro de teléfono. Te contactaremos en caso de ser necesario"));

const verTurnosDisponibles = () => {
  let turnosDisponiblesMensaje = "Turnos disponibles para esta semana:\n";
  turnosDisponibles.forEach((turno) => {
    const { id, dia, horario } = turno;
    turnosDisponiblesMensaje += `ID: ${id}, Día: ${dia}, Horario: ${horario}\n`;
  });

  alert(turnosDisponiblesMensaje);
};

const reservarTurno = () => {
  const turnosReservadosIds = [];

  while (true) {
    const idTurnoElegido = parseInt(prompt("Ingresa el ID del turno que deseas reservar o ingresa 0 para salir:"));

    if (idTurnoElegido === 0) {
      break;
    }

    const turno = turnosDisponibles.find((turno) => turno.id === idTurnoElegido);

    if (turno) {
      const { dia, horario } = turno;
      const turnoReservado = `${dia}, ${horario}`;

      if (!turnosReservadosIds.includes(idTurnoElegido)) {
        turnosReservadosIds.push(idTurnoElegido);
        alert(`¡Tu reserva fue realizada con éxito! ${nombreCliente} tienes un turno para el ${turnoReservado}. Te esperamos en Av Comodoro Rivadavia 437, Bernal. ¡Nos vemos!`);
      } else {
        alert(`Lo sentimos, el turno para el ${turnoReservado} ya se encuentra reservado.`);
      }
    } else {
      alert(`No se encontró un turno con el ID ${idTurnoElegido}.`);
    }
  }
};


verTurnosDisponibles();
reservarTurno();
alert ("¡Gracias por visitar nuestro sitio web!")