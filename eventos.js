// Seleccionar un elemento 
let boton = document.getElementById("miBoton");

// Agregar un evento de Click
boton.addEventListener("click", function(){
    alert("¡Botón clickeado!");
})

document.addEventListener("keydown", function(evento) {
    console.log(evento)
    console.log("Tecla presionada: " + evento.key);
});