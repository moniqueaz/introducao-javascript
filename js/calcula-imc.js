var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");
for(var i = 0; i < pacientes.length; i++){

	var paciente = pacientes[i];

	var tdPeso = paciente.querySelector(".info-peso");
	var peso = tdPeso.textContent;

	var tdAltura = paciente.querySelector(".info-altura");
	var altura = tdAltura.textContent;

	var pesoEhValido = validaPeso(peso);
	var alturaEhValido = validaAltura(altura);

	var tdIMC = paciente.querySelector(".info-imc");

	if(!pesoEhValido){
		//console.log("Peso inválido");
		tdIMC.textContent = "Peso Inválido";
		pesoEhValido = false;
		paciente.classList.add("paciente-invalido");
	}

	if(!alturaEhValido){
		//console.log("Altura inválido");
		tdIMC.textContent = "Altura Inválido";
		alturaEhValido = false;
		paciente.classList.add("paciente-invalido");
	}

	if(alturaEhValido && pesoEhValido){
		tdIMC.textContent = calculaImc(peso, altura);
	}

}

function calculaImc(peso, altura) {
    var imc = 0;
    imc = peso / (altura * altura);

    return imc.toFixed(2);
}

function validaPeso(peso){
	if(peso >= 0 && peso <= 1000){
		return true;
	}else{
		return false;
	}
}

function validaAltura(altura){
	if(altura >= 0 && altura <= 3.0){
		return true;
	}else{
		return false;
	}
}


