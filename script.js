function onClickChara(id){
    Fancybox.show([
  {
    src: `html/${id}.html`,
    type: "iframe",
    height:720,
  },
]);
}