const user = JSON.parse(localStorage.getItem("SesionActiva"));
const baseDatos = JSON.parse(localStorage.getItem("usuarios")) || [];

let cerrarSesion = document.getElementById('cerrarSesion');

cerrarSesion.addEventListener('click', ()=> {
    window.location.href = "../index.html";
    localStorage.removeItem('SesionActiva');

})

const actualizar = () => {
    const usuario = baseDatos.find(usuario => usuario.id === user.id);

    let nombreUsuario = document.getElementById('nombreUsuario');
    nombreUsuario.innerText = `${user.first_name} ${user.last_name}`;

    if (usuario) {
        // Rellenar los campos del formulario con los datos del usuario
        document.getElementById('nombre').value = usuario.first_name;
        document.getElementById('apellido').value = usuario.last_name;
        document.getElementById('edad').value = usuario.age;
        document.getElementById('departamento').value = usuario.department;
        document.getElementById('exampleInputEmail1').value = usuario.email;
        document.getElementById('password').value = usuario.password;

        // Event listener para guardar los cambios
        document.getElementById('guardar').addEventListener('click', () => {
            // Obtener los valores actualizados de los campos del formulario
            usuario.first_name = document.getElementById('nombre').value;
            usuario.last_name = document.getElementById('apellido').value;
            usuario.age = document.getElementById('edad').value;
            usuario.department = document.getElementById('departamento').value;
            usuario.email = document.getElementById('exampleInputEmail1').value;
            usuario.password = document.getElementById('password').value;

            localStorage.setItem('usuarios', JSON.stringify(baseDatos));
            const user = baseDatos.find(user => user.id === usuario.id);
            localStorage.setItem('SesionActiva', JSON.stringify(user));

        });
    }
};

actualizar();
