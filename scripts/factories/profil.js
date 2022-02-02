function profilFactory(data, profilid) {
	//gestion des profil
	const { name, id, portrait, city, country, tagline } = data;

	const picture = `assets/photographers/${portrait}`;

	function getUserCardDOM() {
		//regarde si l'id correspond a celui de la page
		if (id == profilid) {
			//regarde si oui il les ajoute au document
			const article = document.createElement("article");
			const h2 = document.createElement("h2");
			h2.textContent = name;
			const h1 = document.createElement("h1");
			h1.textContent = city + ", " + country;
			const p1 = document.createElement("p");
			p1.textContent = tagline;
			article.appendChild(h2);
			article.appendChild(h1);
			article.appendChild(p1);
			return article;
		} else {
			//regarde si non il ajoute un article en display none pour eviter les erreur
			const article = document.createElement("article");
			article.setAttribute("style", "display:none");
			article.setAttribute("class", "supp");
			return article;
		}
	}
	function getUserCardDOM2() {
		//regarde si l'id correspond a celui de la page
		if (id == profilid) {
			//regarde si oui il les ajoute au document
			const article = document.createElement("article");
			const img = document.createElement("img");
			img.setAttribute("alt", name);
			img.setAttribute("src", picture);
			article.appendChild(img);
			return article;
		} else {
			//regarde si non il ajoute un article en display none pour eviter les erreur
			const article = document.createElement("article");
			article.setAttribute("style", "display:none");
			article.setAttribute("class", "supp");
			return article;
		}
	}
	return {
		name,
		id,
		portrait,
		city,
		country,
		tagline,
		getUserCardDOM,
		getUserCardDOM2,
	};
}
