//recupere les photograph avec l'id de la personne que on veut voir
async function getPhotographers() {
	let url = "data/photographers.json";
	try {
		let res = await fetch(url);
		return await res.json();
	} catch (error) {
		console.log(error);
	}
}
//profil des photograph
async function displayData(photographers) {
	const photographersHeaderleft = document.querySelector(
		".photograph-header-flexbox-left"
	);
	const photographersHeaderright = document.querySelector(
		".photograph-header-flexbox-right"
	);
	const priceadd = document.querySelector(".price-text");

	const photographersimg = document.querySelector(".photograph-image");
	//recupere l'id de l'url
	let url_str = document.URL;
	let url = new URL(url_str);
	let search_params = url.searchParams;
	let profilid = search_params.get("id");

	photographers.forEach((photographer) => {
		// vérifie l'id du photographe avec celui de la page puis crée la partie profil du photograph qui correspond a l'id
		if (photographer.id == profilid) {
			const photographerModel = profilFactory(photographer, profilid);
			const userCardDOM = photographerModel.getUserCardDOM();
			photographersHeaderleft.appendChild(userCardDOM);

			const userCardDOM2 = photographerModel.getUserCardDOM2();
			photographersHeaderright.appendChild(userCardDOM2);

			const Encard2DOM = photographerModel.getpriceCardDOM();
			priceadd.appendChild(Encard2DOM);
		}
	});
}

//photo des photograph
async function displayPhoto(media) {
	const photographersMedia = document.querySelector(".photograph-media");
	const imgmodalcontent = document.querySelector(".imgmodal-content");
	const totalliketext = document.querySelector(".totallike-text");
	var sort = document.querySelector("select");
	// recupere l'id et le nom du photograph depuis l'url
	let url_str = document.URL;
	let url = new URL(url_str);
	let search_params = url.searchParams;
	let profilid = search_params.get("id");
	let name = search_params.get("name");
	let i = 1;
	let o = 0;
	let numLikes = new Number();
	// scrip pour trier les media par like, date et titre
	if (sort.options[0].selected === true) {
		media.sort(sortByProperty("likes"));
		function sortByProperty(property) {
			return function (a, b) {
				if (a[property] > b[property]) return -1;
				else if (a[property] < b[property]) return 1;

				return 0;
			};
		}
	} else if (sort.options[1].selected === true) {
		media.sort((a, b) => a.date.localeCompare(b.date));
	} else if (sort.options[2].selected === true) {
		media.sort((a, b) => a.title.localeCompare(b.title));
	}
	// add les like du photograph
	media.forEach((media) => {
		if (media.photographerId == profilid) {
			numLikes += media.likes;
		}
	});
	// vérifie l'id du photographe avec celui de la page puis crée la partie media du photograph qui correspond a l'id
	media.forEach((media) => {
		if (media.photographerId == profilid) {
			const photoMedia = mediaFactory(media, profilid, name, i, numLikes);
			i++;
			const PhotoCardDOM = photoMedia.getPhotoCardDOM();
			photographersMedia.appendChild(PhotoCardDOM);

			const PhotoshowDOM = photoMedia.getLighboxDOM();
			imgmodalcontent.appendChild(PhotoshowDOM);

			if (o < 1) {
				const LiketotalDOM = photoMedia.gettotalLikes();
				totalliketext.appendChild(LiketotalDOM);
				o++;
			}
		}
	});
}
//ajout du nom dans la modal
async function displayPhotoNameModal() {
	const element = document.querySelector("#modal-photo-name");
	//
	let url_str = document.URL;
	let url = new URL(url_str);
	let search_params = url.searchParams;
	let name = search_params.get("name");
	//
	element.textContent = name;
}

//gestion des supression des inutile ou de se que on demande
Element.prototype.remove = function () {
	this.parentElement.removeChild(this);
};
NodeList.prototype.remove = HTMLCollection.prototype.remove = function () {
	for (var i = this.length - 1; i >= 0; i--) {
		if (this[i] && this[i].parentElement) {
			this[i].parentElement.removeChild(this[i]);
		}
	}
};

//surprime la class demander du dom
function removeclass(classname) {
	document.getElementsByClassName(classname).remove();
}
//surprime le id demander du dom
function removeid(id) {
	document.getElementById(id).remove();
}

async function init() {
	// Récupère les datas des photographes
	const { photographers } = await getPhotographers();
	const { media } = await getPhotographers();
	displayData(photographers);
	displayPhoto(media);
	displayPhotoNameModal();
	//surprime les article en trop si il en a
	removeclass("supp");
}

init();
