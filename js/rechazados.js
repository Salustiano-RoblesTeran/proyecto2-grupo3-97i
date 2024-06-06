const user = JSON.parse(localStorage.getItem("SesionActiva"));
const turnos = JSON.parse(localStorage.getItem("turnos")) || [];
const baseDatos = JSON.parse(localStorage.getItem("usuarios")) || [];

let nombreUsuario = document.getElementById('nombreUsuario');
nombreUsuario.innerText = `${user.first_name} ${user.last_name}`;

let cerrarSesion = document.getElementById('cerrarSesion');
cerrarSesion.addEventListener('click', () => {
    window.location.href = "../index.html";
    localStorage.removeItem('SesionActiva');
});

const listarPacientes = () => {
    let contenedor = document.getElementById("contenedor-tabla");
    contenedor.innerHTML = "";

    let turnosRechazados = turnos.filter(turno => turno.turnoEstado === "Rechazado");

    if (turnosRechazados.length > 0) {
        turnosRechazados.forEach((turno) => {
            let estructuraFila = document.createElement("tr");
            
            // Asegúrate de que `medico` existe
                let datos = `
                    <td>${turno.nombreMedico}</td>
                    <td>${turno.dni}</td>
                    <td>${turno.consulta}</td>
                    <td>${turno.age} Años</td>
                    <td>${turno.department}</td>
                    <td>${turno.horario}</td>
                    <td>${turno.turnoEstado}</td>
                `;
                estructuraFila.innerHTML = datos;
                contenedor.appendChild(estructuraFila);
        });
    } else {
        contenedor.innerHTML = "<tr><td colspan='7'>No hay turnos rechazados</td></tr>";
    }
};

listarPacientes();
