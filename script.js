document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // Beer Data
    const beerList = document.getElementById("beer-list");

    const cervezas = [
        { 
            nombre: "Tucúquere Amber Ale", 
            grados: "5.5°",
            descripcion: "Equilibrio perfecto entre malta y lúpulo, con un color ámbar profundo.", 
            imagen: "images/ambar-tortuga.jpg" // Using existing image for Amber
        },
        { 
            nombre: "Condor Stout", 
            grados: "5.5°", 
            descripcion: "Oscura, robusta y cremosa, con notas intensas a café y chocolate.", 
            imagen: "images/stout-condor.jpg" 
        },
        { 
            nombre: "Lagartija Red", 
            grados: "6.0°", 
            descripcion: "Rojiza y vibrante, con un carácter maltoso y un final suave.", 
            imagen: "images/red-lagartija.jpg" 
        },
        { 
            nombre: "Culebra IPA", 
            grados: "7.0°", 
            descripcion: "Potente y aromática, una explosión de lúpulo para los valientes.", 
            imagen: "images/ipa-culebra.jpg" 
        }
    ];

    // Populate Beer Cards
    if (beerList) {
        cervezas.forEach(cerveza => {
            const beerCard = document.createElement("div");
            beerCard.classList.add("beer-card");

            beerCard.innerHTML = `
                <img src="${cerveza.imagen}" alt="${cerveza.nombre}" loading="lazy">
                <div class="beer-info">
                    <div>
                        <h3>${cerveza.nombre}</h3>
                        <p class="description">${cerveza.descripcion}</p>
                    </div>
                    <p class="details">Alcohol: ${cerveza.grados}</p>
                </div>
            `;

            beerList.appendChild(beerCard);
        });
    }

    // Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Close mobile menu if open
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                }

                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });
});
