const contenedorproductos = document.querySelector(".contenedor-productos");

// aca separo los productos con id

function obtenerIdProducto() {
    const params = new URLSearchParams(window.location.search);
    return params.get("id");
}

const idProducto = obtenerIdProducto();

// aca llamo a los productos por su id

fetch("../js/productos.json")
    .then(respuesta => respuesta.json())
    .then(data => {
        
        const producto = data.find(p => p.id === parseInt(idProducto));

        if (producto) {
           
            const lanacontenedor = document.createElement("div");
            lanacontenedor.className = "productoind";
            lanacontenedor.innerHTML = `
                <div class="prod-individual-contenedor">
                    <div class="lana">
                        <img src="${producto.imagen}" alt="Imagen del producto">
                    </div>
                    <div class="lana-descripcion"> 
                        <h1>${producto.material}</h1>
                        <h1>${producto.peso}</h1>
                        <h4>${producto.recomendacion}</h4>
                        <h2>${producto.precio}</h2>
                        <button class="boton">COMPRAR</button>
                    </div> 
                </div>
            `;
            contenedorproductos.append(lanacontenedor);
        } else {
            contenedorproductos.innerHTML = "<p>No encontramos el producto :( sigue buscando que hay otros más geniales!</p>";
        }
    })





