/* ---------------------------------- */
/* LÓGICA JAVASCRIPT PRINCIPAL      */
/* assets/js/main.js                */
/* ---------------------------------- */

document.addEventListener("DOMContentLoaded", function() {

    // --- 1. LÓGICA DEL BOTÓN SCROLL-TO-TOP ---
    
    const scrollTopBtn = document.getElementById("scrollTopBtn");

    if (scrollTopBtn) {
        // Mostrar/Ocultar el botón al hacer scroll
        window.onscroll = function() {
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                scrollTopBtn.classList.add("visible");
            } else {
                scrollTopBtn.classList.remove("visible");
            }
        };

        // Acción de click para ir arriba
        scrollTopBtn.addEventListener("click", function() {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }

    // --- 2. LÓGICA DE SCROLL SUAVE PARA ANCLAS (Landings) ---
    
    const anchorLinks = document.querySelectorAll('a.nav-link[href^="#"]');

    anchorLinks.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const targetId = this.getAttribute("href");
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Calculamos la posición del elemento y restamos la altura del header
                const headerOffset = document.querySelector('.main-header').offsetHeight;
                const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
                const offsetPosition = elementPosition - headerOffset - 20; // 20px de margen

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });

    // --- 3. LÓGICA PARA GOOGLE TRANSLATE WIDGET ---
    // El script de Google se encarga de la inicialización
    // a través de la función `googleTranslateElementInit` en el HTML.
    
    // Opcional: Pequeño hack para mejorar la apariencia del dropdown
    // Google puede tardar en cargar, usamos un intervalo
    const checkGoogleTranslate = setInterval(() => {
        const translateSelect = document.querySelector('.goog-te-gadget-simple');
        if (translateSelect) {
            clearInterval(checkGoogleTranslate);
            
            // Forzamos a que no se traduzca la palabra "TEPUY" del footer
            const footerLinks = document.querySelectorAll('.main-footer a');
            footerLinks.forEach(link => {
                link.classList.add('notranslate');
            });
            
            // Forzamos a que no se traduzca el logo
            const logos = document.querySelectorAll('.navbar-logo');
            logos.forEach(logo => {
                logo.classList.add('notranslate');
            });
        }
    }, 500);

});