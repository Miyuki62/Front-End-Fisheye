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

	const photographersimg = document.querySelector(".photograph-image");
	//recupere l'id de l'url
	let url_str = document.URL;
	let url = new URL(url_str);
	let search_params = url.searchParams;
	let profilid = search_params.get("id");

	photographers.forEach((photographer) => {
		if (photographer.id == profilid) {
			const photographerModel = profilFactory(photographer, profilid);
			const userCardDOM = photographerModel.getUserCardDOM();
			photographersHeaderleft.appendChild(userCardDOM);

			const photographerModelimg = profilFactory(photographer, profilid);
			const userCardDOM2 = photographerModelimg.getUserCardDOM2();
			photographersHeaderright.appendChild(userCardDOM2);
		}
	});
}

//photo des photograph
async function displayPhoto(media) {
	const photographersMedia = document.querySelector(".photograph-media");
	const imgmodalcontent = document.querySelector(".imgmodal-content");
	var sort = document.querySelector("select");

	let url_str = document.URL;
	let url = new URL(url_str);
	let search_params = url.searchParams;
	let profilid = search_params.get("id");
	let name = search_params.get("name");
	let i = 1;

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

	media.forEach((media) => {
		if (media.photographerId == profilid) {
			const photoMedia = mediaFactory(media, profilid, name, i);
			i++;
			const PhotoCardDOM = photoMedia.getPhotoCardDOM();
			photographersMedia.appendChild(PhotoCardDOM);
			const PhotoshowDOM = photoMedia.getLighboxDOM();
			imgmodalcontent.appendChild(PhotoshowDOM);
		}
	});
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
	//surprime les article en trop
	removeclass("supp");
}

init();
