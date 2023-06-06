function contarVocales(frase) {
  var contador = {
    'a': 0,
    'e': 0,
    'i': 0,
    'o': 0,
    'u': 0,
    'á': 0,
    'é': 0,
    'í': 0,
    'ó': 0,
    'ú': 0
  };

  var letras = frase.toLowerCase().split("");

  for (var i = 0; i < letras.length; i++) {
    var letra = letras[i];
    if (esVocal(letra)) {
      contador[letra]++;
    }
  }

  return contador;
}

function contarVocalesFunc() {
  var frase = document.getElementById("fraseContar").value;
  var resultado = contarVocales(frase);
  var resultDiv = document.getElementById("vocalesResultContar");
  resultDiv.innerHTML = "Número de vocales:<br>" +
    "a: " + resultado["a"] + "<br>" +
    "e: " + resultado["e"] + "<br>" +
    "i: " + resultado["i"] + "<br>" +
    "o: " + resultado["o"] + "<br>" +
    "u: " + resultado["u"] + "<br>" +
    "á: " + resultado["á"] + "<br>" +
    "é: " + resultado["é"] + "<br>" +
    "í: " + resultado["í"] + "<br>" +
    "ó: " + resultado["ó"] + "<br>" +
    "ú: " + resultado["ú"] + "<br>";
}