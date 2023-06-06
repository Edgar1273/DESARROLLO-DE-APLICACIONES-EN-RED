// Ejemplo de uso de la función esPalindromo() del archivo palindromo.js
function esPalindromo(palabra) {
  var limpiada = palabra.replace(/[\W_]/g, '').toLowerCase();
  var reversa = limpiada.split('').reverse().join('');
  return limpiada === reversa;
}
