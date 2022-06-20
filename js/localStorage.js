
function carritoLocalStorage(){
 
    //CARGO TODO EL ARREGLO
    localStorage.setItem("carrito", JSON.stringify(carrito));

    //CARGO CADA OBJETO POR SEPARADO
    /* const jsonCarrito = (clave, valor) =>{localStorage.setItem(clave,valor)};
    for (const producto of carrito){
        jsonCarrito (producto.id, JSON.stringify(producto));
    } */
} 
