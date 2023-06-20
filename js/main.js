let pics = document.querySelectorAll(".polaroid");
let counter = 0;
let pre = 3;

document.querySelector("#js-icon3").addEventListener("click", () => {
	if (counter < 4) {
		pics[counter].classList.add("bigImg");
		pics[pre].classList.remove("bigImg");
		counter++;
		pre = counter - 1;
	} else {
		pics[pre].classList.remove("bigImg");
		counter = 0;
		pre = 3;
	}
});

document.querySelector("#js-icon3").addEventListener("touchstart", () => {
	if (counter < 4) {
		pics[counter].classList.add("bigImg");
		pics[pre].classList.remove("bigImg");
		counter++;
		pre = counter - 1;
	} else {
		pics[pre].classList.remove("bigImg");
		counter = 0;
		pre = 3;
	}
	console.log(counter)
	console.log(pre)
});