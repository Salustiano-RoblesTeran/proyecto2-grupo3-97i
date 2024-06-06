const user = JSON.parse(localStorage.getItem("SesionActiva"));
const turnos = JSON.parse(localStorage.getItem("turnos")) || [];
const baseDatos = JSON.parse(localStorage.getItem("usuarios")) || [];



let nombreUsuario = document.getElementById('nombreUsuario');
nombreUsuario.innerText = `${user.first_name} ${user.last_name}`;

let cerrarSesion = document.getElementById('cerrarSesion');

cerrarSesion.addEventListener('click', ()=> {
    window.location.href = "../index.html";
    localStorage.removeItem('SesionActiva');

})


const listarPacientes= () =>{
let contenedor = document.getElementById("contenedor-tabla");
 contenedor.innerHTML= "";

 let turnosPendientes = turnos.filter(turno => turno.turnoEstado === "Pendiente");
    
    console.log(turnosPendientes);
 
     if (turnosPendientes.length > 0) {
        turnosPendientes.forEach((turno) => {
            console.log(turno)
          let estructuraFila= document.createElement("tr");

          //creo la estructura de la tabla
          let datos = ` 
          <td>${turno.nombreMedico}</td>
          <td>${turno.especialidad}</td>
          <td>${turno.consulta}</td>
          <td> ${turno.age} Años</td>
          <td>${turno.department}</td>
          <td>${turno.horario}</td>
          <td>${turno.turnoEstado}
          </td> 
          `;
          estructuraFila.innerHTML= datos;
          contenedor.appendChild(estructuraFila);
        });
     } else {
        contenedor.innerHTML = "<tr><td colspan='7'>No hay turnos pendientes</td></tr>";
     }



   };

   listarPacientes();