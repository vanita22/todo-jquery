$(document).ready(function(){ 

	function guardar(){		
		var lista = $('#tarea').val();
		$('#lista').append('<li><input type="checkbox" id="test5" checked="checked"/><label for="test5"></label> '+ " " + lista + " " +' <button class="borrar">remove</button></li>');
		$('#tarea').val(' ');//sirve para limpiar el input despues de presionar el boton.
	}

	function clear(){
		$('#lista li').parent().remove();
	}

	function cambio(){
		$('#completado li').appendTo('#lista:first');		
	}

	$(function(){		
		$('#add').on('click', guardar);	
		$('.borrar').on('click', clear);
		$('#complet').on('click', cambio);		
	});	


})
