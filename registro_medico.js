let users = [];

class User {
  constructor(
    first_name,
    last_name,
    age,
    department,
    email,
    doctor = false,
    specialty = null,
    password
  ) {
    this.first_name = first_name;
    this.last_name = last_name;
    this.age = age;
    this.department = department;
    this.email = email;
    this.doctor = doctor;
    this.specialty = specialty;
    this.password = password;
  }
}

const display_especialidad = () => {
  let checkBox = document.getElementById("doctor");
  let specialty_field = document.getElementById("div_especialidad");

  if (checkBox.checked == true) {
    specialty_field.style.display = "block";
  } else {
    specialty_field.style.display = "none";
  }
};

let form = document.getElementById("formulario");

const get_data = (event) => {
  event.preventDefault();
  let first_name = document.getElementById("nombre").value;
  let last_name = document.getElementById("apellido").value;
  let age = document.getElementById("edad").value;
  let department = document.getElementById("departamento").value;
  let email = document.getElementById("exampleInputEmail1").value;
  let password = document.getElementById("password").value;
  let doctor = false;
  let specialty = null;

  let checkBox = document.getElementById("doctor");
  if (checkBox.checked == true) {
    doctor = true;
    specialty = document.getElementById("especialidad").value;
  } else {
    doctor = false;
    specialty = null;
  }

  let user = new User(
    first_name,
    last_name,
    age,
    department,
    email,
    doctor,
    specialty,
    password
  );

  users.push(user);
  localStorage.setItem("usuarios", JSON.stringify(users));

  document.getElementById("nombre").value = "";
  document.getElementById("apellido").value = "";
  document.getElementById("edad").value = "";
  document.getElementById("departamento").value = "";
  document.getElementById("exampleInputEmail1").value = "";
  document.getElementById("password").value = "";
  document.getElementById("confirm_password").value = "";
  document.getElementById("especialidad").value = "";
  document.getElementById("doctor").checked = false;
};

document.querySelector("#button_submit").onclick = () => {
  let password = document.getElementById("password").value;
  let confirmpassword = document.getElementById("confirm_password").value;

  if (password == "") {
    alert("Se requiere una contrasenã");
  } else if (password != confirmpassword) {
    alert("Las contraseñas deben ser iguales");
    return false;
  } else if (password == confirmpassword) {
    return true;
  }
};

form.addEventListener("submit", get_data);
