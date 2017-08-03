//var pacientes = document.querySelectorAll(".paciente");

//pacientes.forEach(function(paciente){
//	paciente.addEventListener("dblclick", function(){
//		this.remove();
//	});
//});

var tabela =  document.querySelector("#tabela-pacientes");

tabela.addEventListener("dblclick", function(event){

	event.target.parentNode.classList.add("fadeOut");
	setTimeout(function() {
		event.target.parentNode.remove(); // ele pega o pai(TR) do alvo(TD) e remove
	}, 500);
});