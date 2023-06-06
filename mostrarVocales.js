var frase = document.getElementById("fraseMostrar").value;
  mostrarVocales(frase);

function mostrarVocales(frase) {
  var vocales = obtenerVocales(frase);
  var resultDiv = document.getElementById("vocalesResultMostrar");
  resultDiv.innerHTML = "Las vocales en la frase son: " + vocales.join(", ");
}

function obtenerVocales(frase) {
  var vocales = [];
  var letras = frase.toLowerCase().split("");
  
  for (var i = 0; i < letras.length; i++) {
    if (esVocal(letras[i])) {
      vocales.push(letras[i]);
    }
  }
  
  return vocales;
}

function esVocal(letra) {
  return /[aeiouáéíóú]/.test(letra);
}