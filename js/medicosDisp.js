let usuarios = [
    {
        "id": 1110,
        "nombre": "Salustiano Robles Teran",
        "direccion": "Camino de sirga y san martin",
        "localidad": "Yerba Buena",
        "medico": true,
        "especialidad": "Pediatra"
    },
    {
        "id": 1111,
        "nombre": "Marta Gomez Perez",
        "direccion": "Avenida del Sol 123",
        "localidad": "San Miguel",
        "medico": true,
        "especialidad": "Cardiologo"
    },
    {
        "id": 1112,
        "nombre": "Juan Carlos Ramirez",
        "direccion": "Calle Falsa 456",
        "localidad": "Tafí Viejo",
        "medico": false,
        "especialidad": null
    },
    {
        "id": 1113,
        "nombre": "Ana María López",
        "direccion": "Boulevard de los Sueños Rotos 789",
        "localidad": "Bella Vista",
        "medico": true,
        "especialidad": "Dermatologo"
    },
    {
        "id": 1114,
        "nombre": "Carlos Alberto Fernández",
        "direccion": "Ruta 9 km 123",
        "localidad": "Lules",
        "medico": false,
        "especialidad": null
    },
    {
        "id": 1115,
        "nombre": "Sofía Martínez",
        "direccion": "Callejón de los Milagros 12",
        "localidad": "Yerba Buena",
        "medico": true,
        "especialidad": "Ginecologo"
    },
    {
        "id": 1116,
        "nombre": "Raúl Torres",
        "direccion": "Pasaje del Olvido 34",
        "localidad": "San Miguel",
        "medico": false,
        "especialidad": null
    },
    {
        "id": 1117,
        "nombre": "Liliana Morales",
        "direccion": "Calle del Pino 56",
        "localidad": "Tafí Viejo",
        "medico": true,
        "especialidad": "Oftalmologo"
    },
    {
        "id": 1118,
        "nombre": "Ricardo Sánchez",
        "direccion": "Avenida Siempre Viva 78",
        "localidad": "Bella Vista",
        "medico": false,
        "especialidad": null
    },
    {
        "id": 1119,
        "nombre": "Mariana Aguilar",
        "direccion": "Camino del Inca 90",
        "localidad": "Lules",
        "medico": true,
        "especialidad": "Neurologo"
    },
    {
        "id": 1120,
        "nombre": "Fernando Díaz",
        "direccion": "Pasaje de la Luna 123",
        "localidad": "Yerba Buena",
        "medico": false,
        "especialidad": null
    },
    {
        "id": 1121,
        "nombre": "Laura Herrera",
        "direccion": "Calle del Sol 456",
        "localidad": "San Miguel",
        "medico": true,
        "especialidad": "Psiquiatra"
    },
    {
        "id": 1122,
        "nombre": "Javier Rojas",
        "direccion": "Avenida del Parque 789",
        "localidad": "Tafí Viejo",
        "medico": false,
        "especialidad": null
    },
    {
        "id": 1123,
        "nombre": "Verónica Ruiz",
        "direccion": "Boulevard de los Poetas 101",
        "localidad": "Bella Vista",
        "medico": true,
        "especialidad": "Traumatologo"
    },
    {
        "id": 1124,
        "nombre": "Pablo Castillo",
        "direccion": "Ruta del Vino 234",
        "localidad": "Lules",
        "medico": false,
        "especialidad": null
    },
    {
        "id": 1125,
        "nombre": "Lucía Romero",
        "direccion": "Calle de la Amistad 567",
        "localidad": "Yerba Buena",
        "medico": true,
        "especialidad": "Endocrinologo"
    },
    {
        "id": 1126,
        "nombre": "Gabriel Vargas",
        "direccion": "Pasaje de las Flores 890",
        "localidad": "San Miguel",
        "medico": false,
        "especialidad": null
    },
    {
        "id": 1127,
        "nombre": "Isabel Gutiérrez",
        "direccion": "Calle de la Paz 123",
        "localidad": "Tafí Viejo",
        "medico": true,
        "especialidad": "Gastroenterologo"
    },
    {
        "id": 1128,
        "nombre": "Oscar Alvarez",
        "direccion": "Avenida de los Tilos 456",
        "localidad": "Bella Vista",
        "medico": false,
        "especialidad": null
    },
    {
        "id": 1129,
        "nombre": "Patricia Ortega",
        "direccion": "Boulevard del Este 789",
        "localidad": "Lules",
        "medico": true,
        "especialidad": "Nefrologo"
    }
];

const imprimirMedicos = () => {
    usuarios.forEach((usuario) => {
        if (usuario.medico) {
            let fila = document.createElement('tr');
            fila.innerHTML = `
                <td>${usuario.nombre}</td>
                <td>${usuario.especialidad}</td>
                <td>${usuario.localidad}</td>
            `;
        }
    });
}

imprimirMedicos();