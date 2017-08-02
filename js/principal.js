var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var paciente = document.querySelector("#primeiro-paciente");

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var pesoEhValido = true;
var alturaEhValido = true;

var tdIMC = paciente.querySelector(".info-imc");

if(peso <= 0 || peso >= 500){
	console.log("Peso inválido");
	tdIMC.textContent = "Peso Inválido";
	pesoEhValido = false;
}

if(altura <= 0 || altura >= 3.0){
	console.log("Altura inválido");
	tdIMC.textContent = "Altura Inválido";
	alturaEhValido = false;
}

if(alturaEhValido && pesoEhValido){
	var imc = peso / (altura*2);
	tdIMC.textContent = imc;
}








console.log(paciente);
console.log(peso);
console.log(altura);