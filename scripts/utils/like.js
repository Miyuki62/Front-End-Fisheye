//ajoute des like
function addlike(id) {
	const Element = document.getElementById(id);
	const parent = Element.parentNode;
	const span = parent.children[1];
	const likecounter = document.querySelector(".totallikecounter");
	//
	Element.textContent++;
	likecounter.textContent++;

	parent.setAttribute("onclick", "removelike(" + id + ")");
	parent.setAttribute("onkeypress", "keyboardremovelike(event, " + id + ")");
	span.setAttribute("class", "fas fa-heart");
}
//enleve des like
function removelike(id) {
	const Element = document.getElementById(id);
	const parent = Element.parentNode;
	const span = parent.children[1];
	const likecounter = document.querySelector(".totallikecounter");
	//
	Element.textContent--;
	likecounter.textContent--;
	parent.setAttribute("onclick", "addlike(" + id + ")");
	parent.setAttribute("onkeypress", "keyboardaddlike(event, " + id + ")");
	span.setAttribute("class", "far fa-heart");
}

//controle au clavier
function keyboardaddlike(event, id) {
	let code = event.keyCode || event.which;
	if (code === 13) {
		//enter key
		addlike(id);
	}
}

function keyboardremovelike(event, id) {
	let code = event.keyCode || event.which;
	if (code === 13) {
		//enter key
		removelike(id);
	}
}
