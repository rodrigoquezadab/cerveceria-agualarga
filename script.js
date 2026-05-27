document.addEventListener('DOMContentLoaded', () => {
    // Age Gate Logic
    const ageGate = document.getElementById('age-gate');
    const btnYes = document.getElementById('btn-yes');
    const btnNo = document.getElementById('btn-no');

    // Page content elements to hide for accessibility when age gate modal is active
    const pageContents = Array.from(document.body.children).filter(el => el !== ageGate && el.tagName !== 'SCRIPT');

    const hidePageContent = () => {
        pageContents.forEach(el => el.setAttribute('aria-hidden', 'true'));
    };

    const showPageContent = () => {
        pageContents.forEach(el => el.removeAttribute('aria-hidden'));
    };

    // Check if previously verified in this session
    if (sessionStorage.getItem('ageVerified') === 'true') {
        if (ageGate) ageGate.style.display = 'none';
        document.body.style.overflow = 'auto'; // Restore scroll
        showPageContent();
    } else {
        // Lock scroll when age gate is visible
        document.body.style.overflow = 'hidden';
        hidePageContent();
    }

    if (btnYes) {
        btnYes.addEventListener('click', () => {
            sessionStorage.setItem('ageVerified', 'true');
            if (ageGate) {
                ageGate.style.opacity = '0';
                ageGate.style.transition = 'opacity 0.5s ease';
                setTimeout(() => {
                    ageGate.style.display = 'none';
                    document.body.style.overflow = 'auto'; // Restore scroll
                    showPageContent();
                }, 500);
            }
        });
    }

    if (btnNo) {
        btnNo.addEventListener('click', () => {
            window.location.href = 'https://www.google.com';
        });
    }

    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        // Initialize accessibility attributes
        menuToggle.setAttribute('aria-expanded', 'false');

        menuToggle.addEventListener('click', () => {
            const isActive = navLinks.classList.toggle('active');
            menuToggle.classList.toggle('active', isActive);
            
            // Toggle accessibility state
            menuToggle.setAttribute('aria-expanded', isActive ? 'true' : 'false');
            menuToggle.setAttribute('aria-label', isActive ? 'Cerrar menú' : 'Abrir menú');
        });
    }

    // Beer Data
    const beerList = document.getElementById("beer-list");

    const cervezas = [
        {
            id: "amber",
            grados: "5.5°",
            imagen: "images/beers/amber cuadrado.png"
        },
        {
            id: "stout",
            grados: "5.5°",
            imagen: "images/beers/stout cuadrado.png"
        },
        {
            id: "red",
            grados: "6.0°",
            imagen: "images/beers/red cuadrado.png"
        },
        {
            id: "ipa",
            grados: "7.0°",
            imagen: "images/beers/ipa cuadrado.png"
        }
    ];

    function populateBeerCards(lang) {
        if (!beerList) return;
        
        // Clear existing cards
        beerList.innerHTML = "";

        cervezas.forEach(cerveza => {
            const beerCard = document.createElement("div");
            beerCard.classList.add("beer-card");

            const name = (translations[lang] && translations[lang][`beer-${cerveza.id}-name`]) || "";
            const desc = (translations[lang] && translations[lang][`beer-${cerveza.id}-desc`]) || "";
            const infoAnimal = (translations[lang] && translations[lang][`beer-${cerveza.id}-animal`]) || "";
            const btnText = (translations[lang] && translations[lang]["beer-btn-animal"]) || "Sobre el Animal";
            const alcText = (translations[lang] && translations[lang]["beer-detail-alcohol"]) || "Alcohol";

            beerCard.innerHTML = `
                <img src="${cerveza.imagen}" alt="${name}" loading="lazy">
                <div class="beer-info">
                    <div>
                        <h3>${name}</h3>
                        <p class="description">${desc}</p>
                    </div>
                    
                    <div class="animal-accordion">
                        <button class="accordion-btn">${btnText} <i class="fas fa-chevron-down"></i></button>
                        <div class="accordion-content">
                            <p>${infoAnimal}</p>
                        </div>
                    </div>

                    <p class="details">${alcText}: ${cerveza.grados}</p>
                </div>
            `;

            beerList.appendChild(beerCard);

            // Accordion Logic
            const btn = beerCard.querySelector('.accordion-btn');
            const content = beerCard.querySelector('.accordion-content');

            btn.addEventListener('click', () => {
                const isActive = content.classList.contains('active');

                // Close all others
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

    // Populate initially on page load based on active language
    const initialLang = window.currentLanguage || 'es';
    populateBeerCards(initialLang);

    // Listen to custom languageChanged event from i18n.js
    document.addEventListener('languageChanged', (e) => {
        populateBeerCards(e.detail.language);
    });

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
                    if (menuToggle) {
                        menuToggle.classList.remove('active');
                        menuToggle.setAttribute('aria-expanded', 'false');
                        menuToggle.setAttribute('aria-label', 'Abrir menú');
                    }
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
