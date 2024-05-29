// Datos de ejemplo de médicos
const medicos = [
    { nombre: "Dr. Marcos Farías", especialidad: "Pediatría", atencion:"lun a vie de 09:00 a 14:00"  },
    { nombre: "Dr. Augusto Sosa", especialidad: "Pediatría", atencion:"lun a vie de 14:00 a 22:00"  },
    { nombre: "Dra. María Rodríguez", especialidad: "Nutrición" , atencion:"lun a vie de 09:00 a 14:00" },
    { nombre: "Dra. Ricardo Sanchez", especialidad: "Nutrición" , atencion:"lun a vie de 14:00 a 22:00" },
    { nombre: "Dr. Carlos López", especialidad: "Dermatología", atencion:"lun a vie de 09:00 a 14:00"  },
    { nombre: "Dra. Lucía Vallejos", especialidad: "Dermatología", atencion:"lun a vie de 14:00 a 22:00"  },
    { nombre: "Dra. Beatriz Peña", especialidad: "Odontología", atencion:"lun a vie de 09:00 a 14:00"  },
    { nombre: "Dra. Beatriz Peña", especialidad: "Odontología", atencion:"lun a vie de 14:00 a 22:00"  },
    { nombre: "Dr. Pedro Acosta", especialidad: "Cardiología", atencion:"lun a vie de 09:00 a 14:00"  },
    { nombre: "Dr. Susana Paez", especialidad: "Cardiología", atencion:"lun a vie de 14:00 a 22:00"  },
    { nombre: "Dr.Fernando Alcaraz", especialidad: "Traumatología", atencion:"lun a vie de 09:00 a 14:00"  },
    { nombre: "Dr.Gustavo Marchetti ", especialidad: "Traumatología", atencion:"lun a vie de 14:00 a 22:00"  },
    { nombre: "Dra. Ana Velez ", especialidad: "radiología", atencion:"lun a vie de 09:00 a 14:00"  },
    { nombre: "Dr.Jaime Ferrari ", especialidad: "radiología", atencion:"lun a vie de 14:00 a 22:00"  },
    { nombre: "Dr.Gonzalo Silva ", especialidad: "Endocrinología", atencion:"lun a vie de 09:00 a 14:00"  },
    { nombre: "Dra. Fabiana Alvarado", especialidad: "Endocrinología", atencion:"lun a vie de 09:00 a 14:00"  },
    // Agregar más médicos 
  ];
  
  // Función para buscar médicos por especialidad
  function buscarMedicos() {
    const especialidadInput = document.getElementById("especialidadInput").value.trim().toLowerCase();
    const resultadosMedicos = document.getElementById("resultadosMedicos");
  
    // Limpiar resultados anteriores
    resultadosMedicos.innerHTML = "";
  
    // Filtrar médicos por especialidad
    const medicosFiltrados = medicos.filter(medico => medico.especialidad.toLowerCase().includes(especialidadInput));
  
    // Mostrar resultados
    if (medicosFiltrados.length > 0) {
      medicosFiltrados.forEach(medico => {
        const card = document.createElement("div");
        card.classList.add("col-md-4", "mb-4");
        card.innerHTML = `
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">${medico.nombre}</h5>
              <p class="card-text">${medico.especialidad}</p>
              <p class="card-text">${medico.atencion}</p>
              <button class="btn btn-primary" onclick="solicitarTurno('${medico.nombre}')">Solicitar Turno</button>
            </div>
          </div>
        `;
        resultadosMedicos.appendChild(card);
      });
    } else {
      resultadosMedicos.innerHTML = "<p>No se encontraron médicos con esa especialidad.</p>";
    }
  }
  
  // Función para solicitar turno con el médico seleccionado
  function solicitarTurno(nombreMedico) {
    alert(`Se solicitó un turno con el médico ${nombreMedico}`);
  }
  