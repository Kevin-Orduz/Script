
const titulo = document.getElementById('miTitulo');
console.log(titulo)
// seleccion por clase
const elementos = document.getElementsByClassName('miClase');
console.log(elementos)
// Seleccion por selector css
const parrafo = document.querySelector('p');
console.log(parrafo)

const todosLosParrafos = document.querySelectorAll('p');
console.log(todosLosParrafos)

const link = document.querySelector('a');
console.log(link)

function cambiar(){
    titulo.textContent = "Nuevo titulo JavaScript"
    parrafo.innerHTML = " Texto del parrafo <b> Principal </b>"
}

function original(){
    titulo.textContent = "titulo principal"
    parrafo.innerHTML = "parrafor inicial"
}

function enlacef(){
    const enlace= document.querySelector('a');
    enlace.setAttribute('href', 'https://www.facebook.com')
    link.textContent = "Facebook"

}
function enlaceg(){
    const enlace= document.querySelector('a');
    enlace.setAttribute('href', 'https://google.com')
    link.textContent = "Google"
}
