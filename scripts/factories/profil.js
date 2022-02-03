function profilFactory(data, profilid) {
	//gestion des profil
	const { name, id, portrait, city, country, tagline } = data;

	const picture = `assets/photographers/${portrait}`;
	//info principal
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
	//photo de profil
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

function mediaFactory(data, profilid, name, i) {
	//gestion des profil
	const { id, photographerId, title, image, video, likes, date, price } = data;

	const picture = `assets/photographers/photo/${name}/${image}`;
	const videos = `assets/photographers/photo/${name}/${video}`;

	function getExtension(filename) {
		try {
			return filename.split(".").pop();
		} catch (error) {
			//console.log(error);
		}
	}
	//photo du photograph
	function getPhotoCardDOM() {
		//regarde si l'id correspond a celui de la page
		if (photographerId == profilid) {
			let filename = image;
			let extension = getExtension(filename);
			//check l'extension pour verifier que c'est une video
			if (extension == undefined) {
				//si oui on change la methode de creation
				const article = document.createElement("article");
				const vid = document.createElement("video");
				vid.setAttribute("alt", name);
				vid.setAttribute("src", videos);
				vid.setAttribute("type", "video/mp4");
				vid.setAttribute("onclick", "openimgModal();currentSlide(" + i + ")");
				const titles = document.createElement("p");
				titles.textContent = title;
				const like = document.createElement("i");
				like.textContent = likes;
				like.setAttribute("class", "fas fa-heart");
				like.setAttribute("aria-label", "likes");
				article.appendChild(vid);
				article.appendChild(titles);
				article.appendChild(like);
				return article;
			} else {
				//regarde si oui il les ajoute au document
				const article = document.createElement("article");
				const img = document.createElement("img");
				img.setAttribute("alt", name);
				img.setAttribute("src", picture);
				img.setAttribute("onclick", "openimgModal();currentSlide(" + i + ")");
				const titles = document.createElement("p");
				titles.textContent = title;
				const like = document.createElement("i");
				like.textContent = likes;
				like.setAttribute("class", "fas fa-heart");
				like.setAttribute("aria-label", "likes");
				article.appendChild(img);
				article.appendChild(titles);
				article.appendChild(like);
				return article;
			}
		} else {
			//regarde si non il ajoute un article en display none pour eviter les erreur
			const article = document.createElement("article");
			article.setAttribute("style", "display:none");
			article.setAttribute("class", "supp");
			return article;
		}
	}

	function getLighboxDOM() {
		let filename = image;
		let extension = getExtension(filename);
		//check l'extension pour verifier que c'est une video
		if (extension == undefined) {
			const div = document.createElement("div");
			const vid = document.createElement("video");
			div.setAttribute("class", "mySlides");
			vid.setAttribute("alt", name);
			vid.setAttribute("src", videos);
			vid.setAttribute("type", "video/mp4");
			div.appendChild(vid);
			return div;
		} else {
			const div = document.createElement("div");
			const img = document.createElement("img");
			div.setAttribute("class", "mySlides");
			img.setAttribute("alt", name);
			img.setAttribute("src", picture);
			div.appendChild(img);
			return div;
		}
	}

	return {
		id,
		photographerId,
		title,
		image,
		video,
		likes,
		date,
		price,
		getPhotoCardDOM,
		getLighboxDOM,
	};
}
