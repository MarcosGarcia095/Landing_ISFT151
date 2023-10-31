document.addEventListener("DOMContentLoaded", function () {
    // Espera a que la página se cargue completamente

    // Obtén los elementos de los botones de Facebook e Instagram
    var botonFacebook = document.querySelector("facebook.png");
    var botonInstagram = document.querySelector(".contact a[href*='instagram.com']");

    // Agrega eventos de clic a los botones
    botonFacebook.addEventListener("click", function (event) {
        // Evita que el enlace se abra en la página actual
        event.preventDefault();
        
        // Redirige a la página de Facebook
        window.open(botonFacebook.href, http, "_blank");
    });

    botonInstagram.addEventListener("click", function (event) {
        // Evita que el enlace se abra en la página actual
        event.preventDefault();
        
        // Redirige a la página de Instagram
        window.open(botonInstagram.href, "_blank");
    });
});
