//$(document).ready(function(){
 $(function(){ //forma reduzida de verificar ser a pagina foi carregada
	$('button').click(function(){
		$('#nome').css("color", "red");
		$('h1').css("font-family", "arial");
	});
	
	$('#azul').click(function(){
		$('p').css("color", "blue");
		$('p').fadeIn();
	});
	
/*	$('#vermelho').click(function(){
		$('p').css("color", "red");
		$('p').css("background-color", "green");
		$('p').fadeOut('slow'); //some suaveee
		$('p').delay(3000);
		$('p').fadeIn(5000); 
		$('#mensagem').text('cor alterada com sucesso');
		$('#mensagem').fadeOut(3000);
	});*/
	
	$('#vermelho').click(function(){
		$('p').css("color", "red").css("background-color", "green").fadeOut('slow').delay(3000).fadeIn(5000).text('cor alterada com sucesso').fadeOut(3000);
	});
		//$('p').css("color", "red").css("background-color", //"green").fadeOut('slow').delay(3000).fadeIn(5000).text('cor alterada com sucesso').fadeOut(3000);
	//});
 });


