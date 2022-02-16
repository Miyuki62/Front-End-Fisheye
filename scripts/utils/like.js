//ajoute des like
function addlike(id) {
	const Element = document.getElementById(id);
	const likecounter = document.querySelector(".totallikecounter");
	Element.textContent++;
	likecounter.textContent++;
	Element.setAttribute("onclick", "removelike(this.id)");
}
//enleve des like
function removelike(id) {
	const Element = document.getElementById(id);
	const likecounter = document.querySelector(".totallikecounter");
	Element.textContent--;
	likecounter.textContent--;
	Element.setAttribute("onclick", "addlike(this.id)");
}
