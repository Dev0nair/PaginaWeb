/*
	SCRIPT OPINION
*/
function enviar(){
	var bandera = comprobarVacios();

	if (bandera) {
		alert("Envío correcto!");
	} else {
		alert("Envio incorrecto!");
	}
}

window.onload = function(){
	var radios = document.getElementsByName('a');
	
	radios[0].addEventListener("click", function(){mostrarRadio(radios[0].value)});
	radios[1].addEventListener("click", function(){mostrarRadio(radios[1].value)});
	radios[2].addEventListener("click", function(){mostrarRadio(radios[2].value)});
	
}

function mostrarRadio(nombre){
	alert("Has elegido: " + nombre);
}


function comprobarVacios(){
	var textos = document.getElementsByName('nuevoNombre');
	var checks = document.getElementsByName('b');
	var radios = document.getElementsByName('a');

	var bandera = true;

	//comprobamos los textos que haya que introducir

	if (textos.length > 0) {
		for(var a = 0; a < textos.length; a++){ 
			if (textos[a].value == '') {
				bandera = false;
			}
		} 

	} else {
		bandera = false;
	}

	// comprobamos si hay algun check seleccionado
	var bandera2 = false;
	for(var b = 0; b < checks.length; b++){
		if (checks[b].checked == true) {
			bandera2 = true;
		}
	}
	if (!bandera2) { bandera = false;}

	// comprobamos si hay algun radio seleccionado
	bandera2 = false;
	for(var b = 0; b < radios.length; b++){
		if (radios[b].checked == true) {
			bandera2 = true;
		}
	}
	if (!bandera2) { bandera = false;}

	return bandera;
}
