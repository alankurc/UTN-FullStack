var productos = [
    {nombre: "harina", precio: 35},
    {nombre: "pan", precio: 25},
    {nombre: "papa", precio: 52},
    {nombre: "palta", precio: 55},
    {nombre: "fideos", precio: 85},
    {nombre: "aceite", precio: 350},
    {nombre: "sopa", precio: 86},
    {nombre: "mermelada", precio: 108},
    {nombre: "porotos", precio: 69},
    {nombre: "lentejas", precio: 85},
    {nombre: "mandarina", precio: 43},
    {nombre: "banana", precio: 79},
    {nombre: "leche de almendras", precio: 145},
    {nombre: "papel higiénico", precio: 147},
    {nombre: "lavandina", precio: 55},
    {nombre: "alcohol en gel", precio: 123},
    {nombre: "shampoo", precio: 400},
    {nombre: "arroz", precio: 66},
    {nombre: "harina", precio: 35},
    {nombre: "salsa de tomate", precio: 35},
];

var total = 0

var control = [0]
for (let i = 0; i <20 ; i++) {
    control [i] = true
}

for(let i = 0; i <20 ; i++) {
    let tabla = document.getElementById("Listado");
    let renglonNuevo = document.createElement("tr");
    let itemNuevo = document.createElement("td");
    let precioNuevo = document.createElement("td");
    let celdaBoton = document.createElement("td");
    let botonNuevo = document.createElement("button");
    let leyendaBoton = document.createTextNode("Agregar");
    let nombreItem = document.createTextNode(productos[i].nombre);
    let precioItem = document.createTextNode("$" + productos[i].precio)
    itemNuevo.appendChild(nombreItem);
    precioNuevo.appendChild(precioItem);
    renglonNuevo.appendChild(itemNuevo);
    renglonNuevo.appendChild(precioNuevo);
    botonNuevo.appendChild(leyendaBoton);
    botonNuevo.setAttribute("id", i);
    botonNuevo.setAttribute("onclick", "agregarProducto(event)");
    celdaBoton.appendChild(botonNuevo);
    renglonNuevo.appendChild(celdaBoton);
    tabla.appendChild(renglonNuevo);
}

function agregarProducto(e) {
    let productoAgregado = e.target.id;
    if (control[productoAgregado] == true) {
        let tablaCarrito = document.getElementById("Carrito");
        let renglonCarrito = document.createElement("tr");
        let celdaPrecio=  document.createElement("td");
        let celdaNombre=  document.createElement("td");
        let nombreItem = document.createTextNode(productos[productoAgregado].nombre);
        let precioItem = document.createTextNode("$" + productos[productoAgregado].precio);
        renglonCarrito.appendChild(celdaNombre);
        celdaNombre.appendChild(nombreItem);
        renglonCarrito.appendChild(celdaPrecio);
        celdaPrecio.appendChild(precioItem);
        tablaCarrito.appendChild(renglonCarrito);
        total = total + productos[productoAgregado].precio
        let mostrarPrecioTotal = document.getElementById("Total");
        mostrarPrecioTotal.innerHTML = total
        control[productoAgregado] = false;
    } else {
        alert("Solo se puede seleccionar una unidad por producto")
    }
}