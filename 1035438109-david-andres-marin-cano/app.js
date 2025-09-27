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


const simularDiaDeVentas = () => {
    for (let i = 0; i < 5; i++) {
        registrarVenta(8);
    }
};

function diagnosticoInventario() {
    
    if (stockProducto > 30) {
        console.log("Nivel de stock óptimo");
    } else if (stockProducto > 10) {
        console.log("Stock moderado, considera reponer pronto");
    } else {
        console.log("¡Alerta! Bajo stock, reposición urgente");
    }


    let rangoVentas;
    if (ventasTotales >= 50) {
        rangoVentas = "alta";
    } else if (ventasTotales >= 20) {
        rangoVentas = "moderada";
    } else {
        rangoVentas = "baja";
    }

    switch (rangoVentas) {
        case "alta":
            console.log("Producto estrella, alta demanda");
            break;
        case "moderada":
            console.log("Ventas moderadas");
            break;
        case "baja":
            console.log("Baja rotación del producto");
            break;
    }
}

simularDiaDeVentas();
diagnosticoInventario();
mostrarInventario();