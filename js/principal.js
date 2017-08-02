var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var paciente = document.querySelector("#primeiro-paciente");

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var imc = peso / (altura*2);

var tdIMC = paciente.querySelector(".info-imc");

tdIMC.textContent = imc;





console.log(paciente);
console.log(peso);
console.log(altura);