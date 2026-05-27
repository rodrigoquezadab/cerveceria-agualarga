# Contexto del Proyecto: Cerveza Artesanal Agualarga

Este documento proporciona un resumen detallado sobre la identidad de marca, el catálogo de productos, los puntos de distribución, la arquitectura técnica del sitio web y las decisiones de diseño del proyecto.

---

## 1. Identidad de Marca y Concepto

* **Nombre de Marca**: Cervecería Agualarga / Cerveza Artesanal Agualarga.
* **Tagline**: *Espíritu de Montaña*.
* **Propuesta de Valor**: Cerveza artesanal familiar de alta calidad, elaborada en la cordillera de Farellones, Chile, utilizando como ingrediente base la pureza inigualable del **"Agua de Vertiente"** natural.
* **El Maestro Cervecero**: **Sergio Lagos Balmaceda**.
  * Trayectoria: Activo desde 2012. Formado en Estados Unidos, Argentina e Irlanda. 
  * Estilo: Equilibrio entre la tradición europea (lúpulos de la Patagonia, cuerpo Stout de Irlanda) y el carácter indómito de la Cordillera de los Andes.

---

## 2. Catálogo de Variedades (Cervezas)

Cada variedad está asociada con un animal nativo de la fauna andina chilena, reflejando el concepto de la marca:

1. **Amber Ale Tucúquere (5.5°)**
   * **Perfil**: Equilibrio perfecto entre malta y lúpulo, color ámbar profundo.
   * **Animal**: El *Tucúquere* (*Bubo magellanicus*), el búho más grande de Chile, guardián silencioso y sabio de las quebradas andinas.
2. **Stout Cóndor (5.5°)**
   * **Perfil**: Oscura, robusta y cremosa, con notas intensas de café y chocolate.
   * **Animal**: El *Cóndor Andino* (*Vultur gryphus*), rey de las cumbres y cielos sudamericanos, símbolo de poder y libertad.
3. **Red Ale Lagartija (6.0°)**
   * **Perfil**: Rojiza y vibrante, con carácter maltoso y final suave.
   * **Animal**: La *Lagartija Chilena*, habitante resiliente de las rocas soleadas, símbolo de adaptación y vida en terrenos áridos.
4. **IPA Culebra (7.0°)**
   * **Perfil**: Potente y aromática, con una alta concentración de lúpulo.
   * **Animal**: La *Culebra de Cola Larga* (*Philodryas chamissonis*), reptil veloz y elegante, símbolo del equilibrio y el carácter indómito de la montaña.

---

## 3. Puntos de Venta y Distribución

La cerveza se distribuye de forma exclusiva en selectos restaurantes de comida criolla e histórica:
* **Peluquería Francesa (Santiago)**: Bar y restaurante patrimonial situado en el corazón del Barrio Yungay (Compañía de Jesús 2789). Cuenta con una carta de maridajes diseñada especialmente para acompañar cada cerveza.
* **Agua de Piedra (Curacaví)**: Restaurant de comida típica chilena y tradición casera en plena Ruta 68 (Km 55).

---

## 4. Arquitectura del Sitio Web (Frontend)

El sitio es una aplicación web estática construida sobre tecnologías web estándar (HTML5, CSS3 y JavaScript Vanilla) optimizada para velocidad de carga, SEO, accesibilidad y soporte multiidioma.

### Archivos del Proyecto
* [index.html](file:///c:/Users/RodCode/Desktop/Code/cerveceria-agualarga/index.html): Landing page principal que contiene el Hero, la Esencia de la Marca, el catálogo de cervezas, los puntos de venta, el perfil del cervecero, los enlaces de contacto y el pie de página (adaptado con soporte de tags `data-i18n`).
* [carta-maridaje.html](file:///c:/Users/RodCode/Desktop/Code/cerveceria-agualarga/carta-maridaje.html): Subpágina con el menú de maridajes de la Peluquería Francesa (adaptado con soporte de tags `data-i18n`).
* [styles.css](file:///c:/Users/RodCode/Desktop/Code/cerveceria-agualarga/styles.css): Hoja de estilos centralizada. Define variables de color, tipografías, responsividad, y estilos para el selector de idiomas (`.lang-selector-container` y `.lang-btn`).
* [age-gate.css](file:///c:/Users/RodCode/Desktop/Code/cerveceria-agualarga/age-gate.css): Estilos independientes para la pantalla de verificación de edad.
* [i18n.js](file:///c:/Users/RodCode/Desktop/Code/cerveceria-agualarga/i18n.js): Motor de internacionalización y diccionario de traducciones que soporta:
  * **Español (es)**: Idioma por defecto.
  * **Inglés (en)**.
  * **Portugués de Brasil (pt)**.
  * Detección automática del idioma del navegador al cargar.
  * Almacenamiento persistente de la selección del usuario en `localStorage`.
  * Evento personalizado `languageChanged` para notificar cambios de idioma a otros scripts en tiempo real.
* [script.js](file:///c:/Users/RodCode/Desktop/Code/cerveceria-agualarga/script.js): Lógica del cliente que maneja:
  * El control del validador de mayoría de edad (`#age-gate`).
  * El menú hamburguesa móvil responsivo.
  * El catálogo interactivo de cervezas, escuchando el evento `languageChanged` para renderizar el nombre, descripción y datos de conservación de los animales en el idioma seleccionado sin recargar la página.
  * El desplazamiento suave de enlaces internos (`smooth scrolling`).

---

## 5. Sistema de Diseño y Estilos

* **Tipografías (Google Fonts)**:
  * Títulos: *Montserrat* (para aportar fuerza y elegancia geométrica).
  * Cuerpo de texto: *Open Sans* (alta legibilidad en pantalla).
* **Paleta de Colores**:
  * `--primary-color: #d35400` (Naranja ámbar oscuro - color representativo del tono cervecero).
  * `--secondary-color: #2c3e50` (Gris pizarra/azul oscuro - evoca la solidez de la roca de montaña y la elegancia nocturna).
  * `--accent-color: #e67e22` (Naranja ámbar claro - para estados activos y acentos).
  * `--background-light: #f4f4f4` (Gris claro de fondo).
* **Diseño Responsivo**:
  * Breakpoint principal a `768px` para alternar entre la visualización móvil (cabecera con menú colapsable, grilla de cervezas de 1 columna) y la visualización de escritorio (cabecera horizontal extendida, grilla de 2 columnas).
* **Accesibilidad e Interacción**:
  * El menú móvil cuenta con atributos dinámicos `aria-expanded` y `aria-label`.
  * La pantalla de verificación de mayoría de edad oculta temporalmente el contenido del fondo a los lectores de pantalla mediante `aria-hidden="true"`.
  * Todos los enlaces a sitios externos con `target="_blank"` cuentan con la etiqueta de seguridad `rel="noopener"`.
