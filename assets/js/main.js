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

            // Forzamos a que no se traduzca el texto del footer
            const footerText = document.querySelector('.main-footer p');
            if (footerText) {
                footerText.classList.add('notranslate');
            }
        }
    }, 500);

    // --- 4. LÓGICA PARA ENVÍO DE FORMULARIOS A WHATSAPP ---
    
    // Función para Venezuela
    window.enviarWhatsAppVz = function() {
        const form = document.getElementById('contactFormVz');
        if (!form) return;
        
        const name = form.querySelector('input[name="name"]').value;
        const email = form.querySelector('input[name="email"]').value;
        const message = form.querySelector('textarea[name="message"]').value;
        
        // Validación básica
        if (!name || !email || !message) {
            alert('Por favor, complete todos los campos del formulario.');
            return;
        }
        
        const whatsappMessage = `*Nuevo Mensaje desde D'Frutilac Venezuela*%0A%0A*Nombre:* ${name}%0A*Email:* ${email}%0A*Mensaje:* ${message}`;
        const whatsappUrl = `https://api.whatsapp.com/send?phone=584125359915&text=${whatsappMessage}`;
        
        window.open(whatsappUrl, '_blank');
    }

    // Función para Internacional
    window.enviarWhatsAppInt = function() {
        const form = document.getElementById('contactFormInt');
        if (!form) return;
        
        const name = form.querySelector('input[name="name"]').value;
        const company = form.querySelector('input[name="company"]').value;
        const email = form.querySelector('input[name="email"]').value;
        const message = form.querySelector('textarea[name="message"]').value;
        
        // Validación básica
        if (!name || !company || !email || !message) {
            alert('Please fill in all form fields.');
            return;
        }
        
        const whatsappMessage = `*New Message from D'Frutilac Global*%0A%0A*Name:* ${name}%0A*Company:* ${company}%0A*Email:* ${email}%0A*Message:* ${message}`;
        const whatsappUrl = `https://api.whatsapp.com/send?phone=584125359915&text=${whatsappMessage}`;
        
        window.open(whatsappUrl, '_blank');
    }

    // --- 5. MEJORA: PREVENIR ENVÍO DE FORMULARIOS CON ENTER ---
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
            }
        });
    });

});