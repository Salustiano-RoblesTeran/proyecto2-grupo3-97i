let reg = JSON.parse(localStorage.getItem ("usuariosregistrados")) || [];

class registrados {
    constructor (email, password) {
        this.email = email;
        this.password = password;
    }
}

let Login = document.getElementById ("LoginModal");

const LogIn = (event) => {
    event.preventDefault();

    let email = document.getElementById("inputCorreo").value;
    let password = document.getElementById ("inputPassI").value;

    if (email === registrados.email) {
        if (password === registrados.password) {
            localStorage.setItem("user", JSON.stringify(usuario));
        }
    } else {
        alert ("El correo o password son incorrectos!");
    }
};
