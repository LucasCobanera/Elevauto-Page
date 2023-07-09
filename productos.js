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

//Subir y bajar encabezado
let anchoVentana = window.innerWidth;
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
