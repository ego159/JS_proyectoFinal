
console.table(productos);

function bajoStock(){
    const bajoStock = productos.filter (productos => productos.stock<5);
    console.log(bajoStock);
}

//bajoStock();

function precioMenorMayor(){
    const menorMayor = productos.sort((a,b) => a.precio - b.precio);
    console.log(menorMayor);
}

//precioMenorMayor();

function precioMayorMenos(){
    console.table(productos.sort((a,b) => b.precio - a.precio));
}

//precioMayorMenos();