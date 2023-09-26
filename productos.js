let productos1 = [
  (elevador1 = {
    nombre: "EP-123",
    tipo: "Elevador Electrohidráulico",
    descripcion:
      "Este elevador fue creado en base a las normas internacionales, diseñado para satisfacer las demandas del taller. \n El cable y la tuberia de aceite esta totalmente ocultos, dandole una apariencia elegante y moderada...",
    imagenes: [
      "./elevauto/elevador-1.jpg",
      "./elevauto/elevador-2.jpg",
      "./elevauto/elevador-3.jpg",
    ],
    ficha: [
      (Carga = "3500KG"),
      (tiempoElevacion = "50 seg"),
      (Elevacion = "1900 mm"),
      (Potencia = "3 Hp"),
    ],
  }),
  (elevador2 = {
    nombre: "EE-123",
    tipo: "Elevador Electrohidráulico",
    descripcion:
      "Este elevador fue creado en base a las normas internacionales, diseñado para satisfacer las demandas del taller. \n El cable y la tuberia de aceite esta totalmente ocultos, dandole una apariencia elegante y moderada...",
    imagenes: [
      "./elevauto/elevador-2.jpg",
      "./elevauto/elevador-3.jpg",
      "./elevauto/elevador-4.jpg",
    ],
    ficha: [
      (Carga = "3500KG"),
      (tiempoElevacion = "50 seg"),
      (Elevacion = "1950 mm"),
      (Potencia = "3 Hp"),
    ],
  }),
  (elevador3 = {
    nombre: "EE-123",
    tipo: "Elevador Electrohidráulico",
    descripcion:
      "Este elevador fue creado en base a las normas internacionales, diseñado para satisfacer las demandas del taller. \n El cable y la tuberia de aceite esta totalmente ocultos, dandole una apariencia elegante y moderada...",
    imagenes: [
      "./elevauto/elevador-4.jpg",
      "./elevauto/elevador-1.jpg",
      "./elevauto/elevador-2.jpg",
    ],
    ficha: [
      (Carga = "3500KG"),
      (tiempoElevacion = "50 seg"),
      (Elevacion = "1950 mm"),
      (Potencia = "3 Hp"),
    ],
  }),
  (elevador4 = {
    nombre: "EE-123",
    tipo: "Elevador Electrohidráulico",
    descripcion:
      "Este elevador fue creado en base a las normas internacionales, diseñado para satisfacer las demandas del taller. \n El cable y la tuberia de aceite esta totalmente ocultos, dandole una apariencia elegante y moderada...",
    imagenes: [
      "./elevauto/elevador-3.jpg",
      "./elevauto/elevador-1.jpg",
      "./elevauto/elevador-2.jpg",
    ],
    ficha: [
      (Carga = "3500KG"),
      (tiempoElevacion = "50 seg"),
      (Elevacion = "1950 mm"),
      (Potencia = "3 Hp"),
    ],
  }),
  (elevador5 = {
    nombre: "EP-123",
    tipo: "Elevador Electrohidráulico",
    descripcion:
      "Este elevador fue creado en base a las normas internacionales, diseñado para satisfacer las demandas del taller. \n El cable y la tuberia de aceite esta totalmente ocultos, dandole una apariencia elegante y moderada...",
    imagenes: [
      "./elevauto/elevador-1.jpg",
      "./elevauto/elevador-2.jpg",
      "./elevauto/elevador-3.jpg",
    ],
    ficha: [
      (Carga = "3500KG"),
      (tiempoElevacion = "50 seg"),
      (Elevacion = "1900 mm"),
      (Potencia = "3 Hp"),
    ],
  }),
  (elevador6 = {
    nombre: "EP-123",
    tipo: "Elevador Electrohidráulico",
    descripcion:
      "Este elevador fue creado en base a las normas internacionales, diseñado para satisfacer las demandas del taller. \n El cable y la tuberia de aceite esta totalmente ocultos, dandole una apariencia elegante y moderada...",
    imagenes: [
      "./elevauto/elevador-1.jpg",
      "./elevauto/elevador-2.jpg",
      "./elevauto/elevador-3.jpg",
    ],
    ficha: [
      (Carga = "3500KG"),
      (tiempoElevacion = "50 seg"),
      (Elevacion = "1900 mm"),
      (Potencia = "3 Hp"),
    ],
  }),

];

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

function mostrarNav() {
  let navBar = document.getElementById("nav-bar");
  let header = document.getElementById("header");
  navBar.classList.toggle("mostrar");
}

//Carga de productos
let contProductos = document.getElementById("productos");
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
