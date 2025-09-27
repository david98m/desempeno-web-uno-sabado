const nombreProducto = prompt("Ingresa el nombre de un producto:");

let stockProducto = 50;
let ventasTotales = 0;

function mostrarInventario() {
    console.log(`Producto: ${nombreProducto}, Stock: ${stockProducto} unidades, Ventas: ${ventasTotales} unidades.`);
}


const registrarVenta = function(cantidadVendida) {
    if (cantidadVendida <= stockProducto) {
        stockProducto -= cantidadVendida;
        ventasTotales += cantidadVendida;
        console.log("Venta registrada con éxito.");
    } else {
        console.log("Stock insuficiente para esta venta.");
    }
};

const reponerStock = (cantidadRepuesta) => {
    stockProducto += cantidadRepuesta;
    console.log(`Se añadieron ${cantidadRepuesta} unidades. Nuevo stock: ${stockProducto}.`);
};


registrarVenta(10);   // Venta válida
registrarVenta(50);   // Venta que excede el stock
reponerStock(20);     // Reposición
mostrarInventario();  // Estado final