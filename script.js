window.onload = () => {
  console.dir(document.getElementById("animation-select"));
  document.getElementById("animation-select").addEventListener("change",
    (event) => {
      switch (event.target.value){
        case "Carousel":
          initAnimCarousel();
          break;
        case "Bouncing ball":
          initAnimBouncingBall();
          break;
        case "Hypno Frog":
          initAnimHypnoFrog();
          break;
        default:
          initAnimSpinner();
      }
    });
}

const initAnimSpinner = () => {

}

const initAnimCarousel = () => {

}

const initAnimBouncingBall = () => {

}

const initAnimHypnoFrog = () => {

}

