//                GENERAL
let productos1 = [
  (elevador1 = {
    nombre: "EP-3500",
    tipo: "Elevador Electrohidráulico",
    descripcion:
      "Este elevador fue creado en base a las normas internacionales, diseñado para satisfacer las demandas del taller. \n El cable y la tuberia de aceite esta totalmente ocultos, dandole una apariencia elegante y moderada...",
    imagenes: [
      "./elevauto/Eco 3500.jpg",
      "./elevauto/elevador.jpeg",
      "./elevauto/elevador2.jpeg",
    ],
    ficha: [
      (Carga = "3500KG"),
      (tiempoElevacion = "50 seg"),
      (Elevacion = "1900 mm"),
      (Potencia = "3 Hp"),
    ],
  }),
  (elevador2 = {
    nombre: "EE-3500",
    tipo: "Elevador Electrohidráulico",
    descripcion:
      "Este elevador fue creado en base a las normas internacionales, diseñado para satisfacer las demandas del taller. \n El cable y la tuberia de aceite esta totalmente ocultos, dandole una apariencia elegante y moderada...",
    imagenes: [
      "./elevauto/imagen_monatana.jpeg",
      "./elevauto/WhatsApp Image 2021-11-27 at 21.18.58.jpeg",
      "./elevauto/WhatsApp Image 2023-06-09 at 15.16.04.jpeg",
    ],
    ficha: [
      (Carga = "3500KG"),
      (tiempoElevacion = "50 seg"),
      (Elevacion = "1950 mm"),
      (Potencia = "3 Hp"),
    ],
  }),
  (elevador3 = {
    nombre: "elevador 45",
    descripcion: "cccccccc",
  }),
  (elevador4 = {
    nombre: "elevador b52",
    descripcion: "dddddd",
  }),
  (elevador5 = {
    nombre: "elevador b232",
    descripcion: "eeeeeeeeee",
  }),
  (elevador6 = {
    nombre: "elevador b72",
    descripcion: "ffffffffff",
  }),
  (elevador7 = {
    nombre: "elevador b42",
    descripcion: "ggggggg",
  }),
  (elevador8 = {
    nombre: "elevador b12",
    descripcion: "hhhhh",
  }),
];

let contProductos = document.getElementById("productos");

//Carga de productos
for (item in productos1) {
  let divProducto = document.createElement("div");
  divProducto.classList.add("producto");
  divProducto.classList.add("producto" + item);

  let imgProducto = document.createElement("img");
  let nombreProducto = document.createElement("h2");
  let descProducto = document.createElement("p");

  let verProducto = document.createElement("a");
  verProducto.textContent = "Ver Producto";

  verProducto.setAttribute("href", "./producto.html?numero=" + item);

  nombreProducto.textContent = productos1[item].nombre;
  imgProducto.setAttribute("src", productos1[item].imagenes[0]);
  descProducto.textContent = productos1[item].tipo;

  divProducto.appendChild(imgProducto);
  divProducto.appendChild(nombreProducto);
  divProducto.appendChild(descProducto);
  divProducto.appendChild(verProducto);

  contProductos.appendChild(divProducto);
  console.log(item);
}

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

//PAGINA PRODUCTO INDIV
// function cargaProducto() {
//   var urlParams = new URLSearchParams(window.location.search);
//   var numero = urlParams.get("numero");
//   let indice = Number(numero);

//   console.log(indice);

//   function cargarProducto(index) {
//     let productRight = document.getElementById("product-right");
//     //Galeria
//     let currentIndex = 0;

//     function mostrarImagen(imagen) {
//       const imagenPrincipal = document.getElementById("first-img");
//       imagenPrincipal.setAttribute("src", imagen);
//     }

//     function mostrarImagenPrinc() {
//       let imagenPrincipal = document.getElementById("first-img");
//       imagenPrincipal.src = productos1[index].imagenes[currentIndex];
//     }
//     function mostrarGaleria() {
//       const galeria = document.getElementById("galeria-img");

//       productos1[index].imagenes.forEach((imagen) => {
//         let img = document.createElement("img");
//         img.classList.add("imagen");
//         img.src = imagen;

//         img.addEventListener("click", function () {
//           mostrarImagen(imagen);
//         });

//         galeria.appendChild(img);
//       });
//     }
//     mostrarImagenPrinc();
//     mostrarGaleria();

//     //Informacion del producto
//     let titulo = document.createElement("h1");
//     let descripcion = document.createElement("p");

//     titulo.textContent = productos1[index].nombre;
//     productRight.appendChild(titulo);

//     descripcion.textContent = productos1[index].descripcion;
//     productRight.appendChild(descripcion);

//     //Ficha técnica
//     let carga = document.getElementById("carga");
//     let tiempoElevacion = document.getElementById("tiempoElevacion");
//     let elevacion = document.getElementById("elevacion");
//     let potencia = document.getElementById("potencia");

//     carga.textContent = productos1[index].ficha[0];
//     tiempoElevacion.textContent = productos1[index].ficha[1];
//     elevacion.textContent = productos1[index].ficha[2];
//     potencia.textContent = productos1[index].ficha[3];
//   }
//   cargarProducto(indice);
// }
