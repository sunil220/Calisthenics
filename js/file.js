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

	const burgerIcon = document.querySelector(".burger");

	burger.addEventListener("click", () => {
		nav.classList.toggle("nav-active");
		burgerIcon.children[0].classList.toggle("line1");
		burgerIcon.children[1].classList.toggle("line2");
		burgerIcon.children[2].classList.toggle("line3");

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

// scroll active navlink logic
function onScroll(event) {
	var sections = document.querySelectorAll("#navbar ul li a");
	var scrollPos =
		window.pageYOffset ||
		document.documentElement.scrollTop ||
		document.body.scrollTop;

	for (var i = 0; i < sections.length; i++) {
		var currLink = sections[i];
		var val = currLink.getAttribute("href");
		var refElement = document.querySelector(val);
		if (
			refElement.offsetTop <= scrollPos &&
			refElement.offsetTop + refElement.offsetHeight > scrollPos
		) {
			document
				.querySelector("#navbar ul li a")
				.classList.remove("active");
			currLink.classList.add("active");
		} else {
			currLink.classList.remove("active");
		}
	}
}

window.document.addEventListener("scroll", onScroll);

navSlide();
