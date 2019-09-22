//$(document).ready(function(){
 $(function(){ //forma reduzida de verificar ser a pagina foi carregada
 

 
	$('#trocaCorButton').click(function(){
		
		//alert($(nome).css( "color"));
		if ($(nome).css("color")=='rgb(255, 0, 0)'){
		     $('#nome').css("color", "blue");	
			 $("#trocaCorButton").html('Mudar para vermelho com Jquery');
			 
		}else{
			$('#nome').css("color", "red");
			$("#trocaCorButton").html('Mudar para azul com Jquery');
			
		}
		$('h1').css("font-family", "arial");
		//alert('chamou aqui1');
	});
	
	//$('p').css("color", "blue").text("cor alterada").fadeIn(0).fadeOut(3000);
	
	$('#olaMundoButton').click(function(){
		$('#ola').fadeOut('slow');
	})
	
	$('#olaMundoButton2').click(function(){
		$('#ola').fadeIn('slow');
	})
	
	
	$('#trocaButtonCss').click(function(){
		$('button').css('border-radius' ,'12px');
		$('button').hover(function() { 
                $(this).css("background-color", "green"), 
 function() { 
                $(this).css("background-color", "blue"); 
            }				
});
	})
$('#inputTextButton').click(function(){
		$('#nome').html(inputText.value);
	});
	
	
	
	$('#azul').click(function(){
		$('p').css("color", "blue");
		$('p').fadeIn();
		//alert('chamou aqui2');
	});
	
	/*$('#vermelho').click(function(){
		$('p').css("color", "red");
		$('p').css("background-color", "green");
		$('p').fadeOut('slow'); //some suaveee
		$('p').delay(3000);
		$('p').fadeIn(5000); 
		$('#mensagem').text('cor alterada com sucesso');
		$('#mensagem').fadeOut(3000);
	});
	
	$('#vermelho').click(function(){
		$('p').css("color", "red").css("background-color", "green").fadeOut('slow').delay(3000).fadeIn(5000).text('cor alterada com sucesso').fadeOut(3000);
	});
		//$('p').css("color", "red").css("background-color", //"green").fadeOut('slow').delay(3000).fadeIn(5000).text('cor alterada com sucesso').fadeOut(3000);
	//});*/
 });


