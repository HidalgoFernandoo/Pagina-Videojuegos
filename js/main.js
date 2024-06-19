// reemplazar juego principal segun la seleccion del usuario

// obtener enlaces de juegos
var enlacesJuegos = document.querySelectorAll('.juego-enlace');

// Iterar sobre cada enlace
enlacesJuegos.forEach(function (enlace) {
	// Agregar un evento de clic a cada enlace
	enlace.addEventListener('click', function (event) {
		event.preventDefault(); // Evitar comportamiento predeterminado del enlace

		// Obtener los datos del juego del atributo "data" del enlace
		var nombreJuego = this.getAttribute('titulo');
		var descripcionJuego = this.getAttribute('descripcion');
		var imagenJuego = this.getAttribute('imagen');

		// Actualizar el contenido del juego principal con los datos del juego seleccionado
		actualizarJuegoPrincipal(nombreJuego, descripcionJuego, imagenJuego);

		// Desplazar la página hacia arriba con una animación más lenta
		smoothScrollToTop();
	});
});

// Función para actualizar el juego principal
function actualizarJuegoPrincipal(nombre, descripcion, imagen) {
	var tituloJuego = document.querySelector('.juego-principal .titulo');
	var descripcionJuego = document.querySelector('.juego-principal .descripcion');
	var imagenJuego = document.querySelector('.juego-principal');

	tituloJuego.textContent = nombre;
	descripcionJuego.textContent = descripcion;
	imagenJuego.style.backgroundImage = 'linear-gradient(rgba(0, 0, 0, .50) 0%,rgba(0, 0, 0, .50) 100%), url(' + imagen + ')';
}

// Función para desplazar la página hacia arriba de manera suave
function smoothScrollToTop() {
	var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;

	if (currentScroll > 0) {
		window.requestAnimationFrame(smoothScrollToTop);
		window.scrollTo(0, currentScroll - currentScroll / 10);
	}
}

document.getElementById('openPopupBtn').addEventListener('click', function () {
	// mostrar el overlay y el pop-up con transición
	document.getElementById('popup').style.opacity = '1';
	document.getElementById('overlay').style.display = 'block';
	document.getElementById('popup').style.display = 'block';

	// evitar el scroll de fondo
	document.body.style.overflow = 'hidden';

	// autoreproducción del video
	let iframe = document.getElementById('youtubeVideo');
	let iframeSrc = iframe.src;
	iframe.src = iframeSrc + '&autoplay=1';
});

document.getElementById('overlay').addEventListener('click', function () {
	// Ocultar el overlay y el pop-up con transición
	document.getElementById('popup').style.opacity = '0';
	document.getElementById('overlay').style.display = 'none';

	// habilitar el scroll de nuevo
	document.body.style.overflow = 'auto';

	// detener la reproducción del video al cerrar el pop-up
	let iframe = document.getElementById('youtubeVideo');
	iframe.src = iframe.src.replace('&autoplay=1', '');

	// Ocultar el pop-up después de la transición de opacidad
	setTimeout(function () {
		document.getElementById('popup').style.display = 'none';
	}, 300); // 300ms es la duración de la transición de opacidad
});
document.getElementById('openPopupBtn').addEventListener('click', function () {
	// mostrar el overlay y el pop-up con transición
	document.getElementById('popup').style.opacity = '1';
	document.getElementById('overlay').style.display = 'block';
	document.getElementById('popup').style.display = 'block';

	// evitar el scroll de fondo
	document.body.style.overflow = 'hidden';

	// autoreproducción del video
	var iframe = document.getElementById('youtubeVideo');
	var iframeSrc = iframe.src;
	iframe.src = iframeSrc + '&autoplay=1';
});

document.getElementById('overlay').addEventListener('click', function () {
	// Ocultar el overlay y el pop-up con transición
	document.getElementById('popup').style.opacity = '0';
	document.getElementById('overlay').style.display = 'none';

	// habilitar el scroll de nuevo
	document.body.style.overflow = 'auto';

	// detener la reproducción del video al cerrar el pop-up
	var iframe = document.getElementById('youtubeVideo');
	iframe.src = iframe.src.replace('&autoplay=1', '');
});
