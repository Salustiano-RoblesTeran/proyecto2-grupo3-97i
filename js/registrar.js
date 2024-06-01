let users = [];

class User{
    constructor(first_name, last_name, age, department, email,medico = false, especialidad = null, password){
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


let form = document.getElementById('formulario');

const get_data = (event)=>{
    event.preventDefault();
    let first_name = document.getElementById('nombre').value;
    let last_name = document.getElementById("apellido").value;
    let age = document.getElementById("edad").value;
    let department = document.getElementById("departamento").value;
    let email = document.getElementById("exampleInputEmail1").value;
    let password = document.getElementById("password").value;
    

    

    let user = new User(first_name, last_name, age, department, email, password);

    users.push(user);
    localStorage.setItem("usuarios", JSON.stringify(users));
} 

document.querySelector("#button_submit").onclick=()=>{
    
    let password = document.getElementById("password").value;
    let confirmpassword = document.getElementById("confirm_password").value;

    if (password ==""){
        alert("Se requiere una contrasenã")
    }
    
    else if (password != confirmpassword) {
        alert("Las contraseñas deben ser iguales");
        return false

    }
    else if (password == confirmpassword){
        return true
    }
}


form.addEventListener('submit', get_data);