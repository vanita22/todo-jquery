$(document).ready(function(){

	var tarea = function guardar(){
		localStorage.tarea = document.getElementById("tarea").value;		
	}
		
	$(tarea).keypress(function(){

		if(tarea == ""){
			alert("no debes dejar este campo vacio");
		}else {	         		
      		$('ul').append('<li>' + tarea + '</li>' + '<button id="borrar">remove</button>');      		
      	}	

      	$('#complet').click(function(){
			$('#completado').before('#lista:first');
		});

		$('#borrar').click(function(){
			$('li').remove();
		});
    });		
})
