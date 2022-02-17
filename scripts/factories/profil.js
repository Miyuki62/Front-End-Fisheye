function profilFactory(data, profilid) {
	//gestion des profil
	const { name, id, portrait, city, country, tagline, price } = data;

	const picture = `assets/photographers/${portrait}`;
	//info principal
	function getUserCardDOM() {
		//regarde si l'id correspond a celui de la page
		if (id == profilid) {
			//regarde si oui il les ajoute au document
			const article = document.createElement("article");
			const h2 = document.createElement("h2");
			const h3 = document.createElement("h3");
			const p1 = document.createElement("p");
			//
			article.setAttribute("id", "infoPhotographer");
			article.setAttribute("tabindex", "0");
			//
			h2.textContent = name;
			//
			h3.textContent = city + ", " + country;
			//
			p1.textContent = tagline;
			//
			article.appendChild(h2);
			article.appendChild(h3);
			article.appendChild(p1);
			//
			return article;
		} else {
			//regarde si non il ajoute un article en display none pour eviter les erreur
			const article = document.createElement("article");
			//
			article.setAttribute("style", "display:none");
			article.setAttribute("class", "supp");
			//
			return article;
		}
	}
	//photo de profil
	function getUserCardDOM2() {
		//regarde si l'id correspond a celui de la page
		if (id == profilid) {
			//regarde si oui il les ajoute au document
			const Div = document.createElement("Div");
			const img = document.createElement("img");
			//
			Div.setAttribute("id", "PhotoProfilPhotographer");
			Div.setAttribute("tabindex", "0");
			//
			img.setAttribute("alt", name);
			img.setAttribute("src", picture);
			//
			Div.appendChild(img);
			//
			return Div;
		} else {
			//regarde si non il ajoute un article en display none pour eviter les erreur
			const article = document.createElement("article");
			//
			article.setAttribute("style", "display:none");
			article.setAttribute("class", "supp");
			//
			return article;
		}
	}
	function getpriceCardDOM() {
		//regarde si l'id correspond a celui de la page
		if (id == profilid) {
			const span = document.createElement("span");
			const pricet = document.createElement("p");
			//
			pricet.textContent = price + "€ / jour ";
			//
			span.appendChild(pricet);
			//
			return span;
		}
	}

	return {
		name,
		id,
		portrait,
		city,
		country,
		tagline,
		price,
		getUserCardDOM,
		getUserCardDOM2,
		getpriceCardDOM,
	};
}

function mediaFactory(data, profilid, name, i, numLikes) {
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
				const div = document.createElement("div");
				const titles = document.createElement("p");
				const likeflex = document.createElement("div");
				const like = document.createElement("i");
				const likeplacement = document.createElement("span");
				const a = document.createElement("a");
				//
				vid.setAttribute("title", title);
				vid.setAttribute("src", videos);
				vid.setAttribute("type", "video/mp4");
				vid.setAttribute(
					"onclick",
					"openimgModal();showimg(" + "this.id" + ")"
				);
				vid.setAttribute("class", "mediaimg");
				vid.setAttribute("id", i);
				vid.setAttribute("aria-label", "lien vers " + title);
				//
				div.setAttribute("class", "titlepriceflex");
				//
				titles.textContent = title;
				//
				likeflex.setAttribute("class", "likeflex");
				//
				like.textContent = likes;
				like.setAttribute("aria-label", "likes");
				like.setAttribute("class", "likeadd");
				like.setAttribute("id", id);
				like.setAttribute("onclick", "addlike(" + "this.id" + ")");
				//
				likeplacement.setAttribute("class", "fas fa-heart");
				//
				a.setAttribute("href", "#");
				a.setAttribute("onClick", "return false;");
				//
				article.appendChild(a);
				article.appendChild(vid);
				article.appendChild(div);
				div.appendChild(titles);
				div.appendChild(likeflex);
				likeflex.appendChild(like);
				likeflex.appendChild(likeplacement);
				//
				return article;
			} else {
				//regarde si oui il les ajoute au document
				const article = document.createElement("article");
				const a = document.createElement("a");
				const img = document.createElement("img");
				const div = document.createElement("div");
				const titles = document.createElement("p");
				const likeflex = document.createElement("div");
				const like = document.createElement("i");
				const likeplacement = document.createElement("span");
				//
				a.setAttribute("href", "#");
				a.setAttribute("onClick", "return false;");
				//
				img.setAttribute("alt", title);
				img.setAttribute("src", picture);
				img.setAttribute(
					"onclick",
					"openimgModal();showimg(" + "this.id" + ")"
				);
				img.setAttribute("id", i);
				img.setAttribute("class", "mediaimg");
				//
				div.setAttribute("class", "titlepriceflex");
				//
				titles.textContent = title;
				//
				likeflex.setAttribute("class", "likeflex");
				//
				like.textContent = likes;
				like.setAttribute("aria-label", "likes");
				like.setAttribute("class", "likeadd");
				like.setAttribute("id", id);
				like.setAttribute("onclick", "addlike(" + "this.id" + ")");
				//
				likeplacement.setAttribute("class", "fas fa-heart");
				//
				article.appendChild(a);
				a.appendChild(img);
				article.appendChild(div);
				div.appendChild(titles);
				div.appendChild(likeflex);
				likeflex.appendChild(like);
				likeflex.appendChild(likeplacement);
				//
				return article;
			}
		} else {
			//regarde si non il ajoute un article en display none pour eviter les erreur
			const article = document.createElement("article");
			//
			article.setAttribute("style", "display:none");
			article.setAttribute("class", "supp");
			//
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
			const alt = document.createElement("p");
			//
			div.setAttribute("class", "mySlides");
			vid.setAttribute("alt", title);
			vid.setAttribute("src", videos);
			vid.setAttribute("type", "video/mp4");
			//
			alt.textContent = title;
			//
			div.appendChild(vid);
			div.appendChild(alt);
			//
			return div;
		} else {
			const div = document.createElement("div");
			const img = document.createElement("img");
			const alt = document.createElement("p");
			//
			div.setAttribute("class", "mySlides");
			//
			img.setAttribute("title", title);
			img.setAttribute("src", picture);
			//
			alt.textContent = title;
			//
			div.appendChild(img);
			div.appendChild(alt);
			//
			return div;
		}
	}

	function gettotalLikes() {
		//
		if (photographerId == profilid) {
			const div = document.createElement("div");
			const conteurflex = document.createElement("div");
			const like = document.createElement("i");
			const likeplacement = document.createElement("span");
			//
			conteurflex.setAttribute("class", "conteurflex");
			//
			like.textContent = numLikes;
			likeplacement.setAttribute("class", "fas fa-heart");
			like.setAttribute("aria-label", "likes");
			like.setAttribute("class", "totallikecounter");
			//
			div.appendChild(conteurflex);
			conteurflex.appendChild(like);
			conteurflex.appendChild(likeplacement);
			//
			return div;
		}
	}

	function addorremoveLikes() {
		ddd;
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
		gettotalLikes,
		addorremoveLikes,
	};
}
