function displayModal() {
	const modal = document.getElementById("contact_modal");
	const main = document.getElementById("main");
	const first = document.getElementById("first");
	modal.style.display = "block";
	first.focus();
	main.setAttribute("class", "disabled");
	main.setAttribute("tabindex", "-1");
	main.setAttribute("aria-hidden", "true");
}

function closeModal() {
	const modal = document.getElementById("contact_modal");
	const main = document.getElementById("main");
	modal.style.display = "none";
	main.removeAttribute("class");
	main.removeAttribute("tabindex");
	main.setAttribute("aria-hidden", "false");
}

document.addEventListener("keydown", function (ev) {
	if (ev.keyCode === 27) {
		//esc key
		closeModal();
	}
});

//form const verification
const form = document.getElementById("form");
const header = document.getElementById("ModalHeaderText");
const first = document.getElementById("first");
const last = document.getElementById("last");
const mail = document.getElementById("email");
const message = document.getElementById("message");

//const affichage erreur
const firstErrorMsg = document.getElementById("first-error-msg");
const lastErrorMsg = document.getElementById("last-error-msg");
const mailErrorMsg = document.getElementById("email-error-msg");
const messageErrorMsg = document.getElementById("message-error-msg");

//empeche l'action par defaut du bouton submit
form.addEventListener("submit", (e) => {
	e.preventDefault();
});
//form etape verification
function validate() {
	let firstChecked;
	let lastChecked;
	let emailChecked;
	let messageChecked;

	//form verifie que le prénom possède bien 2 caractères et que se soit bien des lettre
	if (
		!first.value.match(/(.*[a-z]){2}/i) ||
		first.value == " " ||
		first.value.length < 2
	) {
		//si non affiche les erreur
		firstErrorMsg.innerText =
			"Veuillez entrer 2 caractères ou plus pour le champ du Prénom.";
		firstErrorMsg.style.color = "#691616";
		firstErrorMsg.style.fontSize = "2rem";
		firstErrorMsg.style.marginTop = "10px";
		first.style.border = "solid #691616 2px";
		firstErrorMsg.style.display = "block";
		firstChecked = false;
	} else {
		//si oui enlève les erreur
		firstErrorMsg.style.display = "none";
		first.style.border = "none";
		firstChecked = true;
	}
	//form verifie que le nom possède bien 2 caractères et que se soit bien des lettre
	if (
		!last.value.match(/(.*[a-z]){2}/i) ||
		last.value == " " ||
		last.value.length < 2
	) {
		//si non affiche les erreur
		lastErrorMsg.innerText =
			"Veuillez entrer 2 caractères ou plus pour le champ du Nom.";
		lastErrorMsg.style.color = "#691616";
		lastErrorMsg.style.fontSize = "2rem";
		lastErrorMsg.style.marginTop = "10px";
		last.style.border = "solid #691616 2px";
		lastErrorMsg.style.display = "block";
		lastChecked = false;
	} else {
		//si oui enlève les erreur
		lastErrorMsg.style.display = "none";
		last.style.border = "none";
		lastChecked = true;
	}
	//form verifie que le l'email soit bien un format email
	if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail.value)) {
		//si non affiche les erreur
		mailErrorMsg.innerText = "Veuillez entrer une email valide";
		mailErrorMsg.style.color = "#691616";
		mailErrorMsg.style.fontSize = "2rem";
		mailErrorMsg.style.marginTop = "10px";
		mailErrorMsg.style.display = "block";
		mail.style.border = "solid #691616 2px";
		emailChecked = false;
	} else {
		//si oui enlève les erreur
		mailErrorMsg.style.display = "none";
		mail.style.border = "none";
		emailChecked = true;
	}
	//form verifie que le message ne soit pas vide
	if (
		!message.value.match(/(.*[a-z]){2}/i) ||
		message.value == " " ||
		message.value.length < 1
	) {
		//si non affiche les erreur
		messageErrorMsg.innerText = "Veuillez entrer un message";
		messageErrorMsg.style.color = "#691616";
		messageErrorMsg.style.fontSize = "2rem";
		messageErrorMsg.style.marginTop = "10px";
		message.style.border = "solid #691616 2px";
		messageErrorMsg.style.display = "block";
		messageChecked = false;
	} else {
		//si oui enlève les erreur
		messageErrorMsg.style.display = "none";
		message.style.border = "none";
		messageChecked = true;
	}
	//verifie que chaque champ du formulaire est valide
	if (
		firstChecked == true &&
		lastChecked == true &&
		emailChecked == true &&
		messageChecked == true
	) {
		form.style.display = "none";
		header.style.display = "none";
		valid.style.display = "flex";
		//affiche les champ dans la console
		console.log(
			"Prénom : " +
				first.value +
				"\nNom : " +
				last.value +
				"\nEmail : " +
				email.value +
				"\nMessage : " +
				message.value
		);
	}
}
