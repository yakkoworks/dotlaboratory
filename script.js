async function init(){
	await loadProfile("1","1-1");
	await loadProfile("1","1-4k");
	carousel_team1 = new Carousel(document.getElementById("carousel-team1"), {
		infinite: false,
		fill:false,
		Dots:false,
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
	document.querySelector("#loading").style.display  = "none";
	document.querySelector("#container").style.display  = "block";
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

// function toggleProfile(chara){
// 	Fancybox.show([{
// 		src: `assets/images/main_${chara}.png`
// 	}],{
// 		closeButton:true,
// 	})
// }