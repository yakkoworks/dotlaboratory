async function init(){
	setZoomScale();
	await loadProfile("1","1-1");
	await loadProfile("1","1-4k");
	carousel_team1 = new Carousel(document.getElementById("carousel-team1"), {
		infinite: false,
		fill:false,
		Dots:false,
		Navigation: false,
		center: true,
	});
	nav_team1 = new Carousel(document.querySelector("#nav-team1"),{
		infinite: false,
		// transition: false,
		center: true,
		fill: true,
		slidesPerPage: 1,
		dragFree: true,
		Dots: false,
		Sync: {target: carousel_team1}
	});
	document.querySelector("#container").style.display = "block";
}

async function loadProfile(team,chara){
	return new Promise((resolve) => {
		fetch(`assets/slides/${chara}.html`)
		.then(data => data.text())
		.then(html => {
			const parser = new DOMParser();
			var dom = parser.parseFromString(html, "text/html");
			document.querySelector(`#carousel-team${team}`).appendChild(dom.documentElement.querySelector("body>div"));
			console.log("loadProfile");
			resolve('OK');
		})
	});
}

function setZoomScale(){
	var dummy = document.createElement("div");
	dummy.innerText = "テスト";
	dummy.id = "sizing";
	dummy.style.fontSize = "16px";
	dummy.style.width = "1px"
	dummy.style.height = "1px"
	dummy.style.visibility = "hidden";
	document.body.append(dummy);
	var fontSize = $("#sizing").css("font-size");
	var diameter = $("#sizing").css("width");
	dummy.remove();
	var reg = /(.+)px/;
	fontSize = 16 * 16 / reg.exec(fontSize)[1];
	diameter =  reg.exec(diameter)[1];
	document.body.style.setProperty('--diameter', `${diameter}`);
	document.body.style.setProperty('--rootFontSize', `${fontSize}`);
	document.querySelector("html").style.fontSize = `${fontSize}px`;
}