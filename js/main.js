$(document).ready(function(){
	$("input").intro(function(e){
		e.preventDefault();
		var tarea = $(".tarea2").val();

		if(tarea == ""){
			alert("debes escribir una tarea");
		} else {
			$("#tarea").append("")
		}
	})
})