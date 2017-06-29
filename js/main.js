$(document).ready(function(){

	var tarea = function guardar(){
		localStorage.tarea = document.getElementById("tarea").value;
	}
		
	$(tarea).keypress(function(){

		if(tarea == ""){
			alert("no debes dejar este campo vacio");
		}else {	         		
      		$('ul').after('<li>' +'<label for="list">' + tarea+ '</label>' + '</li>');
      	}	
    });
	
})
