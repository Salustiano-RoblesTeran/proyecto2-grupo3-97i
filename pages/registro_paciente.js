let usuarios = [];

class Usuario{
    constructor (id, name, lastName, email, password, cpassword, direccion, telefono, estado = true){
        this.id = id;
        this.name = name;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.cpassword = cpassword;
        this.direccion = direccion;
        this.telefono = telefono;
        this.estado = estado;
    }
    cambiarEstado() {
        this.estado = !this.estado;
    }
}

let formregistroP = document.getElementById("formregP");

const newUser = (event) => {
    event.preventDefault();

    let id = new Date().getTime();

    let name = document.getElementById("inputName").value;
    let lastName = document.getElementById("inputlastName").value;
    let email = document.getElementById("emailInput").value;
    let password = document.getElementById("inputPass").value;
    let cpassword = document.getElementById("inputPassC").value;
    let direccion = document.getElementById("inputDireccion").value;
    let telefono = document.getElementById("telInput").value;

    let usuario = new Usuario(id, name, lastName, email, password, cpassword, direccion, telefono);

    usuario.cambiarEstado();

    usuarios.push(usuario);
    localStorage.setItem("registrados", JSON.stringify(usuarios));

    document.querySelector("#buttonreg").onclick=()=>{
    if (password.length < 8){
        alert("La contraseña debe tener al menos 8 caracteres");
    } 
    else if (password !== cpassword){
        alert ("Las contraseñas no coinciden.");
    } 
    else if (password == cpassword){
        alert ("Su registro fue exitoso!");
    }
}
document.getElementById("inputName").value = "" ;
document.getElementById("inputlastName").value = "" ;
document.getElementById("emailInput").value = "" ;
document.getElementById("inputPass").value = "" ;
document.getElementById("inputPassC").value = "" ;
document.getElementById("inputDireccion").value = "" ;
document.getElementById("telInput").value = "" ;
};




    formregistroP.addEventListener('submit', newUser);




