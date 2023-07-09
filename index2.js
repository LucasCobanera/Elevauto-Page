//                GENERAL
function cargaProductosDestacados() {
  let homeProducts = document.getElementById("home-products");
  for (let i = 0; i <= 2; i++) {
    let picture = document.createElement("picture");
    let img = document.createElement("img");

    let div = document.createElement("div");
    div.classList.add("boton-etiqueta");
    let button = document.createElement("a");
    button.textContent = productos1[i].nombre;
    button.setAttribute("href", "./producto.html?numero=" + i);
    div.appendChild(button);

    img.setAttribute("src", productos1[i].imagenes[0]);

    picture.appendChild(img);
    picture.appendChild(div);

    homeProducts.appendChild(picture);
  }
}
function mostrarNav() {
  let navBar = document.getElementById("nav-bar");
  if (navBar.style.display == "none") {
    navBar.style.display = "grid";
  } else {
    navBar.style.display = "none";
  }
}
let serviciosDivs = document.querySelectorAll(".servicios-info");
serviciosDivs.forEach(function (div) {
  let titulo = div.querySelector("h2");
  let lista = div.querySelector(".lista");
  titulo.addEventListener("click", function () {
    lista.classList.toggle("inactive");
    div.classList.toggle("expandir");
  });
});

cargaProductosDestacados();
