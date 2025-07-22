// Convertir a JSON para almacenar objetos
let usuario = {nombre: "Juan", apellido: "Ramirez", edad: 30, telefono: 222222222, email: "juan@gmail.com"};
localStorage.setItem('usuario', JSON.stringify(usuario));

// convertir a JSON al recuperar
let usuarioRecuperado = JSON.parse(localStorage.getItem('usuario'));
const contenedor = document.getElementById("contenedor");
contenedor.textContent = usuarioRecuperado.nombre

