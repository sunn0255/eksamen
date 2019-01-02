window.addEventListener("load", sidenVises);

function sidenVises() {
	console.log("siden vises!");
	toggleMenu();

}

function toggleMenu() {
	console.log("toggle menu");
	document.querySelector("#menu").classList.toggle("hidden");

	let erSkjult =
		document.querySelector("#menu").classList.contains("hidden");

	if (erSkjult == true) {
		// menuen er nu skjult - ændr menuknap til lll
		document.querySelector("#menuknap").
	} else {
		//menuer er nu vist - ændr menuknap til X
		document.querySelector("#menuknap").
	}
}
