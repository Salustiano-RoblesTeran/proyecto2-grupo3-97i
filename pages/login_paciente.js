class registrados {
    constructor (correo, password) {
        this.correo = correo;
        this.password = password;
    }
}

let Login = document.getElementById ("LoginModal");

const LogIn = (event) => {
    event.preventDefault();

    let usuario = document.getElementById("inputCorreo").value;
    let password = document.getElementById ("inputPassI").value;

    if (usuario === registrados.usuario) {
        if (password === registrados.password) {
            localStorage.setItem("user", JSON.stringify(usuario));
        }
    } else {
        alert ("El correo o password son incorrectos!");
    }

};

document.getElementById("LoginModal").addEventListener("submit", LogIn);
