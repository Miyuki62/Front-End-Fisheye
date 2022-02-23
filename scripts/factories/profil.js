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
				const divvid = document.createElement("div");
				const titlepriceflex = document.createElement("div");
				const titles = document.createElement("p");
				const likeflex = document.createElement("div");
				const like = document.createElement("i");
				const likeplacement = document.createElement("span");
				//
				vid.setAttribute("title", title);
				vid.setAttribute("src", videos);
				vid.setAttribute("type", "video/mp4");
				vid.setAttribute(
					"onclick",
					"openimgModal();currentSlide(" + "this.id" + ")"
				);
				vid.setAttribute("class", "mediaimg");
				vid.setAttribute("id", i);
				vid.setAttribute("aria-label", "lien vers " + title);
				//
				divvid.setAttribute(
					"onkeypress",
					"keyboardselectimg(event, " + i + ")"
				);
				divvid.setAttribute("tabindex", "0");
				//
				titlepriceflex.setAttribute("class", "titlepriceflex");
				//
				titles.textContent = title;
				//
				likeflex.setAttribute("class", "likeflex");
				likeflex.setAttribute("onclick", "addlike(" + id + ")");
				likeflex.setAttribute(
					"onkeypress",
					"keyboardaddlike(event, " + id + ")"
				);
				//
				like.textContent = likes;
				like.setAttribute("aria-label", "likes");
				like.setAttribute("class", "likeadd");
				like.setAttribute("id", id);
				like.setAttribute("tabindex", "0");
				//
				likeplacement.setAttribute("class", "far fa-heart");
				//
				article.appendChild(divvid);
				article.appendChild(titlepriceflex);
				divvid.appendChild(vid);
				titlepriceflex.appendChild(titles);
				titlepriceflex.appendChild(likeflex);
				likeflex.appendChild(like);
				likeflex.appendChild(likeplacement);
				//
				return article;
			} else {
				//regarde si oui il les ajoute au document
				const article = document.createElement("article");
				const divimg = document.createElement("div");
				const img = document.createElement("img");
				const titlepriceflex = document.createElement("div");
				const titles = document.createElement("p");
				const likeflex = document.createElement("div");
				const like = document.createElement("i");
				const likeplacement = document.createElement("span");
				//
				divimg.setAttribute(
					"onkeypress",
					"keyboardselectimg(event, " + i + ")"
				);
				divimg.setAttribute("tabindex", "0");
				//
				img.setAttribute("alt", title);
				img.setAttribute("src", picture);
				img.setAttribute(
					"onclick",
					"openimgModal();currentSlide(" + "this.id" + ")"
				);
				img.setAttribute("id", i);
				img.setAttribute("class", "mediaimg");
				//
				titlepriceflex.setAttribute("class", "titlepriceflex");
				//
				titles.textContent = title;
				//
				likeflex.setAttribute("class", "likeflex");
				likeflex.setAttribute("onclick", "addlike(" + id + ")");
				likeflex.setAttribute(
					"onkeypress",
					"keyboardaddlike(event, " + id + ")"
				);
				//
				like.textContent = likes;
				like.setAttribute("aria-label", "likes");
				like.setAttribute("class", "likeadd");
				like.setAttribute("id", id);
				like.setAttribute("tabindex", "0");
				//
				likeplacement.setAttribute("class", "far fa-heart");
				//
				article.appendChild(divimg);
				divimg.appendChild(img);
				article.appendChild(titlepriceflex);
				titlepriceflex.appendChild(titles);
				titlepriceflex.appendChild(likeflex);
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
			const sourcevideo = document.createElement("source");
			const alt = document.createElement("p");
			//
			div.setAttribute("class", "mySlides");
			vid.setAttribute("alt", title);
			vid.setAttribute("controls", "");
			//
			sourcevideo.setAttribute("src", videos);
			sourcevideo.setAttribute("type", "video/mp4");
			//
			alt.textContent = title;
			//
			div.appendChild(vid);
			vid.appendChild(sourcevideo);
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
	};
}
