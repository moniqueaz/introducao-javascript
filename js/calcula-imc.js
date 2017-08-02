var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length; i++){

	var paciente = pacientes[i];

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
		tdIMC.textContent = calculaImc(peso, altura);
	}else{
		paciente.classList.add("paciente-invalido");
	}

}

function calculaImc(peso, altura) {
    var imc = 0;
    imc = peso / (altura * altura);

    return imc.toFixed(2);
}


