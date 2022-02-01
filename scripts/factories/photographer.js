function photographerFactory(data) {
	const { name, id, portrait, city, country, tagline, price } = data;

	const picture = `assets/photographers/${portrait}`;

	function getUserCardDOM() {
		const article = document.createElement("article");
		const img = document.createElement("img");
		img.setAttribute("alt", name);
		img.setAttribute("src", picture);
		const h2 = document.createElement("h2");
		h2.textContent = name;
		const h1 = document.createElement("h1");
		h1.textContent = city + ", " + country;
		const p1 = document.createElement("p");
		p1.textContent = tagline;
		const p2 = document.createElement("p");
		p2.textContent = price + "€/jour";
		const lien = document.createElement("a");
		lien.setAttribute("id", id);
		lien.setAttribute("href", "photographer.html?id=" + id);
		lien.setAttribute(
			"aria-label",
			"Lien pour Aller sur la page personnelle de l'artiste " + name
		);
		article.appendChild(lien);
		lien.appendChild(img);
		lien.appendChild(h2);
		article.appendChild(h1);
		article.appendChild(p1);
		article.appendChild(p2);
		return article;
	}
	return { name, id, portrait, city, country, tagline, price, getUserCardDOM };
}
