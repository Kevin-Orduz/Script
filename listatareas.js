const input_tarea = document.getElementById("tarea")
const input_fecha = document.getElementById("fecha")
const lista_tareas = document.getElementById("listaTareas")

function guardar_tarea(){
    let tarea = input_tarea.value
    let fecha = input_fecha.value

    const nuevoLi = document.createElement("li")
    nuevoLi.innerHTML = tarea + " - " + fecha
    lista_tareas.appendChild(nuevoLi)
}