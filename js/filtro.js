const productos = [
    {
        "id": 1,
        "imagen": "../assets/yarnart1.jfif",
        "material": "Hilado 53% Algodón - 43% PAC - 4% Metallic Polyester",
        "peso": "1000m/260g",
        "recomendacion": "Se recomienda usar aguja de 3mm/4mm",
        "precio": "$15.500,00"
    },
    {
        "id": 2,
        "imagen": "../assets/yarnart2.jfif",
        "material": "Hilado 55% Algodón - 45% PAC súper suave al tacto",
        "peso": "100m/250g",
        "recomendacion": "Se recomienda usar aguja de 2,5mm/3.5mm",
        "precio": "$14.500,00"
    },
    {
        "id": 3,
        "imagen": "../assets/yarnart3.jfif",
        "material": "Hilado 53% Algodón - 43% PAC - 4% Metallic Polyester",
        "peso": "1000m/260g",
        "recomendacion": "Se recomienda usar aguja de 3mm/4mm",
        "precio": "$15.500,00"
    }
];


// aca muestro los productos

function mostrarProductos(productos) {
    const listaProductos = document.getElementById("productos-lista");
    listaProductos.innerHTML = ''; 

    productos.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add("lanas-contenedor");
        div.innerHTML = `
            <a href="../productos-yarnart/prod-yarn${producto.id}.html?id=${producto.id}">
                <img src="${producto.imagen}" alt="muestra yarn art">
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