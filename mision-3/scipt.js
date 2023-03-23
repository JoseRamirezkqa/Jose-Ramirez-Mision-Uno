const table = document.querySelector("#table")
const buscar = document.querySelector("#buscar")
const indexOfAll = (arr, val) =>
    arr.reduce((acc, el, i) => (el === val ? [...acc, i] : acc), [])
//lets
let nombreArray = []
let areaArray = []
let repetida = []
let cont = 0
let index = -1
let ofAll
//funtion
function agregar() {
    table.innerHTML = `
    <div class="bg-[#F3F6FB] font-[700] text-[1.125rem] leading-[1.3613rem] h-[2.5rem]">
        Area
        <img src="assets/aling.svg" alt="" class="inline-block ml-[0.625rem]">
    </div>
    <div class="bg-[#F3F6FB] font-[700] text-[1.125rem] leading-[1.3613rem] h-[2.5rem]">
        Nombre
        <img src="assets/aling.svg" alt="" class="inline-block ml-[0.625rem]">
    </div>
    <div class="bg-[#F3F6FB] font-[700] text-[1.125rem] leading-[1.3613rem] h-[2.5rem]">
        Usuario
        <img src="assets/aling.svg" alt="" class="inline-block ml-[0.625rem]">
    </div>
    <div class="bg-[#F3F6FB] font-[700] text-[1.125rem] leading-[1.3613rem] h-[2.5rem]">
        Email
    </div>
    <div class="bg-[#F3F6FB] font-[700] text-[1.125rem] leading-[1.3613rem] h-[2.5rem]">
        Edad
        <img src="assets/aling.svg" alt="" class="inline-block ml-[0.625rem]">
    </div>`
    data = JSON.parse(localStorage.persona)
    console.log(data)
    for (let i = 0; i < data.length; i++) { 
        for (let j = 0; j < data.length; j++) {
            if (data[i].area == data[j].area && i != j && cont <= 1 )  {
                data.splice(i,0,data[j])
                console.log(data)
                console.log(j)
                repetida.push(j)
                repetida.forEach(el => {
                    data.splice(el+repetida.length,1)
                })              
                  console.log(repetida)
                cont += 1
            }
        }
        tableContent(data[i].area, data[i].nombre, data[i].apellido, data[i].usuario, data[i].email, data[i].edad)
        nombreArray.push(data[i].nombre)
    }
}
agregar()
buscar.addEventListener('keyup', (e) => {
    if (buscar.value != '') {
        index = indexOfAll(nombreArray, buscar.value)
        console.log(index)
        llenar()
    } else {
        table.innerHTML = ''
        agregar()
    }
})
function tableContent(area, nombre, apellido, usuario, email, edad, rowspan) {
    table.innerHTML += `
            <div class=" font-[700] text-[1.125rem] leading-[1.3613rem] h-[2.5rem] row-span-${rowspan}"> ${area}</div>
            <div class=" font-[700] text-[1.125rem] leading-[1.3613rem] h-[2.5rem]"> ${nombre}  ${apellido}</div>
            <div class=" font-[700] text-[1.125rem] leading-[1.3613rem] h-[2.5rem]"> ${usuario}</div>
            <div class=" font-[700] text-[1.125rem] leading-[1.3613rem] h-[2.5rem]"> ${email}</div>
            <div class=" font-[700] text-[1.125rem] leading-[1.3613rem] h-[2.5rem]"> ${edad}</div>
        `
}
function llenar() {
    table.innerHTML = `
            <div class="bg-[#F3F6FB] font-[700] text-[1.125rem] leading-[1.3613rem] h-[2.5rem] ">
                Area
                <img src="assets/aling.svg" alt="" class="inline-block ml-[0.625rem]">
            </div>
            <div class="bg-[#F3F6FB] font-[700] text-[1.125rem] leading-[1.3613rem] h-[2.5rem]">
                Nombre
                <img src="assets/aling.svg" alt="" class="inline-block ml-[0.625rem]">
            </div>
            <div class="bg-[#F3F6FB] font-[700] text-[1.125rem] leading-[1.3613rem] h-[2.5rem]">
                Usuario
                <img src="assets/aling.svg" alt="" class="inline-block ml-[0.625rem]">
            </div>
            <div class="bg-[#F3F6FB] font-[700] text-[1.125rem] leading-[1.3613rem] h-[2.5rem]">
                Email
            </div>
            <div class="bg-[#F3F6FB] font-[700] text-[1.125rem] leading-[1.3613rem] h-[2.5rem]">
                Edad
                <img src="assets/aling.svg" alt="" class="inline-block ml-[0.625rem]">
            </div>
       `
    if (index != '') {
        index.forEach(el => {
            let data = JSON.parse(localStorage.persona)
            let user = data[el]
            console.log(user)
            let nombre = user.nombre
            let apellido = user.apellido
            let edad = user.edad
            let email = user.email
            let usuario = user.usuario
            let area = user.area
            nombreArray.push(nombre)
            console.log(nombre, apellido, edad, email, usuario, area)
            table.innerHTML += `
            <div class=" font-[700] text-[1.125rem] leading-[1.3613rem] h-[2.5rem]"> ${area}</div>
            <div class=" font-[700] text-[1.125rem] leading-[1.3613rem] h-[2.5rem]"> ${nombre}  ${apellido}</div>
            <div class=" font-[700] text-[1.125rem] leading-[1.3613rem] h-[2.5rem]"> ${usuario}</div>
            <div class=" font-[700] text-[1.125rem] leading-[1.3613rem] h-[2.5rem]"> ${email}</div>
            <div class=" font-[700] text-[1.125rem] leading-[1.3613rem] h-[2.5rem]"> ${edad}</div>
                `

        });
    } else {
        agregar()
    }
    index = -1
}
/// mover
function crearUsuario() {
    location.href = 'buscar.html'
}