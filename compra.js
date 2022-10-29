// Variables 

const carrito = document.querySelector("#carrito");
const contenedorCarrito = document.querySelector("#lista-carrito tbody");
const vaciarCarritoBtn = document.querySelector("#vaciar-carrito");
const listaRopas = document.querySelector("#lista-ropas");
let articulosCarrito = [];

cargarEventListeners();

function cargarEventListeners() {
    //Agregar al carrito
    listaRopas.addEventListener("click", agregarRopa);

    // Eliminar ropas del carrito
    carrito.addEventListener("click", eliminarRopa);

    // Vaciar el carrito
    vaciarCarritoBtn.addEventListener("click", () => {
        articulosCarrito = []; 

        carritoHTML();  
    })

    //Muestra productos, local storage

    document.addEventListener("DOMContentLoaded", () => {
        articulosCarrito = JSON.parse(localStorage.getItem("carrito")) || [];
        carritoHTML();
    });
}

//Funciones

function agregarRopa(e) {
    e.preventDefault();

    if (e.target.classList.contains("agregar-carrito")) {
        const ropaSeleccionado = e.target.parentElement.parentElement;
        leerDatosRopa(ropaSeleccionado);  
    }
}

//Elimina producto del carrito

function eliminarRopa(e) {
    if (e.target.classList.contains("borrar-ropa")) {
      const ropaId = e.target.getAttribute("data-id");  

       // Elimina del arreglo de articulosCarrito por el data-id
        articulosCarrito = articulosCarrito.filter( ropa => ropa.id !== ropaId)

        carritoHTML(); 
    }
}


function leerDatosRopa(ropa) {
    // console.log(ropa);

    const infoRopa = {
        imagen: ropa.querySelector("img").src,
        titulo: ropa.querySelector("h4").textContent,
        precio: ropa.querySelector(".precio span").textContent,
        id: ropa.querySelector("a").getAttribute("data-id"),
        cantidad: 1,
    }
    
    const existe = articulosCarrito.some( ropa => ropa.id === infoRopa.id);
    if (existe) {
       
        const ropa = articulosCarrito.map ( ropa => {
            if (ropa.id === infoRopa.id) {
                ropa.cantidad++;
                return ropa;    
            } else {
                return ropa;    
            }
        } );
        articulosCarrito = [...ropas];
    } else {
        articulosCarrito = [...articulosCarrito, infoRopa];
    }


    console.log(articulosCarrito);

    carritoHTML();
}

//Muestra el carrito de compras en el HTML

function carritoHTML() {

    limpiarHTML();

      articulosCarrito.forEach( (ropa) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>
                 <img src="${ropa.imagen}" width="100" >
            </td>
            <td>
                ${ropa.titulo}
            </td>
            <td>
                ${ropa.precio}
            </td>
            <td>
                ${ropa.cantidad}
            </td>
            <td>
               <a href="#" class="borrar-ropa" data-id="${ropa.id}" > X </a>
             </td>
        `;

        contenedorCarrito.appendChild(row)
    });

    sincronizarStorage();

}

function limpiarHTML() {
    contenedorCarrito.innerHTML = "";
}

function sincronizarStorage() {
    localStorage.setItem("carrito", JSON.stringify(articulosCarrito))
}