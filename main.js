// Simulador de presupuesto para desarrollo de software

let continuar;

do {
    let cantidadHoras = Number(
        prompt("Ingrese la cantidad de horas estimadas para el proyecto:")
    );

    let tipoLenguaje = prompt(
        "Ingrese el lenguaje utilizado:\n" +
        "C = C/C++\n" +
        "# = C#\n" +
        "P = Python\n" +
        "G = Go"
    ).toUpperCase();

    let urgente = prompt(
        "¿El proyecto es urgente? Responda SI o NO"
    ).toUpperCase();

    let precioHora;

    if (tipoLenguaje === "C") {
        precioHora = 8000;
    } else if (tipoLenguaje === "#") {
        precioHora = 10000;
    } else if (tipoLenguaje === "P") {
        precioHora = 9000;
    } else if (tipoLenguaje === "G") {
        precioHora = 12000;
    } else {
        precioHora = 0;
    }


    if (precioHora === 0) {
        console.log("El lenguaje ingresado no es válido.");
    } else if (cantidadHoras <= 0) {
        console.log("La cantidad de horas debe ser mayor a 0.");
    } else {

        let subtotal = cantidadHoras * precioHora;
        let recargo = 0;

        if (urgente === "SI") {
            recargo = subtotal * 0.20;
        } else if (urgente === "NO") {
            recargo = 0;
        } else {
            console.log("La opción de urgencia no es válida.");
        }

        let total = subtotal + recargo;

    alert(
    "----- PRESUPUESTO -----\n" +
    "Horas estimadas: " + cantidadHoras + "\n" +
    "Lenguaje: " + tipoLenguaje + "\n" +
    "Precio por hora: $" + precioHora + "\n" +
    "Subtotal: $" + subtotal + "\n" +
    "Recargo por urgencia: $" + recargo + "\n" +
    "TOTAL: $" + total
);
    }

    continuar = prompt(
        "¿Desea calcular otro presupuesto? SI / NO"
    ).toUpperCase();

} while (continuar === "SI");

console.log("Gracias por utilizar el simulador de presupuestos.");