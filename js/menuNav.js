document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');
    const main = document.querySelector('main');
    const footer = document.querySelector('footer');

    function actMenu() {
        nav.classList.toggle('active');
        main.classList.toggle('shift-down');
        footer.classList.toggle('shift-down');
    }

    function manejoVentana() {
        if (window.innerWidth >= 768) {
            nav.classList.remove('active');
            main.classList.remove('shift-down');
            footer.classList.remove('shift-down');
        }
    }

    menuToggle.addEventListener('click', actMenu);
    window.addEventListener('resize', manejoVentana);
})