const input_nombre = document.getElementById("nombre")
const input_apellido = document.getElementById("apellido")
const input_email = document.getElementById("email")
const input_password = document.getElementById("password")
const boton = document.getElementById("registrarse")
let listaUsuario = []

if(localStorage.getItem("usuarios")){
    listaUsuario = JSON.parse(localStorage.getItem("usuarios"))
}

function registro(){
    let nombre = input_nombre.value
    let apellido = input_apellido.value
    let email = input_email.value
    let password = input_password.value

    let usuario = {"nombre":nombre, "apellido":apellido, "email":email, "password":password}
    listaUsuario.push(usuario)
    localStorage.setItem("usuarios", JSON.stringify(listaUsuario))

    alert("usuario guardado" + usuario)

    input_nombre.value = ""
    input_apellido.value = ""
    input_email.value = ""
    input_password.value = ""

    console.log(localStorage.getItem("usuarios"))
}

boton.addEventListener("click", registro)