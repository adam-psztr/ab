let pics = document.querySelectorAll(".polaroid");

let counter = 3;
let pre = 0;

document.querySelector("#js-icon3").addEventListener("click", () => {
	if (counter >= 0) {
		pics[counter].classList.add("bigImg");
		pics[pre].classList.remove("bigImg");
		counter--;
		pre = counter + 1;
	} else {
		pics[pre].classList.remove("bigImg");
		counter = 3;
		pre = 0;
	}
});

document.querySelector("#js-icon3").addEventListener("touchstart", () => {
	if (counter >= 0) {
		pics[counter].classList.add("bigImg");
		pics[pre].classList.remove("bigImg");
		counter--;
		pre = counter + 1;
	} else {
		pics[pre].classList.remove("bigImg");
		counter = 3;
		pre = 0;
	}
	console.log(counter)
	console.log(pre)
});