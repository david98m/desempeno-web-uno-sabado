// === Fase 1: Configuración inicial ===
const nombreProducto = prompt("Ingresa el nombre de un producto:");
let stockProducto = 50;
let ventasTotales = 0;

// === Fase 2: Funciones de inventario ===
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

// === Fase 3: Simulación y diagnóstico ===
const simularDiaDeVentas = () => {
    for (let i = 0; i < 5; i++) {
        registrarVenta(8);
    }
};

function diagnosticoInventario() {
    // Diagnóstico de stock
    if (stockProducto > 30) {
        console.log("Nivel de stock óptimo");
    } else if (stockProducto > 10) {
        console.log("Stock moderado, considera reponer pronto");
    } else {
        console.log("¡Alerta! Bajo stock, reposición urgente");
    }

    // Diagnóstico de ventas
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

// === Fase Final: Menú principal ===
function iniciarGestion() {
    while (true) {
        const opcion = prompt(`Menú de Inventario:
1 - Registrar Venta
2 - Reponer Stock
3 - Simular Día de Ventas
4 - Ver Diagnóstico de Inventario
5 - Mostrar Inventario Actual
6 - Cerrar programa`);

        switch (opcion) {
            case '1':
                const cantidadVendida = Number(prompt("Ingresa la cantidad vendida:"));
                if (!isNaN(cantidadVendida) && cantidadVendida > 0) {
                    registrarVenta(cantidadVendida);
                } else {
                    alert("Por favor, ingresa una cantidad válida.");
                }
                break;

            case '2':
                const cantidadRepuesta = Number(prompt("Ingresa la cantidad a reponer:"));
                if (!isNaN(cantidadRepuesta) && cantidadRepuesta > 0) {
                    reponerStock(cantidadRepuesta);
                } else {
                    alert("Por favor, ingresa una cantidad válida.");
                }
                break;

            case '3':
                simularDiaDeVentas();
                break;

            case '4':
                diagnosticoInventario();
                break;

            case '5':
                mostrarInventario();
                break;

            case '6':
                alert("Gracias por usar el sistema de gestión de inventario. ¡Hasta pronto!");
                return;

            default:
                alert("Opción no válida. Por favor, selecciona una opción del 1 al 6.");
                break;
        }
    }
}


iniciarGestion();