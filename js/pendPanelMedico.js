const turnos = JSON.parse(localStorage.getItem("turnos")) || [];
const baseDatos = JSON.parse(localStorage.getItem("usuarios")) || [];

let contenedor = document.getElementById("contenedor-tabla");

const listarPacientes= () =>{
 contenedor.innerHTML= "";
 
    turnos.forEach((turno) => {
     if (turno.turnoEstado === "Pendiente") {
          let estructuraFila= document.createElement("tr");
          let medico = baseDatos.find(medico => medico.id == turno.idMedico);
          console.log(medico);
          //creo la estructura de la tabla
          let datos = ` 
          <td>${medico.first_name}</td>
          <td>${medico.last_name}</td>
          <td>${medico.especialidad}</td>
          <td> ${medico.age} Años</td>
          <td>${medico.department}</td>
          <td>${turno.horario}</td>
          <td> <button onclick="rechazar(${turno.idTurno})" class="btn btn-danger">Rechazar</button>
          <button onclick="aceptar(${turno.idTurno})" class="btn btn-success">Aceptar</button>
          </td> 
          `;
          estructuraFila.innerHTML= datos;
          contenedor.appendChild(estructuraFila);
          console.log(turnos)
     } else {
          contenedor.innerHTML= "No hay turnos pendientes";
     }



    });

   };

   const rechazar = (idTurno) => {
        const turno = turnos.find(turno => turno.idTurno === idTurno);
        turno.turnoEstado = "Rechazado";
        localStorage.setItem("turnos", JSON.stringify(turnos));
        listarPacientes();
   }

   const aceptar = (idTurno) => {
    const turno = turnos.find(turno => turno.idTurno === idTurno);
    turno.turnoEstado = "Aceptado";
    localStorage.setItem("turnos", JSON.stringify(turnos));
    listarPacientes();
}

   listarPacientes();