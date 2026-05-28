# ⛰️ Cervecería Agualarga — Espíritu de Montaña

[![Sitio Web](https://img.shields.io/badge/Web-Static-orange.svg)](#)
[![Licencia](https://img.shields.io/badge/Licencia-MIT-blue.svg)](#)
[![Idiomas](https://img.shields.io/badge/Idiomas-ES%20%7C%20EN%20%7C%20PT-green.svg)](#)

Sitio web oficial de **Cervecería Agualarga**, una cervecería artesanal y familiar de alta calidad elaborada en la cordillera de Farellones, Chile. Nuestra propuesta de valor se basa en la pureza inigualable del agua de vertiente natural y el carácter indómito de la Cordillera de los Andes.

---

## 🍺 Variedades y Concepto

Nuestra identidad está profundamente ligada a la fauna nativa andina. Cada una de nuestras cervezas rinde homenaje a un animal de la cordillera chilena:

1. **Amber Ale Tucúquere (5.5°)**
   * *Concepto*: El **Tucúquere** (*Bubo magellanicus*), el búho más grande de Chile, guardián silencioso de las quebradas.
   * *Perfil*: Equilibrio perfecto entre malta y lúpulo, de color ámbar profundo.
2. **Stout Cóndor (5.5°)**
   * *Concepto*: El **Cóndor Andino** (*Vultur gryphus*), rey de las cumbres, símbolo de poder y libertad.
   * *Perfil*: Oscura, robusta y cremosa, con notas intensas de café y chocolate.
3. **Red Ale Lagartija (6.0°)**
   * *Concepto*: La **Lagartija Chilena**, habitante resiliente de las rocas soleadas, símbolo de adaptación.
   * *Perfil*: Rojiza y vibrante, con carácter maltoso y final suave.
4. **IPA Culebra (7.0°)**
   * *Concepto*: La **Culebra de Cola Larga** (*Philodryas chamissonis*), veloz y elegante, símbolo del equilibrio de la montaña.
   * *Perfil*: Potente y aromática, con una alta concentración de lúpulo.

---

## 👨‍🍳 Maestro Cervecero: Sergio Lagos Balmaceda

Liderado por Sergio Lagos Balmaceda, activo desde 2012 y formado en Estados Unidos, Argentina e Irlanda. Su estilo equilibra la tradición cervecera europea con los lúpulos de la Patagonia y el cuerpo de las mejores Stout de Irlanda.

---

## 📍 Puntos de Venta y Distribución Exclusiva

Nuestras cervezas se distribuyen exclusivamente en selectos restaurantes de comida criolla y patrimonial:
* **Peluquería Francesa (Santiago)**: Restaurante patrimonial situado en el corazón del Barrio Yungay (Compañía de Jesús 2789).
* **Agua de Piedra (Curacaví)**: Restaurant de comida típica chilena y tradición casera en la Ruta 68 (Km 55).

---

## 🛠️ Arquitectura y Tecnologías del Sitio Web

Este sitio web es una aplicación estática optimizada para SEO, accesibilidad, adaptabilidad móvil y soporte multiidioma.

* **Frontend**: HTML5 semántico, CSS3 puro (sin dependencias de frameworks) y Vanilla JavaScript.
* **Internacionalización (i18n)**:
  * Motor personalizado en [i18n.js](i18n.js).
  * Soporte para tres idiomas: **Español (es)**, **Inglés (en)** y **Portugués de Brasil (pt)**.
  * Detección automática del idioma del navegador y persistencia de preferencia vía `localStorage`.
* **Filtro de Edad (Age Gate)**:
  * Pantalla de verificación interactiva para cumplir con las regulaciones de consumo de alcohol.
  * Accesibilidad mejorada (uso de `aria-hidden` para el contenido principal durante la verificación).
* **Diseño Responsivo**:
  * Menú hamburguesa móvil y grillas adaptables optimizadas para dispositivos móviles y de escritorio.

---

## 🚀 Cómo Ejecutar el Proyecto Localmente

Al ser una aplicación web estática, no requiere compilación ni instalación de dependencias complejas. Puedes ejecutarla de las siguientes maneras:

### Opción 1: Abrir directamente
Simplemente haz doble clic en el archivo `index.html` para abrirlo en tu navegador favorito.

### Opción 2: Usar un servidor web local (Recomendado)
Para asegurar el correcto funcionamiento de todas las rutas y la persistencia del idioma, se recomienda abrir el proyecto a través de un servidor local:

**Usando Python (si lo tienes instalado):**
```bash
# Python 3
python -m http.server 8000
```
Luego, accede a `http://localhost:8000` en tu navegador.

**Usando extensiones de editor (ej. VS Code):**
* Instala la extensión **Live Server** y haz clic en "Go Live" en la esquina inferior derecha.

---

## 📁 Estructura del Proyecto

```text
├── index.html            # Landing page principal
├── carta-maridaje.html   # Subpágina de maridajes de la Peluquería Francesa
├── styles.css            # Estilos CSS globales
├── age-gate.css          # Estilos de la pantalla de verificación de edad
├── script.js             # Lógica de interacciones y catálogo dinámico
├── i18n.js               # Motor de traducciones y diccionarios
├── context.md            # Documento de contexto interno del proyecto
└── images/               # Recursos de imagen de la marca y cervezas
```

---

*Cervecería Agualarga — Espíritu de Montaña. Elaborado en Farellones, Chile.*
