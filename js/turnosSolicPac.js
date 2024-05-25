let turnos = [
    {
        nombreMedico: "Juan Perez",
        especialidad: "Pediatra",
        horario: {
            fecha: "22/05/2024",
            hora: "10:00 AM"
        },
        descripcion: "Tengo dolor de garganta y cabeza hace 3 días",
        turnoAprobado: true
    },
    {
        nombreMedico: "Francisco Ruiz",
        especialidad: "Dentista",
        horario: {
            fecha: "22/05/2024",
            hora: "10:30 AM"
        },
        descripcion: "Tengo una carie",
        turnoAprobado: false
    }
];

const imprimirTurnos = () => {
    let contenidoTabla = document.querySelector(".contenidoTabla");
    turnos.forEach((turno) => {
        let fila = document.createElement('tr');
        fila.innerHTML = `
            <td>${turno.nombreMedico}</td>
            <td>${turno.especialidad}</td>
            <td>${turno.horario.fecha} ${turno.horario.hora}</td>
            <td>${turno.descripcion}</td>
            <td>${turno.turnoAprobado ? 'Aprobado' : 'Pendiente'}</td>
        `;
        contenidoTabla.appendChild(fila);
    });
}

imprimirTurnos();
