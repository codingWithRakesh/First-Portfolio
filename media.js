let navSecAA = document.querySelector('.navSecAA');

let rightNavi = document.querySelector('.rightNavi');
let checkLogo = true;
let windowC = true;
navSecAA.addEventListener('click', () => {
	if (screen.width <= 1050) {
		navContainer.classList.toggle('height_100');

		rightNavi.classList.toggle('scale1');
		rightNavi.classList.add('transition');

		logo.classList.toggle('top0');

		if (screen.width <= 500) {
			if (checkLogo) {
				logo.innerHTML = '<i class="fa-solid fa-code"></i>';
				checkLogo = false;
			}
			else if (!checkLogo) {
				logo.innerHTML = 'CodeWithRakesh';
				checkLogo = true;
			}
		}
	}
});


navContainer.addEventListener('click', () => {
	if (screen.width <= 1050) {
		windowC = true;
	}
});

document.body.addEventListener('click', () => {
	if (screen.width <= 1050) {
		if (windowC) {
			windowC = false;
		}
		else if (!windowC) {
			navContainer.classList.remove('height_100');
			rightNavi.classList.remove('scale1');
			rightNavi.classList.remove('transition');
			logo.classList.remove('top0');

			logo.innerHTML = 'CodeWithRakesh';
			checkLogo = true;

			windowC = true;
		}
	}
})

window.addEventListener('scroll', mediaScroll);
function mediaScroll() {
	if (screen.width >= 1050) {
		if (containt[3].firstElementChild.classList.contains('scale1') == true) {
			youTubeB.classList.add('scale1');
			youTubeB.classList.add('transformXY');
			youTubeB.classList.add('transition');
			youTubeB.classList.add('transition_delay');

			instaB.classList.add('scale1');
			instaB.classList.add('transformXY');
			instaB.classList.add('transition');
			instaB.classList.add('transition_delay');
		}
		else {
			youTubeB.classList.remove('scale1');
			youTubeB.classList.remove('transformXY');
			youTubeB.classList.remove('transition');
			youTubeB.classList.remove('transition_delay');

			instaB.classList.remove('scale1');
			instaB.classList.remove('transformXY');
			instaB.classList.remove('transition');
			instaB.classList.remove('transition_delay');
		}
	}
	else if (screen.width <= 1050) {
		if (containt[1].firstElementChild.classList.contains('scale1') == true) {
			addClassMe(1);
		}
		else {
			removeClassMe(1);
		}

		if (containt[3].firstElementChild.classList.contains('scale1') == true) {
			addClassMe(3);
		}
		else {
			removeClassMe(3);
		}

		if (containt[4].firstElementChild.classList.contains('scale1') == true) {
			addClassMe(4);
		}
		else {
			removeClassMe(4);
		}
	}
}

function addClassMe(value) {
	containt[value].firstElementChild.firstElementChild.classList.add('scale1');
	containt[value].firstElementChild.firstElementChild.classList.add('transformXY');
	containt[value].firstElementChild.firstElementChild.classList.add('transition');
	containt[value].firstElementChild.firstElementChild.classList.add('transition_delay');
}

function removeClassMe(value) {
	containt[value].firstElementChild.firstElementChild.classList.remove('scale1');
	containt[value].firstElementChild.firstElementChild.classList.remove('transformXY');
	containt[value].firstElementChild.firstElementChild.classList.remove('transition');
	containt[value].firstElementChild.firstElementChild.classList.remove('transition_delay');
}