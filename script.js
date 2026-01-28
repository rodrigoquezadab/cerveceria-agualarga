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
            nombre: "Amber Ale Tucúquere",
            grados: "5.5°",
            descripcion: "Equilibrio perfecto entre malta y lúpulo, con un color ámbar profundo.",
            imagen: "images/beers/amber cuadrado.png",
            infoAnimal: "El <strong>Tucúquere</strong> (<em>Bubo magellanicus</em>) es el búho más grande de Chile. Guardián de la noche andina, su ulular profundo resuena en las quebradas. Representa la sabiduría silenciosa y la vigilancia de nuestros valles."
        },
        {
            nombre: "Stout Condor",
            grados: "5.5°",
            descripcion: "Oscura, robusta y cremosa, con notas intensas a café y chocolate.",
            imagen: "images/beers/stout cuadrado.png",
            infoAnimal: "El <strong>Cóndor Andino</strong> (<em>Vultur gryphus</em>) es el rey de los cielos sudamericanos. Símbolo de poder y libertad, planea sobre las cumbres nevadas conectando el mundo terrenal con el espiritual."
        },
        {
            nombre: "Red Lagartija",
            grados: "6.0°",
            descripcion: "Rojiza y vibrante, con un carácter maltoso y un final suave.",
            imagen: "images/beers/red cuadrado.png",
            infoAnimal: "La <strong>Lagartija Chilena</strong> es una ágil habitante de las rocas soleadas. Con sus colores vibrantes, simboliza la resiliencia y la vida que florece incluso en los terrenos más áridos de la montaña."
        },
        {
            nombre: "IPA Culebra",
            grados: "7.0°",
            descripcion: "Potente y aromática, una explosión de lúpulo para los valientes.",
            imagen: "images/beers/ipa cuadrado.png",
            infoAnimal: "La <strong>Culebra de Cola Larga</strong> (<em>Philodryas chamissonis</em>) es endémica de Chile. Elegante y veloz, se desliza entre matorrales, recordándonos el respeto por la naturaleza salvaje y su equilibrio."
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
                    
                    <div class="animal-accordion">
                        <button class="accordion-btn">Sobre el Animal <i class="fas fa-chevron-down"></i></button>
                        <div class="accordion-content">
                            <p>${cerveza.infoAnimal}</p>
                        </div>
                    </div>

                    <p class="details">Alcohol: ${cerveza.grados}</p>
                </div>
            `;

            beerList.appendChild(beerCard);

            // Accordion Logic
            const btn = beerCard.querySelector('.accordion-btn');
            const content = beerCard.querySelector('.accordion-content');

            btn.addEventListener('click', () => {
                const isActive = content.classList.contains('active');

                // Close all others (optional, but cleaner)
                document.querySelectorAll('.accordion-content').forEach(c => {
                    c.classList.remove('active');
                    c.previousElementSibling.classList.remove('active');
                });

                if (!isActive) {
                    content.classList.add('active');
                    btn.classList.add('active');
                }
            });
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
