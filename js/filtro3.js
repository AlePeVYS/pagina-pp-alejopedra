const productos = [
    {"id": 7,
        "imagen":"../assets/fibras1.jfif",
      "material": "Hilado Merino Súper Wash - 100% lana merino",
       "peso": "Grosor DK - 200m/100g",
       "recomendacion": "Se recomienda usar aguja de 3.5mm/4mm",
       "precio": "$18.900,00" },
  
      {"id": 8,
       "imagen":"../assets/fibras2.jfif",
     "material": "Hilado Mezcla Merino y Seda - 80% Merino - 20% Seda",
      "peso": "Grosor Fingering - 400m/100g",
      "recomendacion": "Se recomienda usar aguja de 2.5mm/3mm",
      "precio": "$20.500,00" },
  
      {"id": 9,
         "imagen":"../assets/fibras3.jfif",
       "material": "Hilado Mohair y Seda - 70% Mohair - 30% Seda",
        "peso": "Grosor Lace - 450m/50g",
        "recomendacion": "Se recomienda usar aguja de 3mm/3.5mm",
        "precio": "$22.000,00" }
];


// aca muestro los productos

function mostrarProductos(productos) {
    const listaProductos = document.getElementById("productos-lista");
    listaProductos.innerHTML = ''; 

    productos.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add("lanas-contenedor");
        div.innerHTML = `
            <a href="../productos-fibras/prod-fibra${producto.id}.html?id=${producto.id}">
                <img src="${producto.imagen}" alt="muestra cencherle">
            </a>
            
        `;
        listaProductos.appendChild(div);
    });
}


// aca se filtran los productos por precio
function filtrarPorPrecio(orden) {
    let productosFiltrados;
    if (orden === "asc") {
        productosFiltrados = [...productos].sort((a, b) => {
            const precioA = parseFloat(a.precio.replace(/\$/g, '').replace(/,/g, ''));
            const precioB = parseFloat(b.precio.replace(/\$/g, '').replace(/,/g, ''));
            return precioA - precioB;
        });
    } else if (orden === "des") {
        productosFiltrados = [...productos].sort((a, b) => {
            const precioA = parseFloat(a.precio.replace(/\$/g, '').replace(/,/g, ''));
            const precioB = parseFloat(b.precio.replace(/\$/g, '').replace(/,/g, ''));
            return precioB - precioA;
        });
    } else {
        productosFiltrados = productos; // muestra todos los productos por default
    }
    mostrarProductos(productosFiltrados);
}

// hace que el filtro cambie
document.getElementById("filtro-precio").addEventListener("change", function () {
    filtrarPorPrecio(this.value);
});

// muestra los productos sin el filtro
mostrarProductos(productos);