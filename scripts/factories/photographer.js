function photographerFactory(data) {
	const { name, id, portrait, city, country, tagline, price } = data;

	const picture = `assets/photographers/${portrait}`;

	function getUserCardDOM() {
		const article = document.createElement("article");
		const img = document.createElement("img");
		const h2 = document.createElement("h2");
		const h3 = document.createElement("h3");
		const p1 = document.createElement("p");
		const p2 = document.createElement("p");
		const lien = document.createElement("a");
		//
		img.setAttribute("alt", name);
		img.setAttribute("src", picture);
		//
		h2.textContent = name;
		//
		h3.textContent = city + ", " + country;
		//
		p1.textContent = tagline;
		//
		p2.textContent = price + "€/jour";
		p2.setAttribute("class", "pricePhotographer");
		//
		lien.setAttribute("id", id);
		lien.setAttribute("href", "photographer.html?id=" + id + "&name=" + name);
		lien.setAttribute(
			"aria-label",
			"Lien pour Aller sur la page personnelle de l'artiste " + name
		);
		//
		article.appendChild(lien);
		lien.appendChild(img);
		lien.appendChild(h2);
		article.appendChild(h3);
		article.appendChild(p1);
		article.appendChild(p2);
		//
		return article;
	}
	return { name, id, portrait, city, country, tagline, price, getUserCardDOM };
}
