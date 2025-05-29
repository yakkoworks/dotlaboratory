function onClickChara(id){
  	fetch(`assets/${id}.html`) //ロード元URL
	.then(data => data.text())
	.then(html => document.getElementById("content").innerHTML = html);
    Fancybox.show([
  {
    src: `#content`,
    type: "inline",
  },
]);
//     Fancybox.show([
//   {
//     src: `assets/${id}.html`,
//     type: "iframe",
//   },
// ]);
}