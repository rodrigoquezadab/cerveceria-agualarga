// ... (código anterior) ...

cervezas.forEach(cerveza => {
    const beerCard = document.createElement("div");
    beerCard.classList.add("beer-card");

    const beerImage = document.createElement("img");
    beerImage.src = `images/${cerveza.nombre.replace(/\s+/g, '-').toLowerCase()}.jpg`; // Asume que las imágenes están en una carpeta "images"
    beerImage.alt = cerveza.nombre;

    const beerDescription = document.createElement("p");
    beerDescription.innerHTML = `<strong>${cerveza.nombre}</strong>: ${cerveza.descripcion}`;

    beerCard.appendChild(beerImage);
    beerCard.appendChild(beerDescription);
    beerList.appendChild(beerCard);
});

// ... (código posterior) ...
