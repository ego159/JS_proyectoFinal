
//VARIABLES GLOBALES
//const productos = [];
let productos = JSON.parse(localStorage.getItem('productos')) || [];


//CONSTRUCTOR PRODUCTOS
class Producto{
    constructor (id, descrip, precio, stock){
        this.id=id;
        this.descrip=descrip;
        this.precio=precio;
        this.stock=stock;
    }
}

//CREO PRODUCTOS (OBJETOS)
productos.push (new Producto(1, "Mate", 100, 10));
productos.push (new Producto(2, "Te", 20, 5, 15));
productos.push (new Producto(3, "Granola", 150, 90));
/*
fetch("./data.json")
    .then((res) => res.json())
    .then((data) => {
        data.forEach((producto) => {
        productos.push (new Producto(producto.id, producto.descrip,producto.precio,producto.stock));
    });
});*/

const carga = async () =>{
    const res = await fetch("../data.json")
    const data = await res.json();

        data.forEach((producto) => {
        productos.push (new Producto(producto.id, producto.descrip,producto.precio,producto.stock));
        });
        getList();
}

carga();

//DOM
const contenedor = document.getElementById("productosTienda");

//
const getList = () => {

    contenedor.innerHTML= ``
    
    for (const item of productos){

        let row = document.createElement("div");
        row.className = "container tabla";
        row.innerHTML =
                `
                <div class="row">
                <div class="col-2"><h3> ${item.id} </h3></div>
                <div class="col"><h3> ${item.descrip} </h3></div>
                <div class="col"><h3> $${item.precio} </h3></div>
                <div class="col"><h3> ${item.stock} </h3></div>
                <div class="col"><button id="${item.id}" class="stock${item.stock} btn btn-primary boton-tienda">Agregar al carrito</button></div>
                `
        
        contenedor.appendChild(row);
        
        let button = document.getElementById(item.id)
        button.addEventListener("click", () => agregarCarrito(item.id))

    };
}

//getList();

