// creamos la clase usuarios, con todos sus atributos
class User {
    constructor(id, first_name, last_name, age, department, email, medico = false, especialidad = null, password) {
        this.id = id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.age = age;
        this.department = department;
        this.email = email;
        this.medico = medico;
        this.especialidad = especialidad;
        this.password = password;
    }
}

// Traemos los usuarios del locaStorage
const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

let formRegistro = document.getElementById('formularioRegistro');

const mostrarEspecialidad = () => {
    let checkBox = document.getElementById('medico');
    let inputEspecialidad = document.getElementById('inputEspecialidad');
    if (checkBox.checked) {
        inputEspecialidad.style.display = 'block'
    } else {
        inputEspecialidad.style.display = 'none'
    }
}

const crearUsuario = (event) => {
    event.preventDefault();

    let id = new Date().getTime();
    let first_name = document.getElementById('nombre').value;
    let last_name = document.getElementById("apellido").value;
    let age = document.getElementById("edad").value;
    let department = document.getElementById("departamento").value;
    let email = document.getElementById("exampleInputEmail1").value;
    let medico = document.getElementById('medico').checked;
    let especialidad = medico ? document.getElementById('especialidadMedico').value : null;
    let password = document.getElementById("password").value;

    let user = new User(id, first_name, last_name, age, department, email, medico, especialidad, password);

    usuarios.push(user);
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
}

formRegistro.addEventListener('submit', crearUsuario);

let formLogin = document.getElementById('formularioLogin');

const login = (event) => {
    event.preventDefault();
    const email = document.getElementById('login_username').value;
    const password = document.getElementById('login_password').value;

    const user = usuarios.find(user => user.email === email && user.password === password);

    if (user) {
        alert("Inicio de sesión exitoso");
        console.log(user)
        localStorage.setItem("SesionActiva", JSON.stringify(user));
        if (user.medico) {
            window.location.href = "../pages/homeMedico.html";
        } else {
            window.location.href = "../pages/homePaciente.html";
        }
        // Aquí puedes redirigir al usuario a otra página, mostrar un mensaje de bienvenida, etc.
        
    } else {
        alert("Correo electrónico o contraseña incorrectos");
    }
}

formLogin.addEventListener('submit', login);
