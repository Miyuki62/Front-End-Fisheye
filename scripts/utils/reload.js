document.addEventListener("DOMContentLoaded", function () {
	var input = document.getElementById("sort");
	if (localStorage["sort"]) {
		// if job is set
		input.value = localStorage["sort"]; // set the value
	}
	input.onchange = function () {
		localStorage["sort"] = this.value; // change localStorage on change
		location.reload();
	};
});
