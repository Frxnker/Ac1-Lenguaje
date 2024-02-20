/*
function calcularOperacion() {
    let numero1 = parseFloat(document.getElementById("numero1").value);
    let numero2 = parseFloat(document.getElementById("numero2").value);
    let operacion = document.getElementById("operacion").value;
    let resultado = document.getElementById("parrafo4");

    if (isNaN(numero1) || isNaN(numero2)) {
        resultado.innerHTML = "Introduce un número válido";
        return;
    }
}
*/

// Función para el ejercicio 1
function ejercicio1() {
    var mensaje = document.getElementById("mensaje1").value;
    console.log("Mensaje del ejercicio 1: " + mensaje);
  }
  
  // Función para el ejercicio 2
  function ejercicio2() {
    var mensaje = document.getElementById("mensaje2").value;
    alert("Mensaje del ejercicio 2: " + mensaje);
  }
  
  // Función para el ejercicio 3
  function ejercicio3() {
    var mensaje = document.getElementById("mensaje3").value;
    document.getElementById("parrafo1").innerHTML = "Mensaje del ejercicio 3: " + mensaje;
  }
  
  // Función para el ejercicio 4
  function ejercicio4() {
    var mensaje = prompt("Ingresa un mensaje para el ejercicio 4:");
    console.log("Mensaje del ejercicio 4: " + mensaje);
  }
  
  // Función para el ejercicio 5
  function ejercicio5() {
    var mensaje = prompt("Ingresa un mensaje para el ejercicio 5:");
    alert("Mensaje del ejercicio 5: " + mensaje);
  }
  
  // Función para el ejercicio 6
  function ejercicio6() {
    var mensaje = prompt("Ingresa un mensaje para el ejercicio 6:");
    document.getElementById("parrafo2").innerHTML = "Mensaje del ejercicio 6: " + mensaje;
  }
  