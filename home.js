// Verifica si el usuario ha iniciado sesión antes de mostrar el contenido
function verificarAcceso() {
    // Recupera el estado de 'login' del localStorage
    const loginStatus = localStorage.getItem("login");

    // Si 'login' no existe o su valor no es '1', redirige al usuario a la página de login.html
    if (!loginStatus || loginStatus !== "1") {
        alert("Debes iniciar sesión para acceder a esta página.");
        window.location.href = "login.html"; // Redirige a la página de inicio de sesión
    }
}

// Llama a la función de verificación cuando la página se carga
document.addEventListener("DOMContentLoaded", verificarAcceso);