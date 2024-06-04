const user = JSON.parse(localStorage.getItem("SesionActiva"));
const turnos = JSON.parse(localStorage.getItem("turnos")) || [];
const baseDatos = JSON.parse(localStorage.getItem("usuarios")) || [];

let contenedor = document.getElementById("contenedor-tabla");
let nombreUsuario = document.getElementById('nombreUsuario');
nombreUsuario.innerText = `${user.first_name} ${user.last_name}`;

const listarPacientes= () =>{
 contenedor.innerHTML= "";
 
    turnos.forEach((turno) => {
     if (turno.turnoEstado === "Aceptado") {
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
          <td>${turno.turnoEstado}
          </td> 
          `;
          estructuraFila.innerHTML= datos;
          contenedor.appendChild(estructuraFila);
          console.log(turnos)
     } else {
          contenedor.innerHTML= "No hay turnos aceptados";
     }



    });

   };

   listarPacientes();