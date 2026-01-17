async function init(){
  // document.querySelector("#loading").showModal();
  document.oncontextmenu = function () {return false;}
  setTimeout(() => {
    document.querySelector("#loading").classList.add("fadeout");
    document.querySelector("#loading").close();
  }, 2000);
  const maincontainer = document.getElementById("main");
  const mainoptions = {
    Thumbs: {
      type: "classic",
      Carousel:{
        style:{
          "--f-thumb-width":"40px",
          "--f-thumb-height":"40px",
          "--f-thumbs-padding-x": "10px",
          "--f-thumbs-padding-y": "10px",
        },
      }
    },
  };
  Carousel(maincontainer, mainoptions,{ Thumbs }).init();
  
  var zoom = document.body.clientWidth / 1080;
  document.body.style.setProperty('--zoomScale',zoom);


}

function showProfile(team,index){
  const option = {
    // Your custom options
    startIndex:--index,
    Carousel:{
      style:{
        "--f-html-padding":"0",
      },
      infinite: false,
      Thumbs:{
        type: "classic",
        Carousel:{
          style:{
            "--f-thumb-height":"120px",
            "--f-thumb-width":"50px",
          }
        }
      },
      Arrows:false,
      Toolbar: {
        absolute: true,
        enabled: true,
        display: {
          right: ["close"],
          left:[],
          
        },
      },
      
    }
  }
  switch(team){
    case "1":
    Fancybox.show(
      [
        // Array of gallery items
        {
          src:"assets/slides/1-1.html",
          thumbSrc: "assets/images/thumbnail_1-1.png",
        },
        {
          src:"assets/slides/1-2.html",
          thumbSrc: "assets/images/thumbnail_1-2.png",
        },
        {
          src:"assets/slides/1-3.html",
          thumbSrc: "assets/images/thumbnail_1-3.png",
        },
        {
          src:"assets/slides/1-4k.html",
          thumbSrc: "assets/images/thumbnail_1-4k.png",
        },
        {
          src:"assets/slides/1-5.html",
          thumbSrc: "assets/images/thumbnail_1-5.png",
        },
        {
          src:"assets/slides/1-6.html",
          thumbSrc: "assets/images/thumbnail_1-6.png",
        },
        {
          src:"assets/slides/1-7.html",
          thumbSrc: "assets/images/thumbnail_1-7.png",
        },
        {
          src:"assets/slides/1-8y.html",
          thumbSrc: "assets/images/thumbnail_1-8y.png",
        },
        {
          src:"assets/slides/1-9.html",
          thumbSrc: "assets/images/thumbnail_1-9.png",
        },
      ],
      option
    );
    break;
    case "2":
    Fancybox.show(
      [
        // Array of gallery items
        {
          src:"assets/slides/2-1.html",
          thumbSrc: "assets/images/thumbnail_2-1.png",
        },
        {
          src:"assets/slides/2-2.html",
          thumbSrc: "assets/images/thumbnail_2-2.png",
        },
        {
          src:"assets/slides/2-3.html",
          thumbSrc: "assets/images/thumbnail_2-3.png",
        },
        {
          src:"assets/slides/2-4.html",
          thumbSrc: "assets/images/thumbnail_2-4.png",
        },
        {
          src:"assets/slides/2-5.html",
          thumbSrc: "assets/images/thumbnail_2-5.png",
        },
        {
          src:"assets/slides/2-6.html",
          thumbSrc: "assets/images/thumbnail_2-6.png",
        },
      ],option
    );
    break;
    case "3":
    Fancybox.show(
      [
        // Array of gallery items
        {
          src:"assets/slides/3-1.html",
          thumbSrc: "assets/images/thumbnail_3-1.png",
        },
        {
          src:"assets/slides/3-2.html",
          thumbSrc: "assets/images/thumbnail_3-2.png",
        },
      ],option
    );
    break;
    
    case "4":
    Fancybox.show(
      [
        // Array of gallery items
        {
          src:"assets/slides/4-1.html",
          thumbSrc: "assets/images/thumbnail_4-1.png",
        },
        {
        },
      ],option
    );
    break;
    
  }
  
}