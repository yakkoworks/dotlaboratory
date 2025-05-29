function onClickChara(id){
    Fancybox.show([
  {
    src: `../html/${id}.html`,
    type: "iframe",
    width: 540,
    height: 720,
  },
]);
}