function quitarPeliculas(){
	var tipo = prompt("Escoger tipo de peliculas."); 

	var peliculas = document.getElementsByTagName("article");

	var numP = document.getElementsByClassName(tipo).length;
	
	if (numP == 0) {
		ponerTodos();
	} else {
		for (var i = 0; i < peliculas.length; i++) {	
			if (peliculas[i].className != tipo) {
				peliculas[i].style.display = "none";
			} else {
				peliculas[i].style.display = "block";
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