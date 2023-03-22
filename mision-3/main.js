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
    for (let i = 0; i < localStorage.length; i++) {
        key = parseInt(localStorage.key(i)) + 1
        let user = JSON.parse(localStorage.getItem(i))  
        usuarioArray.push(user.usuario)
    }
    for (let i = 0; i < usuarioArray.length; i++) {
        if (usuario.value == usuarioArray[i]) {
            bandera = true;
        } 
    }
    if(bandera == true){
        alert('no se puede repetir usuarios')       
    }else{
        const personaNew = new Persona(nombre.value, apellido.value, edad.value, email.value, usuario.value, area.value)
        localStorage.setItem(key, JSON.stringify(personaNew))
        volver()
    }
    bandera = false
}
//movimiento entre paginas
function volver() {
    location.href = 'index.html'
}