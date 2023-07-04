//                GENERAL

//Subir y bajar encabezado
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

let serviciosDivs = document.querySelectorAll(".servicios-info");

serviciosDivs.forEach(function (div) {
  let titulo = div.querySelector("h2");
  let lista = div.querySelector(".lista");
  titulo.addEventListener("click", function () {
    lista.classList.toggle("inactive");
    div.classList.toggle("expandir");
  });
});
