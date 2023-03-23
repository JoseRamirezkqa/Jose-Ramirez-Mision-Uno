// const
const nombre = document.querySelector('#nombre')
const apellido = document.querySelector("#apellido")
const edad = document.querySelector("#edad")
const email = document.querySelector("#email")
const usuario = document.querySelector("#usuario")
const area = document.querySelector("#area")
//lets
let key = 0
let usuarioArray = []
let clasesArray = []
let bandera = false
// class 
class Persona {
    nombre
    apellido
    edad
    email
    usuario
    area
    constructor(nombre, apellido, edad, email, usuario, area) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.email = email;
        this.usuario = usuario;
        this.area = area;

    }
}
//funciones
function guardar() {
    if (localStorage.length != 0) {
        let data = JSON.parse(localStorage.persona)
        for (let i = 0; i < data.length; i++) {
            usuarioArray.push(data[i].usuario)
        }
    }

    for (let i = 0; i < usuarioArray.length; i++) {
        if (usuario.value == usuarioArray[i]) {
            bandera = true;
        }
    }
    if (bandera == true) {
        alert('no se puede repetir usuarios')
    } else {
        if (localStorage.length != 0) {
            let data = JSON.parse(localStorage.persona)
            for (let i = 0; i < data.length; i++) {
                console.log(data[i])
                clasesArray.push(data[i])
            }
            const personaNew = new Persona(nombre.value, apellido.value, edad.value, email.value, usuario.value, area.value)
            clasesArray.push(personaNew)
            localStorage.persona = JSON.stringify(clasesArray)
        } else {
            const personaNew = new Persona(nombre.value, apellido.value, edad.value, email.value, usuario.value, area.value)
            clasesArray.push(personaNew)
            localStorage.persona = JSON.stringify(clasesArray)
        }
       volver()
    }
    console.log(localStorage.persona)
    bandera = false
}
//movimiento entre paginas
function volver() {
    location.href = 'index.html'
}