// Sticky menu background
window.addEventListener("scroll", function () {
	if (window.scrollY > 50) {
		this.document.querySelector("nav").style.opacity = 0.9;
	} else {
		this.document.querySelector("nav").style.opacity = 1;
	}
});

//Responsive Nav
const navSlide = () => {
	const burger = document.querySelector(".burger");
	const nav = document.querySelector(".items");
	const navLinks = document.querySelectorAll(".items li");

	burger.addEventListener("click", () => {
		nav.classList.toggle("nav-active");

		navLinks.forEach((link, index, event) => {
			if (link.style.animation) {
				link.style.animation = "";
			} else {
				link.style.animation = `navLinkFade 0.5s ease forwards ${
					index / 7 + 0.5
				}s`;
			}
		});
	});
};

navSlide();
