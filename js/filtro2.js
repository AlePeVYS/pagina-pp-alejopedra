const productos = [
    {"id": 4,
        "imagen":"../assets/cencherle1.jfif",
      "material": "100% oveja cruza fina suave al tacto y natural",
       "peso": "Grosor Sport - 300m/100g",
       "recomendacion": "Se recomienda usar aguja de 4mm/4.5mm",
       "precio": "$17.500,00" },

    {"id": 5,
       "imagen":"../assets/cencherle2.jfif",
     "material": "Hilado Merino 18 Micras ultra sedoso",
      "peso": "Grosor Worsted - 180m/100g",
      "recomendacion": "Se recomienda usar aguja de 6mm",
      "precio": "$15.000,00" },

    {"id": 6,
       "imagen":"../assets/cencherle3.jfif",
     "material": "Hilado Mecha de 2 Cabos - 100% oveja cruza fina",
      "peso": "Grosor Sport - 300m/100g",
      "recomendacion": "Se recomienda usar aguja de 4mm/4.5mm",
      "precio": "$17.500,00" },
];


// aca muestro los productos

function mostrarProductos(productos) {
    const listaProductos = document.getElementById("productos-lista");
    listaProductos.innerHTML = ''; 

    productos.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add("lanas-contenedor");
        div.innerHTML = `
            <a href="../productos-cencherle/prod-cen${producto.id}.html?id=${producto.id}">
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