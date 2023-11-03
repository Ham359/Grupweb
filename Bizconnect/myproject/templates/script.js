// Obtén los botones por sus IDs
var btnProyectos = document.getElementById("btnProyectos");
var btnInversionistas = document.getElementById("btnInversionistas");
var btnIniciarsesion = document.getElementById("btnIniciarsesion");
var btnIniciar = document.getElementById("btnIniciar");
// Agrega un evento de clic a cada botón
btnProyectos.addEventListener("click", function() {
    // Redirige a la página Form_Proy.html cuando se hace clic en el botón de Proyectos
    window.location.href = "Form_Proy.html";
});

btnInversionistas.addEventListener("click", function() {
    // Redirige a la página Form_Inve.html cuando se hace clic en el botón de Inversionistas
    window.location.href = "Form_Inve.html";
});

btnIniciarsesion.addEventListener("click", function() {
    // Redirige a la página contacto.html cuando se hace clic en el botón de Contacto
    window.location.href = "Iniciosesion.html";
});
btnIniciar.addEventListener("click", function() {
    // Redirige a la página contacto.html cuando se hace clic en el botón de Contacto
    window.location.href = "pinicial.html";
});