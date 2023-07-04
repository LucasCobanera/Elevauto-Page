var urlParams = new URLSearchParams(window.location.search);
var numero = urlParams.get("numero");
let indice = Number(numero);

console.log(indice);
function cargarProducto(index) {
  document.title = productos1[index].nombre;
  let productRight = document.getElementById("product-right");
  //Galeria
  let currentIndex = 0;

  function mostrarImagen(imagen) {
    const imagenPrincipal = document.getElementById("first-img");
    imagenPrincipal.setAttribute("src", imagen);
  }

  function mostrarImagenPrinc() {
    let imagenPrincipal = document.getElementById("first-img");
    imagenPrincipal.src = productos1[index].imagenes[currentIndex];
  }
  function mostrarGaleria() {
    const galeria = document.getElementById("galeria-img");

    productos1[index].imagenes.forEach((imagen) => {
      let img = document.createElement("img");
      img.classList.add("imagen");
      img.src = imagen;

      img.addEventListener("click", function () {
        mostrarImagen(imagen);
      });

      galeria.appendChild(img);
    });
  }
  mostrarImagenPrinc();
  mostrarGaleria();

  //Informacion del producto
  let titulo = document.createElement("h1");
  let descripcion = document.createElement("p");

  titulo.textContent = productos1[index].nombre;
  productRight.appendChild(titulo);

  descripcion.textContent = productos1[index].descripcion;
  productRight.appendChild(descripcion);

  //Ficha técnica
  let carga = document.getElementById("carga");
  let tiempoElevacion = document.getElementById("tiempoElevacion");
  let elevacion = document.getElementById("elevacion");
  let potencia = document.getElementById("potencia");

  carga.textContent = productos1[index].ficha[0];
  tiempoElevacion.textContent = productos1[index].ficha[1];
  elevacion.textContent = productos1[index].ficha[2];
  potencia.textContent = productos1[index].ficha[3];
}
cargarProducto(indice);
