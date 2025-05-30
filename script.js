async function init(){
	await loadProfile("1","1-1");
	await loadProfile("1","1-4k")
}

async function loadProfile(team,chara){
	return new Promise((resolve) => {
		fetch(`assets/${chara}.html`)
		.then(data => data.text())
		.then(html => {
			const parser = new DOMParser();
			var dom = parser.parseFromString(html, "text/html");
			document.querySelector(`#profiles #team${team}`).appendChild(dom.documentElement.querySelector("body>div"));
			resolve('OK');
		})
	});
}