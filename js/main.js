document.getElementById('openPopupBtn').addEventListener('click', function() {
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

document.getElementById('overlay').addEventListener('click', function() {
    // Ocultar el overlay y el pop-up con transición
    document.getElementById('popup').style.opacity = '0';
    document.getElementById('overlay').style.display = 'none';

    // habilitar el scroll de nuevo
    document.body.style.overflow = 'auto';

    // detener la reproducción del video al cerrar el pop-up
    let iframe = document.getElementById('youtubeVideo');
    iframe.src = iframe.src.replace('&autoplay=1', '');

    // Ocultar el pop-up después de la transición de opacidad
    setTimeout(function() {
        document.getElementById('popup').style.display = 'none';
    }, 300); // 300ms es la duración de la transición de opacidad
});
document.getElementById('openPopupBtn').addEventListener('click', function() {
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

document.getElementById('overlay').addEventListener('click', function() {
    // Ocultar el overlay y el pop-up con transición
    document.getElementById('popup').style.opacity = '0';
    document.getElementById('overlay').style.display = 'none';

    // habilitar el scroll de nuevo
    document.body.style.overflow = 'auto';

    // detener la reproducción del video al cerrar el pop-up
    var iframe = document.getElementById('youtubeVideo');
    iframe.src = iframe.src.replace('&autoplay=1', '');
});
