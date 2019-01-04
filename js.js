function quitarPeliculas(){ 
	var peliculas = document.getElementsByTagName("article");

	var tipo = prompt("Escoger tipo de peliculas. Tipos: " + devolverTiposPeliculas(peliculas)).toLowerCase();

	console.log("Se va a mostrar las peliculas de tipo " , tipo);

	if (!realizarFilltrado(tipo, peliculas)) {
		console.log("No se ha encontrado ningún resultado por lo que se activaran todas las peliculas.");
		ponerTodos();
	} else {
		document.getElementById("menu").style.boxShadow = "0px 0px 15px 5px white";
	}

}

function realizarFilltrado(tipo, peliculas){
	var bandera = false;

	for (var i = 0; i < peliculas.length; i++) {	
		if (peliculas[i].className.toLowerCase() != tipo) {
			peliculas[i].style.display = "none";
			console.log("La pelicula " , peliculas[i].id, " se desactiva");
		} else {
			peliculas[i].style.display = "block";
			console.log("La pelicula " , peliculas[i].id, " se activa");
			bandera = true;
		}
	}

	return bandera;
}

function devolverTiposPeliculas(peliculas){
	var titulos = [];

	for(var a = 0; a < peliculas.length; a++){
		if (!titulos.includes(peliculas[a].className)) {
			titulos.push(peliculas[a].className);
		}
	}

	return titulos;
}

function ponerTodos(){
	var peliculas = document.getElementsByTagName("article");
	for (var i = 0; i < peliculas.length; i++) {	
		peliculas[i].style.display = "block";
	}
	document.getElementById("menu").style.boxShadow = "0px 0px 15px 5px blue";
}