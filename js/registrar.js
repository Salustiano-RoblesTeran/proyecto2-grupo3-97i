// creamos la clase usuarios, con todos sus atributos
class User {
    constructor(id, first_name, last_name, age, department, email, password, medico = false, especialidad = null) {
        this.id = id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.age = age;
        this.department = department;
        this.email = email;
        this.password = password;
        this.medico = medico;
        this.especialidad = especialidad;
    }
}


const admin = {
    email: "admin@gmail.com",
    password: "admin@1234"
}

// Traemos los usuarios del locaStorage
const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

let formRegistro = document.getElementById('formularioRegistro');



const crearUsuario = (event) => {
    event.preventDefault();

    let id = new Date().getTime();
    let first_name = document.getElementById('nombre').value;
    let last_name = document.getElementById("apellido").value;
    let age = document.getElementById("edad").value;
    let department = document.getElementById("departamento").value;
    let email = document.getElementById("exampleInputEmail1").value;
    let password = document.getElementById("password").value;
    let confirm_password = document.getElementById("confirm_password").value;

    if (password === confirm_password) {
        let user = new User(id, first_name, last_name, age, department, email, password,false,null);

        usuarios.push(user);
        localStorage.setItem("usuarios", JSON.stringify(usuarios));
        alert("Registro exitoso.");
        window.location.href = "./index.html";
    } else {
        alert("Las contraseña no coinciden!");
    }

}


formRegistro.addEventListener('submit', crearUsuario);

let formLogin = document.getElementById('formularioLogin');

const login = (event) => {
    event.preventDefault();
    const email = document.getElementById('login_username').value;
    const password = document.getElementById('login_password').value;

    if (admin.email === email && admin.password === password) {
        alert("Inicio de sesión exitoso");
        window.location.href = "../pages/panelAdmin.html";
        localStorage.setItem("SesionActiva", JSON.stringify(admin));
    }

    const user = usuarios.find(user => user.email === email && user.password === password);

    if (!user) {

        alert("Correo electrónico o contraseña incorrectos");
    } else if (user.medico) {
        alert("Inicio de sesión exitoso");
        window.location.href = "../pages/homeMedico.html";
        localStorage.setItem("SesionActiva", JSON.stringify(user));


        } else {
            alert("Inicio de sesión exitoso");
            window.location.href = "../pages/homePaciente.html";
            localStorage.setItem("SesionActiva", JSON.stringify(user));
    }
}

formLogin.addEventListener('submit', login);