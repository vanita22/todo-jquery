$(document).ready(function(){

	function guardar(){
		var lista = $('#tarea').val();
		$('#lista').append('<li>'+lista+'<button id="borrar">remove</button></li>');
	}
		
	$('li').on('keypress', guardar);      		
      		

     $('#borrar').click(function(){
			$('li').remove();
    });

       	
		

    $('#complet').click(function(){
			$('#completado').addpend('#tarea');
		
})
