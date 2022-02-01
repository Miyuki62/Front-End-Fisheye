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

async function displayData(photographers) {
	const photographersHeader = document.querySelector(".photograph-header");
	let url_str = document.URL;

	let url = new URL(url_str);
	let search_params = url.searchParams;
	let profilid = search_params.get("id");

	photographers.forEach((photographer) => {
		const photographerModel = profilFactory(photographer, profilid);
		const userCardDOM = photographerModel.getUserCardDOM();
		photographersHeader.appendChild(userCardDOM);
	});
}

async function init() {
	// Récupère les datas des photographes
	const { photographers } = await getPhotographers();
	console.log(photographers);
	displayData(photographers);
}

init();
