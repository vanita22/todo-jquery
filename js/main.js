$(document).ready(function(){
	
	$("#tarea").keypress(function() {
		
		var tarea = $("#tarea").val();


		if(tarea == ""){
			alert("no debes dejar este campo vacio");
		}else {	         		
      		$('ul').after('<li>' +'<label for="list">' + tarea+ '</label>' + '</li>');
      	}	
	});
})
