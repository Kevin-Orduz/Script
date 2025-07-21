//ejemplo de javascript sincronico
console.log("tarea 1");
console.log("tarea 2");
console.log("tarea 3");

/*
// Ejemplo de JavaScript Asincrónico con setTimeout
console.log("Inicio");
setTimeout(() => {
    console.log("Tarea Asincrónica");
}, 2000);
console.log("Fin"); */

// Ejemplo de async/await
async function fetchData() {
    let respuesta = await fetch('https://jsonplaceholder.typicode.com/posts');
    let data = await respuesta.json();
    console.log(data);
    for(let dato of data){
        const fila = document.createElement("tr")

        const col1 = document.createElement("td")
        col1.textContent = dato.id
        const col2 = document.createElement("td")
        col2.textContent = dato.id
        const col3 = document.createElement("td")
        col3.textContent = dato.id
        const col4 = document.createElement("td")
        col4.textContent = dato.id

        console.log(dato.id);
        console.log(dato.title);
        console.log(dato.userId);
        console.log(dato.body);

        fila.appendChild(col1)
        col1.appendChild(fila)

    }
    
}
