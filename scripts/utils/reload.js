document.addEventListener("DOMContentLoaded", function () {
	var input = document.getElementById("sort");
	if (localStorage["sort"]) {
		// si sort et changer
		input.value = localStorage["sort"]; // met la valeur dans le localStorage
	}
	input.onchange = function () {
		localStorage["sort"] = this.value; // charge la valeur du localStorage
		location.reload();
	};
});
