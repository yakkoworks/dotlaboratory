function onClickChara(id){
	fetch(`html/${id}.html`) // ロード元
	.then(data => data.text())
	.then(html => document.getElementById("content").innerHTML = html);
    Fancybox.show([
  {
    src: `#content`,
    type: "inline",
  },
]);
}