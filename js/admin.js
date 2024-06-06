const user = JSON.parse(localStorage.getItem("SesionActiva"));
const baseDatos = JSON.parse(localStorage.getItem("usuarios")) || [];

let contenedor = document.getElementById("contenedor-tabla");

let cerrarSesion = document.getElementById('cerrarSesion');

cerrarSesion.addEventListener('click', ()=> {
    window.location.href = "../index.html";
    localStorage.removeItem('SesionActiva');

})


const listarUsuarios = () => {
    contenedor.innerHTML = "";
    baseDatos.forEach((usuario) => {
        let estructuraFila = document.createElement("tr");
        let datos = `
            <td>${usuario.first_name}</td>
            <td>${usuario.last_name}</td>
            <td>${usuario.age} Años</td>
            <td>${usuario.department}</td>
            <td>${usuario.especialidad == null ? "-" : usuario.especialidad}</td>
            <td><button class="btn btn-success" type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onclick="abrirModal(${usuario.id})">Accion</button></td>
        `;
        estructuraFila.innerHTML = datos;
        contenedor.appendChild(estructuraFila);
    });
};

const mostrarEspecialidad = () => {
    let checkBox = document.getElementById('medico');
    let inputEspecialidad = document.getElementById('inputEspecialidad');
    if (checkBox.checked) {
        inputEspecialidad.style.display = 'block';
    } else {
        inputEspecialidad.style.display = 'none';
    }
};

const abrirModal = (id) => {
    let checkBox = document.getElementById('medico');
    let inputEspecialidad = document.getElementById('especialidadMedico');
    let usuario = baseDatos.find(medico => medico.id == id);

    // Reset modal fields
    checkBox.checked = usuario.medico || false;
    inputEspecialidad.value = usuario.especialidad || '';
    mostrarEspecialidad();

    let formularioEstado = document.getElementById('formularioEstado');
    formularioEstado.onsubmit = (event) => {
        event.preventDefault();
        usuario.medico = checkBox.checked;
        usuario.especialidad = checkBox.checked ? inputEspecialidad.value : null;
        localStorage.setItem("usuarios", JSON.stringify(baseDatos));
        listarUsuarios();
        let modal = bootstrap.Modal.getInstance(document.getElementById('staticBackdrop'));
        modal.hide();
    };
};

listarUsuarios();
