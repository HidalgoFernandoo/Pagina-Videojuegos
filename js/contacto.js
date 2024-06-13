(function() {
    emailjs.init({
        publicKey: "t2DpVKujmLCqY74vg",
    });
})();

window.onload = function() {
    var form = document.getElementById('contactoForm');
    var mensajeEnviado = document.getElementById('mensajeEnviado');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        emailjs.sendForm('service_k23th3q', 'template_bauq4ex', this)
            .then(() => {
                console.log('SUCCESS!');
                mensajeEnviado.style.display = 'block';
                form.reset();
            }, (error) => {
                console.log('FAILED...', error);
            });
    });
};