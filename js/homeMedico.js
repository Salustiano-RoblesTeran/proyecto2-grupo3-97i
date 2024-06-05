// Obtener datos de localStorage
const user = JSON.parse(localStorage.getItem("SesionActiva"));
const baseDatos = JSON.parse(localStorage.getItem("usuarios")) || [];
const turnos = JSON.parse(localStorage.getItem("turnos")) || [];

let cerrarSesion = document.getElementById('cerrarSesion');

cerrarSesion.addEventListener('click', ()=> {
    window.location.href = "../index.html";
    localStorage.removeItem('SesionActiva');
});

// Verificar si user tiene datos antes de intentar asignar valores
    let nombreUsuario = document.getElementById('nombreUsuario');
    nombreUsuario.innerText = `${user.first_name} ${user.last_name}`;

// Tabla pendientes
let contenedorPendientes = document.getElementById("contenedor-tabla-pendientes");
const listarPacientesPendientes = () => {

    contenedorPendientes.innerHTML = "";
    let turnosPendientes = turnos.filter(turno => turno.turnoEstado === "Pendiente" && turno.idMedico === user.id);

    if (turnosPendientes.length === 0) {
        contenedorPendientes.innerHTML = "<tr><td colspan='7'>No hay turnos pendientes</td></tr>";
        return;
    }
    
    turnosPendientes.forEach((turno) => {
        let estructuraFila = document.createElement("tr");
        let medico = baseDatos.find(medico => medico.id == turno.idMedico);
        // Creo la estructura de la tabla
        let datos = ` 
            <td>${turno.nombrePaciente}</td>
            <td>${turno.apellidoPaciente}</td>
            <td>${turno.dni}</td>
            <td>${turno.consulta}</td>
            <td>${turno.age} Años</td>
            <td>${medico.department}</td>
            <td>${turno.horario}</td>
            <td> 
                <button onclick="rechazar(${turno.idTurno})" class="btn btn-danger">Rechazar</button>
                <button onclick="aceptar(${turno.idTurno})" class="btn btn-success">Aceptar</button>
            </td> 
        `;
        estructuraFila.innerHTML = datos;
        contenedorPendientes.appendChild(estructuraFila);
    });
};

// Opciones de rechazar o aceptar
const rechazar = (idTurno) => {
    const turno = turnos.find(turno => turno.idTurno === idTurno);
    turno.turnoEstado = "Rechazado";
    localStorage.setItem("turnos", JSON.stringify(turnos));
    listarPacientesPendientes();
    listarPacientesAceptados();
    listarPacientesRechazados();
}

const aceptar = (idTurno) => {
    const turno = turnos.find(turno => turno.idTurno === idTurno);
    turno.turnoEstado = "Aceptado";
    localStorage.setItem("turnos", JSON.stringify(turnos));
    listarPacientesPendientes();
    listarPacientesAceptados();
    listarPacientesRechazados();
}

let contenedorAceptar = document.getElementById('contenedor-tabla-aceptados');

const listarPacientesAceptados = () => {
    contenedorAceptar.innerHTML = "";
    let turnosAceptados = turnos.filter(turno => turno.turnoEstado === "Aceptado" && turno.idMedico === user.id);
    
    if (turnosAceptados.length === 0) {
        contenedorAceptar.innerHTML = "<tr><td colspan='7'>No hay turnos aceptados</td></tr>";
        return;
    }
    
    turnosAceptados.forEach((turno) => {
        let estructuraFila = document.createElement("tr");
        let medico = baseDatos.find(medico => medico.id == turno.idMedico);

        // Creo la estructura de la tabla
        let datos = ` 
            <td>${turno.nombrePaciente}</td>
            <td>${turno.apellidoPaciente}</td>
            <td>${turno.dni}</td>
            <td>${turno.consulta}</td>
            <td>${turno.age} Años</td>
            <td>${medico.department}</td>
            <td>${turno.horario}</td>
            <td>${turno.turnoEstado}</td>
        `;
        estructuraFila.innerHTML = datos;
        contenedorAceptar.appendChild(estructuraFila);
    });
}

let contenedorRechazar = document.getElementById('contenedor-tabla-rechazados');

const listarPacientesRechazados = () => {
    contenedorRechazar.innerHTML = "";
    let turnosRechazados = turnos.filter(turno => turno.turnoEstado === "Rechazado" && turno.idMedico === user.id);
    
    if (turnosRechazados.length === 0) {
        contenedorRechazar.innerHTML = "<tr><td colspan='7'>No hay turnos Rechazados</td></tr>";
        return;
    }
    
    turnosRechazados.forEach((turno) => {
        let estructuraFila = document.createElement("tr");
        let medico = baseDatos.find(medico => medico.id == turno.idMedico);

        // Creo la estructura de la tabla
        let datos = ` 
            <td>${turno.nombrePaciente}</td>
            <td>${turno.apellidoPaciente}</td>
            <td>${turno.dni}</td>
            <td>${turno.consulta}</td>
            <td>${turno.age} Años</td>
            <td>${medico.department}</td>
            <td>${turno.horario}</td>
            <td>${turno.turnoEstado}</td>
        `;
        estructuraFila.innerHTML = datos;
        contenedorRechazar.appendChild(estructuraFila);
    });
}

// Llamamos a las funciones
listarPacientesPendientes();
listarPacientesAceptados();
listarPacientesRechazados();
