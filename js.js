function quitarPeliculas(){
	var tipo = prompt("Escoger tipo de peliculas."); 

	var peliculas = document.getElementsByTagName("article");

	var numP = document.getElementsByClassName(tipo).length;
	
	if (numP == 0) {
		console.log("No se ha encontrado ningún resultado por lo que se activaran todas las peliculas.")
		ponerTodos();
	} else {
		console.log("Se va a mostrar las peliculas de tipo " , tipo);
		for (var i = 0; i < peliculas.length; i++) {	
			if (peliculas[i].className != tipo) {
				peliculas[i].style.display = "none";
				console.log("La pelicula " , peliculas[i].id, " se desactiva");
			} else {
				peliculas[i].style.display = "block";
				console.log("La pelicula " , peliculas[i].id, " se activa");
			}
		}
	}

}

function ponerTodos(){
	var peliculas = document.getElementsByTagName("article");
	for (var i = 0; i < peliculas.length; i++) {	
		peliculas[i].style.display = "block";
	}
}