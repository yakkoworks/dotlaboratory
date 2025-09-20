async function init(){
	// showLoading();
	await loadProfile("1","1-1");
	await loadProfile("1","1-2");
	await loadProfile("1","1-3");
	await loadProfile("1","1-4k");
	await loadProfile("1","1-5");
	await loadProfile("1","1-6");
	await loadProfile("1","1-7");
	await loadProfile("1","1-8y");
	await loadProfile("1","1-9");
	await loadProfile("1","1-4y");
	await loadProfile("1","1-8k");
	await loadProfile("2","2-1");
	await loadProfile("2","2-2");
	await loadProfile("2","2-3");
	await loadProfile("2","2-4");
	await loadProfile("2","2-5");
	await loadProfile("2","2-6");
	await loadProfile("3","3-1");
	await loadProfile("3","3-2");
	carousel_team1 = new Carousel(document.getElementById("carousel-team1"), {infinite: false,fill:false,Dots:false,Navigation: false,center: true,});
	nav_team1 = new Carousel(document.querySelector("#nav-team1"),{infinite: false,center: true,fill: true,slidesPerPage: 1,dragFree: true,Dots: false,Sync: {target: carousel_team1}});
	carousel_team2 = new Carousel(document.getElementById("carousel-team2"), {infinite: false,fill:false,Dots:false,Navigation: false,center: true,});
	nav_team2 = new Carousel(document.querySelector("#nav-team2"),{infinite: false,center: true,fill: true,slidesPerPage: 1,dragFree: true,Dots: false,Sync: {target: carousel_team2}});
	carousel_team3 = new Carousel(document.getElementById("carousel-team3"), {infinite: false,fill:false,Dots:false,Navigation: false,center: true,});
	nav_team3 = new Carousel(document.querySelector("#nav-team3"),{infinite: false,center: true,fill: true,slidesPerPage: 1,dragFree: true,Dots: false,Sync: {target: carousel_team3}});
	hideLoading();
}

async function loadProfile(team,chara){
	return new Promise((resolve) => {
		fetch(`assets/slides/${chara}.html`)
		.then(data => data.text())
		.then(html => {
			const parser = new DOMParser();
			var dom = parser.parseFromString(html, "text/html");
			document.querySelector(`#carousel-team${team}`).appendChild(dom.documentElement.querySelector("body>div"));
			resolve('OK');
		})
	});
}

function changeActiveSection(team){
	document.querySelectorAll(".section").forEach(element => {
		element.classList.remove("active");
		carousel_team1.slideTo("#1-1");
		carousel_team2.slideTo("#2-1");
		carousel_team3.slideTo("#3-1");
	});
	document.querySelector(`#section${team}`).classList.add("active");
}

function hideLoading(){
	setTimeout(() => {		
		document.getElementById("loading").style.visibility = "hidden";
		document.getElementById("container").style.visibility = "visible";
		document.getElementById("container").classList.add("fadeIn")
	}, 1000);
}