const table = document.querySelector("#table")
const buscar = document.querySelector("#buscar")
//lets
let nombreArray = []
let bandera = false
let index = -1
//funtion
function agregar() {
    if (localStorage.length != 0) {
        for (let i = 0; i < localStorage.length; i++) {
            let user = JSON.parse(localStorage.getItem(i))
            let nombre = user.nombre
            let apellido = user.apellido
            let edad = user.edad
            let email = user.email
            let usuario = user.usuario
            let area = user.area
            nombreArray.push(nombre)
            console.log(nombre, apellido, edad, email, usuario, area)
            table.innerHTML += `
                <tr class=" font-[700] text-[1.125rem] leading-[1.3613rem] h-[2.5rem]">
                    <th> ${area}</th>
                    <th> ${nombre}  ${apellido}</th>
                    <th> ${usuario}</th>
                    <th> ${email}</th>
                    <th> ${edad}</th>
                </tr>
                `
        }

    }
}
agregar()
buscar.addEventListener('keydown', (e) => {
    if (e.keyCode == 13) {
        if (buscar.value != '') {
             index = indexOfAll(nombreArray,buscar.value)
             console.log(index)
            llenar()
        }
    }
})

function llenar() {
    if (index != '') {
        table.innerHTML =`<tr class="bg-[#F3F6FB] font-[700] text-[1.125rem] leading-[1.3613rem] h-[2.5rem]">
        <th>
            Area
            <img src="assets/aling.svg" alt="" class="inline-block ml-[0.625rem]">
        </th>
        <th>
            Nombre
            <img src="assets/aling.svg" alt="" class="inline-block ml-[0.625rem]">
        </th>
        <th>
            Usuario
            <img src="assets/aling.svg" alt="" class="inline-block ml-[0.625rem]">
        </th>
        <th>
            Email
        </th>
        <th>
            Edad
            <img src="assets/aling.svg" alt="" class="inline-block ml-[0.625rem]">
        </th>
    </tr>`
        index.forEach(el => {
            let user = JSON.parse(localStorage.getItem(el))
            let nombre = user.nombre
            let apellido = user.apellido
            let edad = user.edad
            let email = user.email
            let usuario = user.usuario
            let area = user.area
            nombreArray.push(nombre)
            console.log(nombre, apellido, edad, email, usuario, area)
            table.innerHTML += `
                
                <tr class=" font-[700] text-[1.125rem] leading-[1.3613rem] h-[2.5rem]">
                    <th> ${area}</th>
                    <th> ${nombre}  ${apellido}</th>
                    <th> ${usuario}</th>
                    <th> ${email}</th>
                    <th> ${edad}</th>
                </tr>
                `
            
        });
    }else {
        alert('no hay nadie registrado con ese nombre')
    }
    index = -1
}
const indexOfAll = (arr, val) =>
  arr.reduce((acc, el, i) => (el === val ? [...acc, i] : acc), [])
/// mover
function crearUsuario() {
    location.href = 'buscar.html'
}