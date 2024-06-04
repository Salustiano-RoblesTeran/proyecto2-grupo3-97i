// Obtener datos de localStorage
const user = JSON.parse(localStorage.getItem("SesionActiva"));
const baseDatos = JSON.parse(localStorage.getItem("usuarios")) || [];
const turnos = JSON.parse(localStorage.getItem("turnos")) || [];

class Turno {
    constructor(idTurno, idMedico, idPaciente, nombrePaciente, nombreMedico, consulta, dni, horario, turnoEstado) {
        this.idTurno = idTurno;
        this.idMedico = idMedico;
        this.idPaciente = idPaciente;
        this.nombrePaciente = nombrePaciente;
        this.nombreMedico = nombreMedico;
        this.consulta = consulta;
        this.dni = dni;
        this.horario = horario;
        this.turnoEstado = turnoEstado;
    }
}

// Verificar si user tiene datos antes de intentar asignar valores
if (user.first_name && user.last_name) {
    let nombreUsuario = document.getElementById('nombreUsuario');
    nombreUsuario.innerText = `${user.first_name} ${user.last_name}`;
}

let contenedor = document.getElementById("contenedor-tabla");

const listarMedicos = () => {
    contenedor.innerHTML = "";
    baseDatos.forEach((medicoDisponibles) => {
        if (medicoDisponibles.medico) {
            let estructuraFila = document.createElement("tr");
            let datos = `
                <td>${medicoDisponibles.first_name}</td>
                <td>${medicoDisponibles.last_name}</td>
                <td>${medicoDisponibles.especialidad}</td>
                <td>${medicoDisponibles.age} Años</td>
                <td>${medicoDisponibles.department}</td>
                <td><button class="btn btn-success" type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onclick="abrirModal(${medicoDisponibles.id})">Sacar Turno</button></td>
            `;
            estructuraFila.innerHTML = datos;
            contenedor.appendChild(estructuraFila);
        }
    });
};

const abrirModal = (id) => {
    let medico = baseDatos.find(medico => medico.id == id);
    if (medico) {
        let textTurno = document.getElementById('textTurno');
        textTurno.innerText = `Usted, ${user.first_name} ${user.last_name}, quiere sacar turno con el medico ${medico.first_name} ${medico.last_name} en la especialidad ${medico.especialidad}.`;

        let formularioTurno = document.getElementById('formularioTurno');
        formularioTurno.onsubmit = (event) => {
            event.preventDefault();
            
            let idTurno = new Date().getTime();
            let dni = document.getElementById('dni').value;
            let consulta = document.getElementById('consulta').value;
            let horario = document.getElementById('turno').value;

            let nuevoTurno = new Turno(idTurno, medico.id, user.id, user.first_name, medico.first_name, consulta, dni, horario, 'Pendiente');
            turnos.push(nuevoTurno);
            localStorage.setItem("turnos", JSON.stringify(turnos));
        };
    }
};

listarMedicos();
