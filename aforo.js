// Obtener el elemento del contador de aforo
var aforoElement = document.getElementById("aforo");

// Inicializar el contador de participantes
var participantes = 0;

// Función para actualizar el contador de aforo
function actualizarAforo() {
  aforoElement.textContent = aforo - participantes;
}

// Escuchar el envío del formulario
document.querySelector("form").addEventListener("submit", function(event) {
  event.preventDefault(); // Evitar que se envíe el formulario por defecto
  
  // Obtener los datos del formulario
  var nombre = document.getElementById("nombre").value;
  var email = document.getElementById("email").value;
  // Obtener otros datos del formulario...
  
  // Realizar la validación y procesamiento de los datos
  
  // Incrementar el contador de participantes
  participantes++;
  
  // Actualizar el contador de aforo
  actualizarAforo();
  
  // Restablecer los campos del formulario
  document.getElementById("nombre").value = "";
  document.getElementById("email").value = "";
  // Restablecer otros campos del formulario...
});