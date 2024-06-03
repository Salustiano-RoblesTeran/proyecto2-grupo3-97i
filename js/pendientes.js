const turnos = JSON.parse(localStorage.getItem("turnos")) || [];

let contenedor = document.getElementById("contenedor-tabla");

const listarPacientes= () =>{
 contenedor.innerHTML= "";
 
    turnos.forEach((item) => {
     
         let estructuraFila= document.createElement("tr");
         //creo la estructura de la tabla
         let datos = ` 
         <td>${item}</td>
         <td>${item.apellido}</td>
         <td>${item.especialidad}</td>
         <td> ${item.edad} Años</td>
         <td>${item.localidad}</td>
         <td>${item.turnoEstado}
         </td> 
         `;
         estructuraFila.innerHTML= datos;
         contenedor.appendChild(estructuraFila);
         console.log(turnos)


    });

   };

   listarPacientes();