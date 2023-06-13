let scrollPrevio = window.pageYOffset; //20y

window.onscroll = function () {
  let scrollActual = window.pageYOffset; //-50y

  if (scrollPrevio > scrollActual) {
    document.querySelector(".header").style.top = "0";
  } else {
    document.querySelector(".header").style.top = "-126px";
  }

  scrollPrevio = scrollActual;
};
