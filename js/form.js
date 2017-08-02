var butaoAdicionar = document.querySelector("#adicionar-paciente");

butaoAdicionar.addEventListener("click", function(event){
	event.preventDefault(); // previne o comportamento padrão
	
	var form = document.querySelector("#form-adiciona");
	
	var paciente = obtemPacienteDoFormulario(form);

	var pacienteTr = montaTr(paciente);

	var tabela = document.querySelector("#tabela-pacientes");

	tabela.appendChild(pacienteTr);

	form.reset();

});

function obtemPacienteDoFormulario(form){

	var paciente = {
		peso:form.peso.value,
		gordura:form.gordura.value,
		altura:form.altura.value,
		nome:form.nome.value,
		imc: calculaImc(form.peso.value, form.altura.value)
	}

	return paciente;
}

function montaTr(paciente){

	var pacienteTr = document.createElement("tr");
	pacienteTr.classList.add("paciente");

	pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
	pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
	pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
	pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
	pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

	return pacienteTr;
}

function montaTd(dado, classe){
	var td = document.createElement("td");
	td.textContent = dado;
	td.classList.add(classe);

	return td;
}