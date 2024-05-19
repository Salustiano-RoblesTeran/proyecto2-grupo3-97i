 

//let pacientes= [
//   {
//     id:7,
//     nombre: "Magali",
//     apellido: "Navarro",
//     email: "maguinavarro07@gmail.com",
//     dni: 44580781,
//     tel: 3815697237,
//     consulta:"cardiologia",
//     turno: "30/5/2024",

// },
// {
//     id:9,
//     nombre: "Magali",
//     apellido: "Navarro",
//     email: "maguinavarro07@gmail.com",
//     dni: 44580781,
//     tel: 3815697237,
//     consulta:"cardiologia",
//     turno: "30/5/2024",

// },] ;
//console.log(pacientes);localStorage.setItem("pacientes", JSON.stringify(pacientes));
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

 let contenedor= document.getElementById("contenedor-tabla");

 
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
         <td> <button onclick="eliminar(${item.id})" class="btn btn-danger">Eliminar</button>
         <button onclick="modificar(${item.id})" class="btn btn-warning m-2">Editar</button> </td> 
         `;

         estructuraFila.innerHTML= datos;
         contenedor.appendChild(estructuraFila);
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


function eliminar(id){
     let opcion= confirm("¿Esta seguro quiere Eliminar este Paciente?");
     if (opcion) {
      const index = data.findIndex(paciente => paciente.id === id);
      if (index !== -1) {
          data.splice(index, 1);
    
      localStorage.setItem("pacientes", JSON.stringify("data"));
       }
     }


      listarPacientes();
}
