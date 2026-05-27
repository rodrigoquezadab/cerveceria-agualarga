const translations = {
    es: {
        // Age Gate
        "age-question": "¿Eres mayor de 18 años?",
        "age-btn-yes": "Soy mayor de 18",
        "age-btn-no": "Soy menor",
        // Nav Links
        "nav-about": "Quiénes Somos",
        "nav-varieties": "Variedades",
        "nav-places": "Dónde Encontrarnos",
        "nav-brewer": "Nuestro Cervecero",
        "nav-contact": "Contacto",
        "nav-back": "Volver al Inicio",
        // Hero
        "hero-title": "Espíritu de Montaña",
        "hero-subtitle": "Huella Artesanal, elaborada con Agua de Vertiente en Farellones.",
        "hero-cta": "Puntos de Venta",
        // Quiénes Somos
        "about-title": "Nuestra Esencia",
        "about-p1": "En <strong>Agualarga</strong>, el corazón de nuestra cerveza la te en Farellones. Aquí, en la majestuosidad de la montaña, nace nuestra cerveza artesanal, infundida con la pureza inigualable del <strong>\"Agua de Vertiente\"</strong> natural.",
        "about-p2": "Este origen único nos permite ofrecerte variedades con un sabor auténtico, reflejo de nuestra pasión familiar y fidelidad a la calidad. Creemos en la artesanía, la innovación y la satisfacción de quienes buscan una experiencia cervecera memorable.",
        // Variedades
        "varieties-title": "Nuestras Variedades",
        "varieties-subtitle": "Descubre el carácter de cada una de nuestras creaciones.",
        "beer-detail-alcohol": "Alcohol",
        "beer-btn-animal": "Sobre el Animal",
        // Beers
        "beer-amber-name": "Amber Ale Tucúquere",
        "beer-amber-desc": "Equilibrio perfecto entre malta y lúpulo, con un color ámbar profundo.",
        "beer-amber-animal": "El <strong>Tucúquere</strong> (<em>Bubo magellanicus</em>) es el búho más grande de Chile. Guardián de la noche andina, su ulular profundo resuena en las quebradas. Representa la sabiduría silenciosa y la vigilancia de nuestros valles.",
        "beer-stout-name": "Stout Condor",
        "beer-stout-desc": "Oscura, robusta y cremosa, con notas intensas a café y chocolate.",
        "beer-stout-animal": "El <strong>Cóndor Andino</strong> (<em>Vultur gryphus</em>) es el rey de los cielos sudamericanos. Símbolo de poder y libertad, planea sobre las cumbres nevadas conectando el mundo terrenal con el espiritual.",
        "beer-red-name": "Red Lagartija",
        "beer-red-desc": "Rojiza y vibrante, con un carácter maltoso y un final suave.",
        "beer-red-animal": "La <strong>Lagartija Chilena</strong> es una ágil habitante de las rocas soleadas. Con sus colores vibrantes, simboliza la resiliencia y la vida que florece incluso en los terrenos más áridos de la montaña.",
        "beer-ipa-name": "IPA Culebra",
        "beer-ipa-desc": "Potente y aromática, una explosión de lúpulo para los valientes.",
        "beer-ipa-animal": "La <strong>Culebra de Cola Larga</strong> (<em>Philodryas chamissonis</em>) es endémica de Chile. Elegante y veloz, se desliza entre matorrales, recordándonos el respeto por la naturaleza salvaje y su equilibrio.",
        // Puntos de Venta
        "places-title": "Puntos de Venta",
        "places-subtitle": "Disfruta Agualarga en estos exclusivos lugares:",
        "place-pf-desc": "Bar Restaurante histórico en el corazón del Barrio Yungay.",
        "place-pf-address": "<strong>Dirección:</strong> Compañía de Jesús 2789, Santiago.",
        "place-pf-res": "<strong>Reservas:</strong> +56 9 7798 9743",
        "place-pf-web": "Visitar Web",
        "place-pf-menu": "Ver Carta de Maridaje",
        "place-ap-desc": "Tradición y comida casera en Curacaví.",
        "place-ap-address": "<strong>Dirección:</strong> Ruta 68 km 55, Curacaví.",
        "place-ap-res": "<strong>Reservas:</strong> +56 2 2835 1122",
        "place-ap-web": "Visitar Web",
        // Cervecero
        "brewer-title": "El Maestro Cervecero",
        "brewer-name": "Sergio Lagos Balmaceda",
        "brewer-p1": "Formado en EEUU, Argentina e Irlanda, Sergio es el alquimista detrás de Agualarga. Su viaje comenzó en 2012 y se perfeccionó explorando los lúpulos argentinos y la tradición stout irlandesa.",
        "brewer-p2": "Cada receta es un homenaje a sus viajes y aprendizajes, buscando siempre el equilibrio perfecto entre la tradición europea y el espíritu indómito de los Andes chilenos.",
        // Contacto
        "contact-title": "Contacto",
        "contact-subtitle": "¿Quieres saber más sobre nuestra producción familiar?",
        // Footer
        "footer-copy": "&copy; 2026 Cerveza Artesanal Agualarga. Todos los derechos reservados.",
        "footer-location": "Espíritu de Montaña | Farellones, Chile",
        "footer-created": "Sitio creado por",
        // Carta de Maridaje page
        "menu-subtitle": "Exclusivo para Peluquería Francesa",
        "menu-desc": "Una cuidada selección de cervezas Agualarga, maridadas con los exquisitos platos del menú. Cada combinación está pensada para resaltar los sabores y matices tanto de las cervezas como de los platos.",
        "cat-share": "Para compartir",
        "cat-meats": "Carnes",
        "cat-fish": "Pescados",
        "cat-veg": "Vegetariano",
        "cat-crepes": "Crepes",
        "cat-pizzas": "Pizzas",
        "cat-chorrillanas": "Chorrillanas",
        "cat-sandwiches": "Sandwiches",
        // Food Items and Rationale
        "food-shrimp": "Camarones - Maridaje: IPA Culebra (7°)",
        "food-shrimp-r": "Razón: La intensidad cítrica y amarga de la IPA complementa el picante y los sabores especiados de las preparaciones a la diabla, mientras que sus notas frescas destacan los camarones en versiones al pilpil o ajillo.",
        "food-mushrooms": "Champiñones - Maridaje: Amber Ale Tucuquere (5.5°)",
        "food-mushrooms-r": "Razón: La Amber Ale combina de maravilla con los champiñones gracias a sus notas caramelizadas y su dulzor moderado, que equilibran tanto los sabores terrosos de los champiñones como el ajo o las especias intensas.",
        "food-chicken": "Pollo - Maridaje: Red Ale Lagartija (6°)",
        "food-chicken-r": "Razón: La Red Ale, con su equilibrio entre dulzor y amargor, armoniza con el pollo al ajillo, mientras que sus notas maltosas suavizan el picante del pilpil o la preparación a la diabla, logrando un balance perfecto.",
        "food-steak": "Filete - Maridaje: Stout Cóndor (5.5°)",
        "food-steak-r": "Razón: La Stout aporta un contraste delicioso a las notas intensas y especiadas del filete al ajillo o a la diabla, mientras que sus sabores profundos de café y chocolate realzan la jugosidad y la riqueza del filete en cualquier preparación.",
        "food-coq": "Coq Au Vin Criollo - Maridaje: Amber Ale Tucuquere (5.5°)",
        "food-coq-r": "Razón: La Amber Ale complementa perfectamente el sabor profundo y terroso de este clásico plato criollo. Su malta caramelizada resalta las notas del vino tinto y las setas, mientras que el ligero amargor limpia el paladar entre cada bocado.",
        "food-suprema": "Suprema de Ave Parisienne - Maridaje: Red Ale Lagartija (6°)",
        "food-suprema-r": "Razón: La Red Ale, con su cuerpo robusto y toques de caramelo, acompaña la intensidad del jamón serrano y el cremoso relleno. Su amargor medio equilibra la grasa del queso crema, permitiendo una experiencia gustativa redonda.",
        "food-tongue": "Lengua Almendrada - Maridaje: Stout Cóndor (5.5°)",
        "food-tongue-r": "Razón: La Stout es ideal para este plato debido a sus notas de chocolate y café, que se mezclan a la perfección con la cremosidad de la salsa de almendras, aportando profundidad sin opacar el delicado sabor de la lengua.",
        "food-duck": "Confit de Pato a la Naranja - Maridaje: IPA Culebra (7°)",
        "food-duck-r": "Razón: El amargor pronunciado de la IPA equilibra la dulzura de la salsa de naranja, mientras que sus notas cítricas refuerzan el perfil afrutado del plato. Además, su cuerpo potente acompaña la riqueza del pato confitado.",
        "food-chef": "Filete del Chef - Maridaje: Amber Ale Tucuquere (5.5°)",
        "food-chef-r": "Razón: La Amber Ale destaca en este maridaje gracias a su equilibrio entre dulzor y amargor, permitiendo que cada tipo de salsa brille. En especial, armoniza con las salsas de roquefort y oporto, realzando los sabores intensos del filete y el tocino.",
        "food-bourguignon": "Boeuf Bourguignon - Maridaje: Stout Cóndor (5.5°)",
        "food-bourguignon-r": "Razón: La cremosidad y notas tostadas de la Stout complementan los sabores intensos del vino tinto y los champiñones, mientras que su final suave resalta los matices ahumados de la panceta.",
        "food-tuna": "Atún Criollo - Maridaje: IPA Culebra (7°)",
        "food-tuna-r": "Razón: Las notas cítricas y el amargor de la IPA aportan frescura al atún y cortan la dulzura de la pastelera de choclo, creando un maridaje equilibrado que realza los sabores marinos.",
        "food-salmon": "Salmón al Azafrán - Maridaje: Red Ale Lagartija (6°)",
        "food-salmon-r": "Razón: La Red Ale aporta una ligera dulzura que complementa las notas florales del azafrán y el toque terroso del risotto negro, mientras su amargor moderado limpia el paladar tras cada bocado de salmón.",
        "food-lasagna": "Lasagna de Berenjena - Maridaje: Amber Ale Tucuquere (5.5°)",
        "food-lasagna-r": "Razón: La maltosidad ligera de la Amber Ale combina bien con la riqueza de la bechamel y las berenjenas asadas, sin sobrecargar el paladar.",
        "food-crepes-shrimp": "Crepes de Camarones - Maridaje: IPA Culebra (7°)",
        "food-crepes-shrimp-r": "Razón: El frescor cítrico de la IPA se combina perfectamente con los sabores marinos de los camarones, aportando un contraste vibrante y un final refrescante.",
        "food-crepes-asp": "Crepes de Espárragos - Maridaje: Red Ale Lagartija (6°)",
        "food-crepes-asp-r": "Razón: La Red Ale equilibra la riqueza del parmesano y la crema con su ligero dulzor, mientras que su amargor realza el sabor herbáceo de los espárragos y la alcachofa.",
        "food-pizza-marg": "Pizza Margarita - Maridaje: Amber Ale Tucuquere (5.5°)",
        "food-pizza-marg-r": "Razón: La Amber Ale complementa el frescor del pesto y la acidez de la salsa pomodoro. Sus notas caramelizadas balancean los sabores simples pero vibrantes de la Margarita, realzando la suavidad de la mozzarella.",
        "food-pizza-4q": "Pizza Cuatro Quesos - Maridaje: Stout Cóndor (5.5°)",
        "food-pizza-4q-r": "Razón: La Stout, con su cuerpo cremoso y notas de café y chocolate, contrasta y equilibra la intensidad del queso azul y el parmesano, mientras su ligera dulzura acompaña la textura del cheddar, creando un maridaje audaz y rico en matices.",
        "food-pizza-ole": "Pizza Olé - Maridaje: IPA Culebra (7°)",
        "food-pizza-ole-r": "Razón: La amargor pronunciada y los toques cítricos de la IPA limpian el paladar del toque graso del pepperoni y resaltan los sabores dulces de la cebolla caramelizada y los champiñones, creando un balance perfecto entre ingredientes fuertes y delicados.",
        "food-pizza-veg": "Pizza Veggie - Maridaje: Red Ale Lagartija (6°)",
        "food-pizza-veg-r": "Razón: La Red Ale, con sus notas maltosas y un amargor equilibrado, resalta los sabores grillados de las verduras y el pesto, mientras su dulzura ligera acompaña la caramelización de la cebolla y los tomates cherry confitados.",
        "food-chorr-bacon": "Chorrillana Papas Fritas con Tocino, Queso Cheddar y Cebollín - Maridaje: Amber Ale Tucuquere (5.5°)",
        "food-chorr-bacon-r": "Razón: La Amber Ale se combina bien con el tocino y el cheddar gracias a su malta suave, que complementa los sabores salados sin abrumar, mientras que su ligera efervescencia refresca el paladar.",
        "food-chorr-paris": "Chorrillana Parisiene para 2 personas - Maridaje: Stout Cóndor (5.5°)",
        "food-chorr-paris-r": "Razón: La riqueza y suavidad de la Stout complementa la cremosidad de la salsa parisienne, mientras sus notas ahumadas realzan el sabor de la longaniza, ofreciendo un maridaje robusto y satisfactorio.",
        "food-chorr-mixed": "Chorrillana Mixta para 2 personas - Maridaje: Red Ale Lagartija (6°)",
        "food-chorr-mixed-r": "Razón: La Red Ale, con su balance entre dulzor y amargor, armoniza bien con los diversos tipos de carne, especialmente el cerdo y la longaniza, mientras sus notas maltosas suavizan el conjunto del plato.",
        "food-chorr-blvd": "Chorrillana Boulevard para 2 personas - Maridaje: IPA Culebra (7°)",
        "food-chorr-blvd-r": "Razón: La IPA, con su amargor destacado y notas cítricas, equilibra los sabores intensos de la longaniza y el cerdo, mientras que sus matices frescos resaltan los camarones y aportan una frescura vibrante al plato.",
        "food-sand-tongue": "Sándwich de Lengua - Maridaje: Stout Cóndor (5.5°)",
        "food-sand-tongue-r": "Razón: La Stout, con sus notas de café y chocolate, complementa la textura suave de la lengua y la cremosidad de la salsa tártara, creando una experiencia completa que armoniza los sabores y equilibra las texturas.",
        "food-burger-veg": "Hamburguesa Veggie - Maridaje: Red Ale Lagartija (6°)",
        "food-burger-veg-r": "Razón: La Red Ale es una excelente combinación para la hamburguesa veggie, ya que sus notas maltosas y dulces contrastan y complementan los sabores tostados de las verduras asadas y el toque fuerte de la salsa roquefort. Además, su amargor ligero equilibra el queso mozzarella y las legumbres.",
        "food-sand-pernil": "Sándwich de Pernil - Maridaje: Amber Ale Tucuquere (5.5°)",
        "food-sand-pernil-r": "Razón: La Amber Ale, con su dulzor suave y malta equilibrada, complementa la jugosidad y sazón del pernil, resaltando su sabor sin opacarlo. Su amargor moderado ayuda a refrescar el paladar tras cada bocado."
    },
    en: {
        // Age Gate
        "age-question": "Are you over 18 years old?",
        "age-btn-yes": "I am over 18",
        "age-btn-no": "I am under 18",
        // Nav Links
        "nav-about": "About Us",
        "nav-varieties": "Varieties",
        "nav-places": "Where to Find Us",
        "nav-brewer": "Our Brewer",
        "nav-contact": "Contact",
        "nav-back": "Back to Home",
        // Hero
        "hero-title": "Mountain Spirit",
        "hero-subtitle": "Craft beer, brewed with spring water in Farellones.",
        "hero-cta": "Points of Sale",
        // Quiénes Somos
        "about-title": "Our Essence",
        "about-p1": "At <strong>Agualarga</strong>, the heart of our beer beats in Farellones. Here, in the majesty of the mountains, our craft beer is born, infused with the incomparable purity of natural <strong>\"Spring Water\"</strong>.",
        "about-p2": "This unique origin allows us to offer you varieties with an authentic flavor, reflecting our family passion and commitment to quality. We believe in craftsmanship, innovation, and the satisfaction of those looking for a memorable brewing experience.",
        // Variedades
        "varieties-title": "Our Varieties",
        "varieties-subtitle": "Discover the character of each of our creations.",
        "beer-detail-alcohol": "Alcohol",
        "beer-btn-animal": "About the Animal",
        // Beers
        "beer-amber-name": "Amber Ale Tucúquere",
        "beer-amber-desc": "Perfect balance between malt and hops, with a deep amber color.",
        "beer-amber-animal": "The <strong>Tucúquere</strong> (<em>Bubo magellanicus</em>) is the largest owl in Chile. Guardian of the Andean night, its deep hooting echoes through the ravines. It represents the silent wisdom and vigilance of our valleys.",
        "beer-stout-name": "Stout Condor",
        "beer-stout-desc": "Dark, robust, and creamy, with intense notes of coffee and chocolate.",
        "beer-stout-animal": "The <strong>Andean Condor</strong> (<em>Vultur gryphus</em>) is the king of the South American skies. Symbol of power and freedom, it glides over the snow-capped peaks connecting the earthly world with the spiritual.",
        "beer-red-name": "Red Lagartija",
        "beer-red-desc": "Reddish and vibrant, with a malty character and a smooth finish.",
        "beer-red-animal": "The <strong>Chilean Lizard</strong> is an agile inhabitant of sunny rocks. With its vibrant colors, it symbolizes resilience and the life that flourishes even in the most arid mountain terrains.",
        "beer-ipa-name": "IPA Culebra",
        "beer-ipa-desc": "Powerful and aromatic, a hop explosion for the brave.",
        "beer-ipa-animal": "The <strong>Long-tailed Snake</strong> (<em>Philodryas chamissonis</em>) is endemic to Chile. Elegant and fast, it glides through scrublands, reminding us of the respect for wild nature and its balance.",
        // Puntos de Venta
        "places-title": "Points of Sale",
        "places-subtitle": "Enjoy Agualarga in these exclusive places:",
        "place-pf-desc": "Historic Bar Restaurant in the heart of Barrio Yungay.",
        "place-pf-address": "<strong>Address:</strong> Compañía de Jesús 2789, Santiago.",
        "place-pf-res": "<strong>Reservations:</strong> +56 9 7798 9743",
        "place-pf-web": "Visit Website",
        "place-pf-menu": "See Pairing Menu",
        "place-ap-desc": "Tradition and homemade food in Curacaví.",
        "place-ap-address": "<strong>Address:</strong> Route 68 km 55, Curacaví.",
        "place-ap-res": "<strong>Reservations:</strong> +56 2 2835 1122",
        "place-ap-web": "Visit Website",
        // Cervecero
        "brewer-title": "The Master Brewer",
        "brewer-name": "Sergio Lagos Balmaceda",
        "brewer-p1": "Trained in the USA, Argentina, and Ireland, Sergio is the alchemist behind Agualarga. His journey began in 2012 and was perfected by exploring Argentine hops and Irish stout tradition.",
        "brewer-p2": "Each recipe is a tribute to his travels and learning, always seeking the perfect balance between European tradition and the wild spirit of the Chilean Andes.",
        // Contacto
        "contact-title": "Contact",
        "contact-subtitle": "Want to know more about our family production?",
        // Footer
        "footer-copy": "&copy; 2026 Cerveza Artesanal Agualarga. All rights reserved.",
        "footer-location": "Mountain Spirit | Farellones, Chile",
        "footer-created": "Site created by",
        // Carta de Maridaje page
        "menu-subtitle": "Exclusive for Peluquería Francesa",
        "menu-desc": "A careful selection of Agualarga beers, paired with the exquisite dishes on the menu. Each combination is designed to highlight the flavors and nuances of both the beers and the dishes.",
        "cat-share": "To share",
        "cat-meats": "Meats",
        "cat-fish": "Fish",
        "cat-veg": "Vegetarian",
        "cat-crepes": "Crepes",
        "cat-pizzas": "Pizzas",
        "cat-chorrillanas": "Chorrillanas",
        "cat-sandwiches": "Sandwiches",
        // Food Items and Rationale
        "food-shrimp": "Shrimp - Pairing: IPA Culebra (7°)",
        "food-shrimp-r": "Reason: The citrus and bitter intensity of the IPA complements the spiciness and spiced flavors of the \"a la diabla\" preparations, while its fresh notes highlight the shrimp in \"al pilpil\" or garlic versions.",
        "food-mushrooms": "Mushrooms - Pairing: Amber Ale Tucuquere (5.5°)",
        "food-mushrooms-r": "Reason: The Amber Ale pairs wonderfully with mushrooms thanks to its caramelized notes and moderate sweetness, which balance both the earthy flavors of the mushrooms and the garlic or intense spices.",
        "food-chicken": "Chicken - Pairing: Red Ale Lagartija (6°)",
        "food-chicken-r": "Reason: The Red Ale, with its balance between sweetness and bitterness, harmonizes with garlic chicken, while its malty notes soften the spiciness of \"pilpil\" or \"a la diabla\" preparation, achieving a perfect balance.",
        "food-steak": "Steak - Pairing: Stout Cóndor (5.5°)",
        "food-steak-r": "Reason: The Stout provides a delicious contrast to the intense and spiced notes of the steak with garlic or \"a la diabla\", while its deep coffee and chocolate flavors enhance the juiciness and richness of the steak in any preparation.",
        "food-coq": "Creole Coq Au Vin - Pairing: Amber Ale Tucuquere (5.5°)",
        "food-coq-r": "Reason: The Amber Ale perfectly complements the deep and earthy flavor of this classic Creole dish. Its caramelized malt highlights the notes of red wine and mushrooms, while the light bitterness cleanses the palate between bites.",
        "food-suprema": "Chicken Supreme Parisienne - Pairing: Red Ale Lagartija (6°)",
        "food-suprema-r": "Reason: The Red Ale, with its robust body and hints of caramel, accompanies the intensity of serrano ham and the creamy filling. Its medium bitterness balances the fat of the cream cheese, allowing a well-rounded tasting experience.",
        "food-tongue": "Almond Tongue - Pairing: Stout Cóndor (5.5°)",
        "food-tongue-r": "Reason: The Stout is ideal for this dish due to its chocolate and coffee notes, which blend perfectly with the creaminess of the almond sauce, providing depth without overshadowing the delicate flavor of the tongue.",
        "food-duck": "Duck Confit with Orange - Pairing: IPA Culebra (7°)",
        "food-duck-r": "Reason: The pronounced bitterness of the IPA balances the sweetness of the orange sauce, while its citrus notes reinforce the fruity profile of the dish. In addition, its powerful body accompanies the richness of the duck confit.",
        "food-chef": "Chef's Steak - Pairing: Amber Ale Tucuquere (5.5°)",
        "food-chef-r": "Reason: The Amber Ale stands out in this pairing thanks to its balance between sweetness and bitterness, allowing each type of sauce to shine. Especially, it harmonizes with roquefort and port wine sauces, enhancing the intense flavors of the steak and bacon.",
        "food-bourguignon": "Boeuf Bourguignon - Pairing: Stout Cóndor (5.5°)",
        "food-bourguignon-r": "Reason: The creaminess and roasted notes of the Stout complement the intense flavors of red wine and mushrooms, while its smooth finish highlights the smoky nuances of the bacon.",
        "food-tuna": "Creole Tuna - Pairing: IPA Culebra (7°)",
        "food-tuna-r": "Reason: The citrus notes and bitterness of the IPA bring freshness to the tuna and cut the sweetness of the corn \"pastelera\", creating a balanced pairing that enhances marine flavors.",
        "food-salmon": "Saffron Salmon - Pairing: Red Ale Lagartija (6°)",
        "food-salmon-r": "Reason: The Red Ale provides a light sweetness that complements the floral notes of saffron and the earthy touch of black risotto, while its moderate bitterness cleanses the palate after each bite of salmon.",
        "food-lasagna": "Eggplant Lasagna - Pairing: Amber Ale Tucuquere (5.5°)",
        "food-lasagna-r": "Reason: The light maltiness of the Amber Ale pairs well with the richness of the bechamel and roasted eggplants, without overloading the palate.",
        "food-crepes-shrimp": "Shrimp Crepes - Pairing: IPA Culebra (7°)",
        "food-crepes-shrimp-r": "Reason: The citrus freshness of the IPA pairs perfectly with the marine flavors of the shrimp, providing a vibrant contrast and a refreshing finish.",
        "food-crepes-asp": "Asparagus Crepes - Pairing: Red Ale Lagartija (6°)",
        "food-crepes-asp-r": "Reason: The Red Ale balances the richness of parmesan and cream with its light sweetness, while its bitterness enhances the herbaceous flavor of asparagus and artichoke.",
        "food-pizza-marg": "Margherita Pizza - Pairing: Amber Ale Tucuquere (5.5°)",
        "food-pizza-marg-r": "Reason: The Amber Ale complements the freshness of the pesto and the acidity of the pomodoro sauce. Its caramelized notes balance the simple yet vibrant Margherita flavors, enhancing the smoothness of the mozzarella.",
        "food-pizza-4q": "Four Cheese Pizza - Pairing: Stout Cóndor (5.5°)",
        "food-pizza-4q-r": "Reason: The Stout, with its creamy body and notes of coffee and chocolate, contrasts and balances the intensity of blue cheese and parmesan, while its light sweetness accompanies the texture of cheddar, creating a bold and nuanced pairing.",
        "food-pizza-ole": "Olé Pizza - Pairing: IPA Culebra (7°)",
        "food-pizza-ole-r": "Reason: The pronounced bitterness and citrus touches of the IPA cleanse the palate from the greasy touch of pepperoni and highlight the sweet flavors of caramelized onion and mushrooms, creating a perfect balance between strong and delicate ingredients.",
        "food-pizza-veg": "Veggie Pizza - Pairing: Red Ale Lagartija (6°)",
        "food-pizza-veg-r": "Reason: The Red Ale, with its malty notes and balanced bitterness, highlights the grilled flavors of vegetables and pesto, while its light sweetness accompanies the caramelization of the onion and candied cherry tomatoes.",
        "food-chorr-bacon": "French Fries Chorrillana with Bacon, Cheddar and Green Onion - Pairing: Amber Ale Tucuquere (5.5°)",
        "food-chorr-bacon-r": "Reason: The Amber Ale pairs well with bacon and cheddar thanks to its smooth malt, which complements the salty flavors without overwhelming, while its light effervescence refreshes the palate.",
        "food-chorr-paris": "Parisienne Chorrillana for 2 people - Pairing: Stout Cóndor (5.5°)",
        "food-chorr-paris-r": "Reason: The richness and smoothness of the Stout complement the creaminess of the parisienne sauce, while its smoky notes enhance the flavor of the sausage, offering a robust and satisfying pairing.",
        "food-chorr-mixed": "Mixed Chorrillana for 2 people - Pairing: Red Ale Lagartija (6°)",
        "food-chorr-mixed-r": "Reason: The Red Ale, with its balance between sweetness and bitterness, harmonizes well with the various types of meat, especially pork and sausage, while its malty notes soften the overall dish.",
        "food-chorr-blvd": "Boulevard Chorrillana for 2 people - Pairing: IPA Culebra (7°)",
        "food-chorr-blvd-r": "Reason: The IPA, with its prominent bitterness and citrus notes, balances the intense flavors of sausage and pork, while its fresh nuances highlight the shrimp and bring a vibrant freshness to the dish.",
        "food-sand-tongue": "Beef Tongue Sandwich - Pairing: Stout Cóndor (5.5°)",
        "food-sand-tongue-r": "Reason: The Stout, with its coffee and chocolate notes, complements the tender texture of the beef tongue and the creaminess of the tartar sauce, creating a complete experience that harmonizes flavors and balances textures.",
        "food-burger-veg": "Veggie Burger - Pairing: Red Ale Lagartija (6°)",
        "food-burger-veg-r": "Reason: The Red Ale is an excellent combination for the veggie burger, as its malty and sweet notes contrast and complement the roasted flavors of grilled vegetables and the strong touch of the roquefort sauce. In addition, its light bitterness balances the mozzarella cheese and legumes.",
        "food-sand-pernil": "Pernil Sandwich (Pork Shoulder) - Pairing: Amber Ale Tucuquere (5.5°)",
        "food-sand-pernil-r": "Reason: The Amber Ale, with its mild sweetness and balanced malt, complements the juiciness and seasoning of the pernil, highlighting its flavor without overshadowing it. Its moderate bitterness helps refresh the palate after each bite."
    },
    pt: {
        // Age Gate
        "age-question": "Você é maior de 18 anos?",
        "age-btn-yes": "Sou maior de 18",
        "age-btn-no": "Sou menor",
        // Nav Links
        "nav-about": "Quem Somos",
        "nav-varieties": "Variedades",
        "nav-places": "Onde nos Encontrar",
        "nav-brewer": "Nosso Cervejeiro",
        "nav-contact": "Contato",
        "nav-back": "Voltar ao Início",
        // Hero
        "hero-title": "Espírito de Montanha",
        "hero-subtitle": "Pegada Artesanal, produzida com Água de Nascente em Farellones.",
        "hero-cta": "Pontos de Venda",
        // Quiénes Somos
        "about-title": "Nossa Essência",
        "about-p1": "Em <strong>Agualarga</strong>, o coração da nossa cerveja bate em Farellones. Aqui, na majestade da montanha, nasce a nossa cerveja artesanal, infundida com la pureza inigualável da <strong>\"Água de Nascente\"</strong> natural.",
        "about-p2": "Esta origem única permite-nos oferecer-lhe variedades com um sabor autêntico, refletindo a nossa paixão familiar e fidelidade à qualidade. Acreditamos no artesanato, na inovação e na satisfação de quem procura uma experiência cervejeira memorável.",
        // Variedades
        "varieties-title": "Nossas Variedades",
        "varieties-subtitle": "Descubra o caráter de cada uma de nossas criações.",
        "beer-detail-alcohol": "Álcool",
        "beer-btn-animal": "Sobre o Animal",
        // Beers
        "beer-amber-name": "Amber Ale Tucúquere",
        "beer-amber-desc": "Equilíbrio perfeito entre malte e lúpulo, com uma cor âmbar profunda.",
        "beer-amber-animal": "O <strong>Tucúquere</strong> (<em>Bubo magellanicus</em>) é a maior coruja do Chile. Guardião da noite andina, seu piar profundo ecoa pelas ravinas. Representa a sabedoria silenciosa e a vigilância dos nossos vales.",
        "beer-stout-name": "Stout Condor",
        "beer-stout-desc": "Escura, robusta e cremosa, com notas intensas de café e chocolate.",
        "beer-stout-animal": "O <strong>Condor Andino</strong> (<em>Vultur gryphus</em>) é o rei dos céus sul-americanos. Símbolo de poder e liberdade, ele plana sobre os picos nevados, conectando o mundo terreno ao espiritual.",
        "beer-red-name": "Red Lagartija",
        "beer-red-desc": "Avermelhada e vibrante, com caráter de malte e final suave.",
        "beer-red-animal": "A <strong>Lagartixa Chilena</strong> é uma ágil habitante das rochas ensolaradas. Com suas cores vibrantes, simboliza a resiliência e a vida que floresce mesmo nos terrenos mais áridos da montanha.",
        "beer-ipa-name": "IPA Culebra",
        "beer-ipa-desc": "Potente e aromática, uma explosão de lúpulo para os corajosos.",
        "beer-ipa-animal": "A <strong>Cobra de Cauda Longa</strong> (<em>Philodryas chamissonis</em>) é endêmica do Chile. Elegante e rápida, ela desliza entre os arbustos, lembrando-nos o respeito pela natureza selvagem e seu equilíbrio.",
        // Puntos de Venta
        "places-title": "Pontos de Venda",
        "places-subtitle": "Desfrute da Agualarga nestes locais exclusivos:",
        "place-pf-desc": "Bar e restaurante histórico no coração do Barrio Yungay.",
        "place-pf-address": "<strong>Endereço:</strong> Compañía de Jesús 2789, Santiago.",
        "place-pf-res": "<strong>Reservas:</strong> +56 9 7798 9743",
        "place-pf-web": "Visitar Site",
        "place-pf-menu": "Ver Carta de Maridagem",
        "place-ap-desc": "Tradição e comida caseira em Curacaví.",
        "place-ap-address": "<strong>Endereço:</strong> Rota 68 km 55, Curacaví.",
        "place-ap-res": "<strong>Reservas:</strong> +56 2 2835 1122",
        "place-ap-web": "Visitar Site",
        // Cervecero
        "brewer-title": "O Mestre Cervejeiro",
        "brewer-name": "Sergio Lagos Balmaceda",
        "brewer-p1": "Formado nos EUA, Argentina e Irlanda, Sergio é o alquimista por trás da Agualarga. Sua jornada começou em 2012 e se aperfeiçoou explorando os lúpulos argentinos e a tradição stout irlandesa.",
        "brewer-p2": "Cada receita é uma homenagem às suas viagens e aprendizados, buscando sempre o equilíbrio perfeito entre a tradição europeia e o espírito indômito dos Andes chilenos.",
        // Contacto
        "contact-title": "Contato",
        "contact-subtitle": "Quer saber mais sobre nossa produção familiar?",
        // Footer
        "footer-copy": "&copy; 2026 Cerveza Artesanal Agualarga. Todos os direitos reservados.",
        "footer-location": "Espírito de Montanha | Farellones, Chile",
        "footer-created": "Site criado por",
        // Carta de Maridaje page
        "menu-subtitle": "Exclusivo para Peluquería Francesa",
        "menu-desc": "Uma seleção cuidadosa de cervejas Agualarga, maridadas com os requintados pratos do menu. Cada combinação é pensada para realçar os sabores e nuances tanto das cervejas quanto dos pratos.",
        "cat-share": "Para compartilhar",
        "cat-meats": "Carnes",
        "cat-fish": "Peixes",
        "cat-veg": "Vegetariano",
        "cat-crepes": "Crepes",
        "cat-pizzas": "Pizzas",
        "cat-chorrillanas": "Chorrillanas",
        "cat-sandwiches": "Sanduíches",
        // Food Items and Rationale
        "food-shrimp": "Camarões - Maridagem: IPA Culebra (7°)",
        "food-shrimp-r": "Razão: A intensidade cítrica e amarga da IPA complementa a picância e os sabores condimentados das preparações \"a la diabla\", enquanto suas notas frescas destacam os camarões nas versões \"al pilpil\" ou ao alho.",
        "food-mushrooms": "Cogumelos - Maridagem: Amber Ale Tucuquere (5.5°)",
        "food-mushrooms-r": "Razão: A Amber Ale combina maravilhosamente com os cogumelos graças às suas notas caramelizadas e ao seu dulçor moderado, que equilibram tanto os sabores terrosos dos cogumelos quanto o alho ou as especiarias intensas.",
        "food-chicken": "Frango - Maridagem: Red Ale Lagartija (6°)",
        "food-chicken-r": "Razão: A Red Ale, com seu equilíbrio entre dulçor e amargor, harmoniza com o frango ao alho, enquanto suas notas de malte suavizam a picância do \"pilpil\" ou da preparação \"a la diabla\", alcançando um equilíbrio perfeito.",
        "food-steak": "Filé - Maridagem: Stout Cóndor (5.5°)",
        "food-steak-r": "Razão: A Stout proporciona um contraste delicioso às notas intensas e condimentadas do filé ao alho ou \"a la diabla\", enquanto seus sabores profundos de café e chocolate realçam a suculência e a riqueza do filé em qualquer preparação.",
        "food-coq": "Coq Au Vin Crioulo - Maridagem: Amber Ale Tucuquere (5.5°)",
        "food-coq-r": "Razão: A Amber Ale complementa perfeitamente o sabor profundo e terroso deste clássico prato crioulo. Seu malte caramelizado destaca as notas de vinho tinto e cogumelos, enquanto o leve amargor limpa o paladar entre cada garfada.",
        "food-suprema": "Suprema de Ave Parisienne - Maridagem: Red Ale Lagartija (6°)",
        "food-suprema-r": "Razão: A Red Ale, com seu corpo robusto e toques de caramelo, acompanha a intensidade do presunto serrano e do recheio cremoso. Seu amargor médio equilibra a gordura do requeijão, permitindo uma experiência de sabor redonda.",
        "food-tongue": "Língua Amendoada - Maridagem: Stout Cóndor (5.5°)",
        "food-tongue-r": "Razão: A Stout é ideal para este prato devido às suas notas de chocolate e café, que se misturam perfeitamente com a cremosidade do molho de amêndoas, trazendo profundidade sem ofuscar o sabor delicado da língua.",
        "food-duck": "Confit de Pato com Laranja - Maridagem: IPA Culebra (7°)",
        "food-duck-r": "Razão: O amargor acentuado da IPA equilibra o dulçor do molho de laranja, enquanto suas notas cítricas reforçam o perfil frutado do prato. Além disso, seu corpo potente acompanha a riqueza do pato confitado.",
        "food-chef": "Filé do Chef - Maridagem: Amber Ale Tucuquere (5.5°)",
        "food-chef-r": "Razão: A Amber Ale destaca-se nesta maridagem graças ao seu equilíbrio entre dulçor e amargor, permitindo que cada tipo de molho brilhe. Especialmente, harmoniza com os molhos roquefort e do porto, realçando os sabores intensos do filé e do bacon.",
        "food-bourguignon": "Boeuf Bourguignon - Maridagem: Stout Cóndor (5.5°)",
        "food-bourguignon-r": "Razão: A cremosidade e as notas tostadas de la Stout complementam os sabores intensos do vinho tinto e dos cogumelos, enquanto seu final suave destaca as nuances defumadas do bacon.",
        "food-tuna": "Atum Crioulo - Maridagem: IPA Culebra (7°)",
        "food-tuna-r": "Razão: As notas cítricas e o amargor da IPA trazem frescor ao atum e cortam o dulçor da pastelera de milho, criando uma maridagem equilibrada que realça os sabores do mar.",
        "food-salmon": "Salmão ao Açafrão - Maridagem: Red Ale Lagartija (6°)",
        "food-salmon-r": "Razão: A Red Ale traz um leve dulçor que complementa as notas florais do açafrão e o toque terroso do risoto negro, enquanto seu amargor moderado limpa o paladar após cada garfada de salmão.",
        "food-lasagna": "Lasanha de Berinjela - Maridagem: Amber Ale Tucuquere (5.5°)",
        "food-lasagna-r": "Razão: O caráter maltoso leve da Amber Ale combina bem com a riqueza do bechamel e das berinjelas assadas, sem sobrecarregar o paladar.",
        "food-crepes-shrimp": "Crepes de Camarão - Maridagem: IPA Culebra (7°)",
        "food-crepes-shrimp-r": "Razão: O frescor cítrico da IPA combina perfeitamente com os sabores marinhos dos camarões, proporcionando um contraste vibrante e um final refrescante.",
        "food-crepes-asp": "Crepes de Aspargos - Maridagem: Red Ale Lagartija (6°)",
        "food-crepes-asp-r": "Razão: A Red Ale equilibra a riqueza do parmesão e do creme com seu leve dulçor, enquanto seu amargor realça o sabor herbáceo dos aspargos e alcachofras.",
        "food-pizza-marg": "Pizza Margherita - Maridagem: Amber Ale Tucuquere (5.5°)",
        "food-pizza-marg-r": "Razão: A Amber Ale complementa o frescor do pesto e a acidez do molho pomodoro. Suas notas caramelizadas equilibram os sabores simples porém vibrantes da Margherita, realçando a suavidade da mozzarella.",
        "food-pizza-4q": "Pizza Quatro Queijos - Maridagem: Stout Cóndor (5.5°)",
        "food-pizza-4q-r": "Razão: A Stout, com seu corpo cremoso e notas de café e chocolate, contrasta e equilibra a intensidade do queijo azul e do parmesão, enquanto seu leve dulçor acompanha a textura do cheddar, criando uma maridagem audaz e rica em nuances.",
        "food-pizza-ole": "Pizza Olé - Maridagem: IPA Culebra (7°)",
        "food-pizza-ole-r": "Razão: O amargor pronunciado e os toques cítricos da IPA limpam o paladar da gordura do pepperoni e destacam os sabores doces da cebola caramelizada e cogumelos, criando um equilíbrio perfeito entre ingredientes fortes e delicados.",
        "food-pizza-veg": "Pizza Veggie - Maridagem: Red Ale Lagartija (6°)",
        "food-pizza-veg-r": "Razão: A Red Ale, com suas notas de malte e amargor equilibrado, destaca os sabores grelhados dos vegetais e do pesto, enquanto seu leve dulçor acompanha a acidez da cebola e dos tomates cereja confitados.",
        "food-chorr-bacon": "Chorrillana Batata Frita com Bacon, Queijo Cheddar e Cebolinha - Maridagem: Amber Ale Tucuquere (5.5°)",
        "food-chorr-bacon-r": "Razão: A Amber Ale combina bem com o bacon e o cheddar graças ao seu malte suave, que complementa os sabores salados sem sobrecarregar, enquanto sua leve efervescência refresca o paladar.",
        "food-chorr-paris": "Chorrillana Parisienne para 2 pessoas - Maridagem: Stout Cóndor (5.5°)",
        "food-chorr-paris-r": "Razão: A riqueza e suavidade da Stout complementam a cremosidade do molho parisienne, enquanto suas notas defumadas realçam o sabor da linguiça, oferecendo uma maridagem robusta e satisfatória.",
        "food-chorr-mixed": "Chorrillana Mista para 2 pessoas - Maridagem: Red Ale Lagartija (6°)",
        "food-chorr-mixed-r": "Razão: A Red Ale, com seu equilíbrio entre dulçor e amargor, harmoniza bem com os diversos tipos de carne, especialmente porco e linguiça, enquanto suas notas de malte suavizam o conjunto do prato.",
        "food-chorr-blvd": "Chorrillana Boulevard para 2 pessoas - Maridagem: IPA Culebra (7°)",
        "food-chorr-blvd-r": "Razão: A IPA, com seu amargor destacado e notas cítricas, equilibra los sabores intensos da linguiça e do porco, enquanto suas nuances frescas destacam os camarões e trazem um frescor vibrante ao prato.",
        "food-sand-tongue": "Sanduíche de Língua - Maridagem: Stout Cóndor (5.5°)",
        "food-sand-tongue-r": "Razão: A Stout, com suas notas de café e chocolate, complementa a textura macia da língua e a cremosidade do molho tártaro, criando uma experiência completa que harmoniza os sabores e equilibra as texturas.",
        "food-burger-veg": "Hambúrguer Veggie - Maridagem: Red Ale Lagartija (6°)",
        "food-burger-veg-r": "Razão: A Red Ale é uma excelente combinação para o hambúrguer veggie, pois suas notas de malte e doces contrastam e complementam os sabores tostados dos vegetais grelhados e o toque marcante do molho roquefort. Além disso, seu leve amargor equilibra o queijo mozzarella e as leguminosas.",
        "food-sand-pernil": "Sanduíche de Pernil - Maridagem: Amber Ale Tucuquere (5.5°)",
        "food-sand-pernil-r": "Razão: A Amber Ale, com seu dulçor suave e malte equilibrado, complementa a suculência e o tempero do pernil, realçando seu sabor sem ofuscá-lo. Seu amargor moderado ajuda a refrescar o paladar após cada mordida."
    }
};

function getBrowserLanguage() {
    // Check localStorage first
    const saved = localStorage.getItem('preferredLanguage');
    if (saved) return saved;

    // Otherwise check browser language
    const browserLang = (navigator.language || navigator.userLanguage).toLowerCase();
    if (browserLang.startsWith('pt')) return 'pt';
    if (browserLang.startsWith('en')) return 'en';
    return 'es'; // default
}

function setLanguage(lang) {
    localStorage.setItem('preferredLanguage', lang);
    window.currentLanguage = lang;
    applyTranslations(lang);
    updateLanguageSelector(lang);
    
    // Dispatch custom event to notify other scripts (like script.js) to re-render dynamic content
    const event = new CustomEvent('languageChanged', { detail: { language: lang } });
    document.dispatchEvent(event);
}

function applyTranslations(lang) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const translation = translations[lang] && translations[lang][key];
        if (translation) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = translation;
            } else {
                el.innerHTML = translation;
            }
        }
    });
    
    // Update html lang attribute
    document.documentElement.lang = lang;
}

function updateLanguageSelector(lang) {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        const onClickAttr = btn.getAttribute('onclick');
        if (onClickAttr && onClickAttr.includes(`'${lang}'`)) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

// Make setLanguage globally accessible for the onclick attributes
window.setLanguage = setLanguage;

document.addEventListener('DOMContentLoaded', () => {
    const lang = getBrowserLanguage();
    setLanguage(lang);
});
