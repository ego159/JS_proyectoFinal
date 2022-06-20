const tablaCarrito = document.getElementById("tablaCarrito");
let carrito = JSON.parse(localStorage.getItem('carrito')) || []; // si hay carritoLocalStore lo asigno, sino asigno un arreglo vacio

const agregarCarrito = (id) => {
    
    const seleccion = productos.find(item => item.id === id);
    const busqueda = carrito.findIndex(el => el.id === id); // busco si existe en el carrito y devuelvo el index, si no existe devuelve -1
    const posItem = id - 1;
    if (busqueda === -1 && productos[posItem].stock != 0) { //Si no existe dicho item en el carrito lo agrego
        carrito.push({
            id: seleccion.id,
            descrip: seleccion.descrip,
            precio: seleccion.precio,
            cantidad: 1,
        })
        productos[posItem].stock = productos[posItem].stock -1;
        getList();
        

    } else if(productos[posItem].stock != 0){
        carrito[busqueda].cantidad = carrito[busqueda].cantidad + 1 //si ya existe en el carrito sumo 1 unidad
        productos[posItem].stock = productos[posItem].stock -1;
        getList();    
    }
    carritoLocalStorage();
    console.log(carrito);
}

const getCarrito = (item) => {
    
    let acum = "";
    item.forEach((el)=>
    acum +=
        `
        <tr>
        <th scope="row">${el.id}</th>
        <td>${el.descrip}</td>
        <td>${el.cantidad}</td>
        <td>$${el.precio}</td>
        <td>$${el.precio *el.cantidad}</td>
        </tr>
        `
    )
    console.log(acum);
    tablaCarrito.innerHTML = acum;
    carritoLocalStorage();
}   

const vaciarCarrito = () => {
    //Antes de Borrar el carrito sumo añl stock de cada productos los que fueron agregados previamente al carrito
    carrito.forEach((elemCarrito) => {
        const indexProd=productos.findIndex(el => el.id === elemCarrito.id);
        console.log(indexProd);
        productos[indexProd].stock += elemCarrito.cantidad;
        getList();
    });

    localStorage.clear();
    carrito = [];
}

let btnCarrito = document.getElementById('btnVerCarrito');
btnCarrito.addEventListener("click", () => getCarrito(carrito));

let btnVaciar = document.getElementById('btnVaciar');
btnVaciar.addEventListener("click", () => {
    
    {Swal.fire({title: "Está seguro de vaciar el Carrito?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Sí, seguro",
    cancelButtonText: "No, no quiero",
    }).then((result) => {
        if (result.isConfirmed){
            vaciarCarrito();
        }
    });
    }
    }
);


