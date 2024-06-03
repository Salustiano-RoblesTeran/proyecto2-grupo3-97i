const personas = [
    {
        id: 3020,
        nombre: "Juan",
        apellido: "Pérez",
        edad: 34,
        localidad: "San Miguel de Tucumán",
        email: "juan.perez@example.com",
        medico: true,
        especialidad: "Cardiología",
        password: "password123"
    },
    {
        nombre: "María",
        apellido: "González",
        edad: 28,
        localidad: "Yerba Buena",
        email: "maria.gonzalez@example.com",
        medico: false,
        especialidad: null,
        password: "maria2021"
    },
    {
        nombre: "Pedro",
        apellido: "Ramírez",
        edad: 45,
        localidad: "Tafí Viejo",
        email: "pedro.ramirez@example.com",
        medico: true,
        especialidad: "Pediatría",
        password: "pedro789"
    },
    {
        nombre: "Ana",
        apellido: "López",
        edad: 32,
        localidad: "Concepción",
        email: "ana.lopez@example.com",
        medico: true,
        especialidad: "Dermatología",
        password: "ana2022"
    },
    {
        nombre: "Carlos",
        apellido: "Fernández",
        edad: 39,
        localidad: "Monteros",
        email: "carlos.fernandez@example.com",
        medico: false,
        especialidad: null,
        password: "carlospass"
    },
    {
        nombre: "Laura",
        apellido: "Martínez",
        edad: 29,
        localidad: "San Miguel de Tucumán",
        email: "laura.martinez@example.com",
        medico: true,
        especialidad: "Neurología",
        password: "laura123"
    },
    {
        nombre: "Ricardo",
        apellido: "Díaz",
        edad: 41,
        localidad: "Yerba Buena",
        email: "ricardo.diaz@example.com",
        medico: false,
        especialidad: null,
        password: "ricardo2021"
    },
    {
        nombre: "Julia",
        apellido: "Sánchez",
        edad: 37,
        localidad: "Tafí Viejo",
        email: "julia.sanchez@example.com",
        medico: true,
        especialidad: "Ginecología",
        password: "julia789"
    },
    {
        nombre: "David",
        apellido: "Torres",
        edad: 48,
        localidad: "Concepción",
        email: "david.torres@example.com",
        medico: true,
        especialidad: "Traumatología",
        password: "david2022"
    },
    {
        nombre: "Isabel",
        apellido: "Gutiérrez",
        edad: 27,
        localidad: "Monteros",
        email: "isabel.gutierrez@example.com",
        medico: false,
        especialidad: null,
        password: "isabelpass"
    },
    {
        nombre: "Jorge",
        apellido: "Rojas",
        edad: 53,
        localidad: "San Miguel de Tucumán",
        email: "jorge.rojas@example.com",
        medico: true,
        especialidad: "Oftalmología",
        password: "jorge123"
    },
    {
        nombre: "Elena",
        apellido: "Molina",
        edad: 31,
        localidad: "Yerba Buena",
        email: "elena.molina@example.com",
        medico: false,
        especialidad: null,
        password: "elena2021"
    },
    {
        nombre: "Santiago",
        apellido: "Hernández",
        edad: 36,
        localidad: "Tafí Viejo",
        email: "santiago.hernandez@example.com",
        medico: true,
        especialidad: "Psiquiatría",
        password: "santiago789"
    },
    {
        nombre: "Lucía",
        apellido: "Castro",
        edad: 42,
        localidad: "Concepción",
        email: "lucia.castro@example.com",
        medico: true,
        especialidad: "Neumología",
        password: "lucia2022"
    },
    {
        nombre: "Miguel",
        apellido: "Álvarez",
        edad: 34,
        localidad: "Monteros",
        email: "miguel.alvarez@example.com",
        medico: false,
        especialidad: null,
        password: "miguelpass"
    },
    {
        nombre: "Carmen",
        apellido: "Vargas",
        edad: 38,
        localidad: "San Miguel de Tucumán",
        email: "carmen.vargas@example.com",
        medico: true,
        especialidad: "Endocrinología",
        password: "carmen123"
    },
    {
        nombre: "Luis",
        apellido: "Romero",
        edad: 50,
        localidad: "Yerba Buena",
        email: "luis.romero@example.com",
        medico: false,
        especialidad: null,
        password: "luis2021"
    },
    {
        nombre: "Paula",
        apellido: "Reyes",
        edad: 33,
        localidad: "Tafí Viejo",
        email: "paula.reyes@example.com",
        medico: true,
        especialidad: "Oncología",
        password: "paula789"
    },
    {
        nombre: "Fernando",
        apellido: "Morales",
        edad: 46,
        localidad: "Concepción",
        email: "fernando.morales@example.com",
        medico: true,
        especialidad: "Urología",
        password: "fernando2022"
    },
    {
        nombre: "Patricia",
        apellido: "Ortega",
        edad: 29,
        localidad: "Monteros",
        email: "patricia.ortega@example.com",
        medico: false,
        especialidad: null,
        password: "patriciapass"
    }
];

const turnos = JSON.parse(localStorage.getItem("turnos")) || [];

class Turno {
    constructor (id, nombrePaciente, nombreMedico, descripcion, localidad, horario, turnoEstado) {
        this.id = id;
        this.nombrePaciente = nombrePaciente;
        this.nombreMedico = nombreMedico;
        this.descripcion = descripcion;
        this.localidad = localidad;
        this.horario = horario;
        this.turnoEstado = turnoEstado;
    }
}
  
   let contenedor= document.getElementById("contenedor-tabla");
   
  const listarPacientes= () =>{
    contenedor.innerHTML= "";
    
        personas.forEach((item) => {
        
            if (item.medico) {
            let estructuraFila= document.createElement("tr");
            //creo la estructura de la tabla
            let datos = ` 
            <td>${item.nombre}</td>
            <td>${item.apellido}</td>
            <td>${item.especialidad}</td>
            <td> ${item.edad} Años</td>
            <td>${item.localidad}</td>
            <td><button onclick="turno(${item.id})" class="btn btn-success">Sacar Turno</button>
            </td> 
            `;
            estructuraFila.innerHTML= datos;
            contenedor.appendChild(estructuraFila);
            }
   

       });

      };

      const turno = (id) => {
        let paciente = personas.find(persona => persona.id === id);
        if (paciente) {
            let nuevoTurno = new Turno(
                paciente.id,
                paciente.nombre,
                `${paciente.nombre} ${paciente.apellido}`, // Ejemplo para nombre del médico, puedes ajustar según tus necesidades
                "Consulta General", // Descripción del turno
                paciente.localidad,
                "10:00 AM", // Ejemplo de horario, puedes ajustar según tus necesidades
                "Pendiente"
            );
            turnos.push(nuevoTurno);
            console.log(`Turno creado:`, nuevoTurno);
            localStorage.setItem("turnos", JSON.stringify(turnos));
        } else {
            console.log(`No se encontró la persona con id ${id}`);
        }
    };

  listarPacientes();
  
  