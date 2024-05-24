
 class Pacientes{
  constructor(id, nombre,apellido,email,dni,tel,consulta,turno){
   this.id= id;
   this.nombre=nombre;
   this.apellido= apellido;
   this.email= email;
   this.dni= dni;
   this.tel= tel;
   this.consulta= consulta;
   this.turno= turno;
  }

}
 const data = JSON.parse(localStorage.getItem("pacientes")) || [];
 const dataAceptados = JSON.parse(localStorage.getItem("pacientesAceptados")) || [];
 const dataRechazados = JSON.parse(localStorage.getItem("pacientesRechazados")) || [];

 let contenedor= document.getElementById("contenedor-tabla");
 let contenedorAceptados= document.getElementById("contenedor-tabla-aceptados");
 let contenedorRechazados= document.getElementById("contenedor-tabla-rechazados");
 
const listarPacientes= () =>{
  contenedor.innerHTML= "";
  
    data.forEach((item) => {
      
    
         let estructuraFila= document.createElement("tr");
         //creo la estructura de la tabla
         let datos = ` 
         <td>${item.nombre}</td>
         <td>${item.apellido}</td>
         <td>${item.email}</td>
         <td> ${item.dni}</td>
         <td>${item.tel}</td>
         <td> ${item.consulta}</td>
         <td>${item.turno}</td>
         <td> <button onclick="rechazar(${item.id})" class="btn btn-danger">Rechazar</button>
         <button onclick="aceptar(${item.id})" class="btn btn-success">Aceptar</button>
         </td> 
         `;

         estructuraFila.innerHTML= datos;
         contenedor.appendChild(estructuraFila);
    });
  
};
const listarPacientesAceptados= () =>{
  contenedorAceptados.innerHTML= "";
  
    dataAceptados.forEach((item) => {
      
    
         let estructuraFila= document.createElement("tr");
         //creo la estructura de la tabla
         let datos = ` 
         <td>${item.nombre}</td>
         <td>${item.apellido}</td>
         <td>${item.email}</td>
         <td> ${item.dni}</td>
         <td>${item.tel}</td>
         <td> ${item.consulta}</td>
         <td>${item.turno}</td>
        
         `;

         estructuraFila.innerHTML= datos;
         contenedorAceptados.appendChild(estructuraFila);
    });
  
};
const listarPacientesRechazados= () =>{
  contenedorRechazados.innerHTML= "";
  
    dataRechazados.forEach((item) => {
      
    
         let estructuraFila= document.createElement("tr");
         //creo la estructura de la tabla
         let datos = ` 
         <td>${item.nombre}</td>
         <td>${item.apellido}</td>
         <td>${item.email}</td>
         <td> ${item.dni}</td>
         <td>${item.tel}</td>
         <td> ${item.consulta}</td>
         <td>${item.turno}</td>
        
         `;

         estructuraFila.innerHTML= datos;
         contenedorRechazados.appendChild(estructuraFila);
    });
  
};


const agregarDatos = (event)=>{
  event.preventDefault();
  
  contenedor.innerHTML= "" ;

  let id= new Date().getTime();

  let name= document.getElementById("Nombre1").value;
  let lastName= document.getElementById("Apellido1").value;
  let email= document.getElementById("email").value;
  let dni= document.getElementById("dni").value;
  let tel= document.getElementById("Telefono").value;
  let consulta= document.getElementById("consulta").value;
  let turno= document.getElementById("Turnos").value;

let newPaciente= new Pacientes(id,name, lastName,email,dni,tel,consulta,turno);
data.push(newPaciente);

localStorage.setItem("pacientes", JSON.stringify(data));

 document.getElementById("Nombre1").value= "";
 document.getElementById("Apellido1").value= "";
 document.getElementById("email").value= "";
 document.getElementById("dni").value= "";  
 document.getElementById("Telefono").value= "";
 document.getElementById("consulta").value= "";
 document.getElementById("Turnos").value= "";
  
 listarPacientes();
}
listarPacientes();


const rechazar= (id)=>{
     let opcion= confirm("¿Esta seguro quiere que Rechazar este Paciente?");
     if (opcion) {
      const index = data.findIndex(paciente => paciente.id === id);
      if (index !== -1) {
         const pacientesRechazados= data.splice(index, 1)[0];
      dataRechazados.push(pacientesRechazados);
      localStorage.setItem("pacientes", JSON.stringify(data));
      localStorage.setItem("pacientesRechazados", JSON.stringify(dataRechazados));

      listarPacientes();
      listarPacientesRechazados();
       }
      
     }
    
}

const aceptar = (id)=>{
  let opcion= confirm("¿Esta seguro quiere que Aceptar este Paciente?");
  if (opcion) {
   const index = data.findIndex(paciente => paciente.id === id);
   if (index !== -1) {

   const pacientesAceptados= data.splice(index, 1)[0];
   dataAceptados.push(pacientesAceptados);
   localStorage.setItem("pacientes", JSON.stringify(data));
   localStorage.setItem("pacientesAceptados", JSON.stringify(dataAceptados));
   
    listarPacientes();
    listarPacientesAceptados();
    }
   
  }
 

}
listarPacientes();
listarPacientesAceptados();
listarPacientesRechazados();
