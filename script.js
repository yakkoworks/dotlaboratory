function onClickChara(id){
    Fancybox.show([
  {
    src: `assets/${id}.html`,
    type: "iframe",
  },
]);
}