const nombreProducto = prompt("Ingresa el nombre de un producto:");

let stockProducto = 50;
let ventasTotales = 0;

function mostrarInventario() {
    console.log(`Producto: ${nombreProducto}, Stock: ${stockProducto} unidades, Ventas: ${ventasTotales} unidades.`);
}

mostrarInventario();