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
		var imc = peso / (altura*2);
		tdIMC.textContent = imc.toFixed(2);
	}else{
		paciente.classList.add("paciente-invalido");
	}

}

var butaoAdicionar = document.querySelector("#adicionar-paciente");

butaoAdicionar.addEventListener("click", function(event){
	event.preventDefault(); // previne o comportamento padrão
	
	var form = document.querySelector("#form-adiciona");
	var nome = form.nome.value;
	var peso = form.peso.value;
	var altura = form.altura.value;
	var gordura = form.gordura.value;

	var pacienteTr = document.createElement("tr");

	var nomeTd = document.createElement("td");
	var pesoTd = document.createElement("td");
	var alturaTd = document.createElement("td");
	var gorduraTd = document.createElement("td");
	var imcTd = document.createElement("td");

	nomeTd.textContent = nome;
	pesoTd.textContent = peso;
	alturaTd.textContent = altura;
	gorduraTd.textContent = gordura;

	pacienteTr.appendChild(nomeTd);
	pacienteTr.appendChild(pesoTd);
	pacienteTr.appendChild(alturaTd);
	pacienteTr.appendChild(gorduraTd);

	var tabela = document.querySelector("#tabela-pacientes");

	tabela.appendChild(pacienteTr);

});
