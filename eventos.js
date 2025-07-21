// Seleccionar un elemento 
let boton = document.getElementById("miBoton");
let boton2 = document.getElementById("boton2");
let caja = document.getElementById("caja");

// Agregar un evento de Click
boton.addEventListener("click", function(){
    caja.classList.add("highlight");
})

boton2.addEventListener("click", function(){
    caja.classList.remove("highlight");
})

/*let suma = 0;

for (let i=0; i < 11; i++){
    suma += i
}

//  caja.textContent = " La suma de los primeros 10 numeros es " + suma

let contador = 0;
while (contador < 5) {
    console.log('Contador: ' + contador);
    contador++;
} */

let nombres = ["Carlos","Pedro","Maria","Juan","Jose","Rosa"]

for (let nombre of nombres){
    console.log(nombre)
}


