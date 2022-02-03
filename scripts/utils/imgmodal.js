function changeIt(img) {
	var img = img;
	console.log(modalImg);

	// Get the image and insert it inside the modal - use its "alt" text as a caption
}

function openimgModal() {
	document.getElementById("imgModal").style.display = "block";
}

function closeimgModal() {
	document.getElementById("imgModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
	showSlides((slideIndex += n));
}

function currentSlide(n) {
	showSlides((slideIndex = n));
}

function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName("mySlides");
	var captionText = document.getElementById("caption");
	if (n > slides.length) {
		slideIndex = 1;
	}
	if (n < 1) {
		slideIndex = slides.length;
	}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	slides[slideIndex - 1].style.display = "block";
}
