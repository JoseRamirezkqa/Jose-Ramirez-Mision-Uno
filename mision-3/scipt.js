const table = document.querySelector("#table")
const buscar = document.querySelector("#buscar")
const indexOfAll = (arr, val) =>
  arr.reduce((acc, el, i) => (el === val ? [...acc, i] : acc), [])
//lets
let userArray = []
let nombreArray = [] 
let areaArray = []
let bandera = false
let repetida = false
let cont = 0
let index = -1
let ofAll
//funtion
function agregar() {
    if (localStorage.length != 0) {
        for(let i = 0; i < localStorage.length; i++){
            let user = JSON.parse(localStorage.getItem(i))
            let area = user.area
            areaArray.push(area)
            areaArray.forEach(el => {
                if(el == area){
                 repetida = el   
                 console.log(repetida)
                }
            })
        }
        ofAll = indexOfAll(areaArray,repetida)
        console.log(ofAll)
        for (let i = 0; i < localStorage.length; i++) {
            let user = JSON.parse(localStorage.getItem(i))
            let nombre = user.nombre
            let apellido = user.apellido
            let edad = user.edad
            let email = user.email
            let usuario = user.usuario
            let area = user.area
            nombreArray.push(nombre)
            userArray.push(user)
            if(area != repetida ){
                tableContent(area,nombre,apellido,usuario,email,edad,)
            }else if(cont == 0){
                ofAll.forEach(el => {
                doble(el,ofAll.length)
                })
                cont +=1
            }
            
        }
    }
    cont == 0
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
function tableContent(area,nombre,apellido,usuario,email,edad){
        table.innerHTML += `
            <div class=" font-[700] text-[1.125rem] leading-[1.3613rem] h-[2.5rem]"> ${area}</div>
            <div class=" font-[700] text-[1.125rem] leading-[1.3613rem] h-[2.5rem]"> ${nombre}  ${apellido}</div>
            <div class=" font-[700] text-[1.125rem] leading-[1.3613rem] h-[2.5rem]"> ${usuario}</div>
            <div class=" font-[700] text-[1.125rem] leading-[1.3613rem] h-[2.5rem]"> ${email}</div>
            <div class=" font-[700] text-[1.125rem] leading-[1.3613rem] h-[2.5rem]"> ${edad}</div>
        `  
}
function doble(index,rowspan){
    console.log(index)
    let user = JSON.parse(localStorage.getItem(index))
    let nombre = user.nombre
    let apellido = user.apellido
    let edad = user.edad
    let email = user.email
    let usuario = user.usuario
    let area = user.area
    console.log(ofAll[0])
    if(index == ofAll[0]){
        table.innerHTML += `
        <div class=" font-[700] text-[1.125rem] leading-[1.3613rem] h-[2.5rem] row-span-${ofAll.length} grid items-center	"> ${area}</div>
        <div class=" font-[700] text-[1.125rem] leading-[1.3613rem] h-[2.5rem]"> ${nombre}  ${apellido}</div>
        <div class=" font-[700] text-[1.125rem] leading-[1.3613rem] h-[2.5rem]"> ${usuario}</div>
        <div class=" font-[700] text-[1.125rem] leading-[1.3613rem] h-[2.5rem]"> ${email}</div>
        <div class=" font-[700] text-[1.125rem] leading-[1.3613rem] h-[2.5rem]"> ${edad}</div>
        `  
    }else{
        table.innerHTML += `
        <div class=" font-[700] text-[1.125rem] leading-[1.3613rem] h-[2.5rem]"> ${nombre}  ${apellido}</div>
        <div class=" font-[700] text-[1.125rem] leading-[1.3613rem] h-[2.5rem]"> ${usuario}</div>
        <div class=" font-[700] text-[1.125rem] leading-[1.3613rem] h-[2.5rem]"> ${email}</div>
        <div class=" font-[700] text-[1.125rem] leading-[1.3613rem] h-[2.5rem]"> ${edad}</div>
        `
    }
}
function llenar() {
    if (index != '') {
        table.innerHTML =`
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
                </div>
           `
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
            <div class=" font-[700] text-[1.125rem] leading-[1.3613rem] h-[2.5rem]"> ${area}</div>
            <div class=" font-[700] text-[1.125rem] leading-[1.3613rem] h-[2.5rem]"> ${nombre}  ${apellido}</div>
            <div class=" font-[700] text-[1.125rem] leading-[1.3613rem] h-[2.5rem]"> ${usuario}</div>
            <div class=" font-[700] text-[1.125rem] leading-[1.3613rem] h-[2.5rem]"> ${email}</div>
            <div class=" font-[700] text-[1.125rem] leading-[1.3613rem] h-[2.5rem]"> ${edad}</div>
                `
            
        });
    }else {
        alert('no hay nadie registrado con ese nombre')
    }
    index = -1
}
/// mover
function crearUsuario() {
    location.href = 'buscar.html'
}