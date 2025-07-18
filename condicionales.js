input_edad = document.getElementById("edad")
let respuesta = document.getElementById("respuesta")


function verificar(){
    let edad = input_edad.value;

    if (edad >= 60) {
        respuesta.textContent = "Eres Adulto Mayor"
    } else if ( edad >= 18) {
        respuesta.textContent = "Eres Mayor de edad"
    } else {
        respuesta.textContent = "Eres Menor de edad"
    }
}

let respuesta2 = document.getElementById("respuesta2")
let input_numero1 = document.getElementById("numero1")
let input_numero2 = document.getElementById("numero2")

function verificar1(){
    let a = parseFloat(input_numero1.value);
    let b = parseFloat(input_numero2.value);

    if (a > b){
        respuesta2.textContent = a + " es mayor que " + b
    } else if (a < b) {
        respuesta2.textContent = a + " es menor que " + b
    } else{
        respuesta2.textContent = a + " es igual " + b
    }

}

let respuesta3 = document.getElementById("respuesta3")
let input_trabajo = document.getElementById("trabajo")
let input_horas = document.getElementById("horas")

function verificar2(){

    let h = input_horas.value
    let t = input_trabajo.value

    if (h == "si" && t == "si"){
        respuesta3.textContent = "El Campista aprobó"
    } else {
        respuesta3.textContent = "El Campista no logro aprobar"
    }

}