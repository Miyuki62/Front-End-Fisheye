function openimgModal() {
	const close = document.getElementById("closecursorimg");
	document.getElementById("imgModal").style.display = "block";
	close.focus();
	main.setAttribute("class", "disabled");
	main.setAttribute("tabindex", "-1");
	main.setAttribute("aria-hidden", "true");
}
function closeimgModal() {
	document.getElementById("imgModal").style.display = "none";
}
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
	showSlides(slideIndex++);
	console.log(slideIndex);
}
function minusSlides(n) {
	showSlides(slideIndex--);
	console.log(slideIndex);
}
function currentSlide(n) {
	showSlides((slideIndex = n));
}

//control au clavier
document.addEventListener("keydown", function (ev) {
	if (ev.keyCode === 37) {
		//Left arrow
		minusSlides(1);
	} else if (ev.keyCode === 39) {
		//Right arrow
		plusSlides(1);
	} else if (ev.keyCode === 27) {
		//esc key
		closeimgModal();
	}
});

function keyboardselectimg(event, id) {
	let code = event.keyCode || event.which;
	if (code === 13) {
		//enter key
		openimgModal();
		currentSlide(id);
	}
}

function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName("mySlides");
	if (n > slides.length) {
		slideIndex = 1;
	}
	if (n < 1) {
		slideIndex = slides.length;
	}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	try {
		slides[slideIndex - 1].style.display = "block";
	} catch (error) {
		//console.log(error);
	}
}
