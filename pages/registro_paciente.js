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


let usuarios = [
//     //ejemplo BD
//     {
//         name: "Michael",
//         lastName: "Lawson",
//         email: "michael.lawson@reqres.in",
//         password: 22237,
//         cpassword: 22237,
//         direccion: "lola mora 444",
//         telefono: 7492383,
//       }
    ];
//     console.log(usuarios);


// //enviar arreglo a la BD (localstorage)
// localStorage.setItem("usuarios", JSON.stringify(usuarios));

//recibo los datos del local, pero si no encuentra nada en la base de datos, arranca con un arreglo vacio
const data = JSON.parse(localStorage.getItem("usuarios")) || [];

//capturo el contenedor HTML donde apareceran los usuarios
let formulario = document.getElementById("formulario");
console.log(formulario);


//let usuario1 = new Usuario ("Luciana", "Gallardo", "22", "luciana@gmail.com", "1111", "lomas", "2232134" );

// console.log(usuario1);
// usuario1.cambiarEstado();



//ver de terminar cada uno de los campos del formulario y detener tambien el submit del login
const agregarUsuario = (event) => {
    //detener el submit
    event.preventDefault();

    //creamos el id
    let id = new Date().getTime();

    //capturar los datos del form HTML 
    let name = document.getElementById("inputName").value;
    let lastName = document.getElementById("inputlastName").value;
    let email = document.getElementById("emailInput").value;
    let password = document.getElementById("inputPass").value;
    let cpassword = document.getElementById("inputPassC").value;
    let direccion = document.getElementById("inputDireccion").value;
    let telefono = document.getElementById("telInput").value;

        //validaciones


        //creamos nuevo usuario
    let usuario = new Usuario(id, name, lastName, email, password, cpassword, direccion, telefono);


    //Enviar a base de datos - localStorage
    data.push(usuario);
localStorage.setItem("usuarios", JSON.stringify(data));


//limpiar el contenedor del form
document.getElementById("inputName").value = "" ;
document.getElementById("inputlastName").value = "" ;
document.getElementById("emailInput").value = "" ;
document.getElementById("inputPass").value = "" ;
document.getElementById("inputPassC").value = "" ;
document.getElementById("inputDireccion").value = "" ;
document.getElementById("telInput").value = "" ;


//imprimir en html msj "tu registro fue exitoso"
};

