// Datos de ejemplo de médicos
const medicos = [
    { nombre: "Dr. Marcos Farías", especialidad: "Pediatría" },
    { nombre: "Dra. María Rodríguez", especialidad: "Nutrición" },
    { nombre: "Dr. Carlos López", especialidad: "Dermatología" },
    // Agrega más médicos aquí
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
  