let pics = document.querySelectorAll(".polaroid");
let counter = 0;
document.querySelector("#js-icon3").addEventListener("click", () => {
	pics[counter].classList.toggle("bigImg");
	counter = counter < 3 ? counter++ : 0;
});