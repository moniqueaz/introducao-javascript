var butaoAdicionar = document.querySelector("#adicionar-paciente");

butaoAdicionar.addEventListener("click", function(event){
	event.preventDefault(); // previne o comportamento padrão
	
	var form = document.querySelector("#form-adiciona");
	
	var paciente = obtemPacienteDoFormulario(form);

	var pacienteTr = montaTr(paciente);

	var erros = validaPaciente(paciente);

	// verifica paciente invalido
	if(erros.length > 0){
		exibeMensagensDeErro(erros);
		return; // sai da funcao
	}

	// adiciona paciente na tabela
	var tabela = document.querySelector("#tabela-pacientes");

	tabela.appendChild(pacienteTr);

	form.reset();

	var mensagensErro = document.querySelector("#mensagens-erro");

	mensagensErro.innerHTML = "";

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

function validaPaciente(paciente){

	var erros = [];

	if(paciente.nome.length == 0) erros.push("O nome não pode ser em branco");

	if(paciente.gordura.length == 0) erros.push("A gordura não pode ser em branco");

	if(paciente.peso.length == 0) erros.push("O peso não pode ser em branco");

	if(paciente.altura.length == 0) erros.push("A altura não pode ser em branco");

	if(!validaPeso(paciente.peso)) erros.push("Peso é Invalido");

	if(!validaAltura(paciente.altura)) erros.push("Altura é Invalida");

	return erros;
}

function exibeMensagensDeErro(erros) {
    var ul = document.querySelector("#mensagens-erro");

    ul.innerHTML = ""; // apaga as li da ul

    erros.forEach(function(erro) {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}