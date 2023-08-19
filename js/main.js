
const tarifaDiaria = 10000;
const temporadaAlta = 15000;

let mesAlquiler = prompt(
    "Ingrese mes de hospedaje del 1 al 12, siendo por ejemplo: 8 para AGOSTO, 3 para MARZO)"
);
console.log(mesAlquiler);


if (mesAlquiler != "" && (mesAlquiler < 3 || mesAlquiler == 12)) {
    alert("La tarifa es:" + temporadaAlta);
} else if (mesAlquiler > 12) {
    alert("Ingrese un mes del 1 al 12");
} else if (mesAlquiler >= 3 || mesAlquiler <= 11) {
    alert("La tarifa es:" + tarifaDiaria);
} else {
    alert("Ingrese el valor nuevamente.");
}


let medioDePago = prompt("Ingrese: debito, credito, efectivo o deje el formulario en blanco.");

while (medioDePago != "") {
    switch (medioDePago) {
        case "credito":
            alert("La tarifa no posee descuento.");
            break;
        case "debito":
            alert("La tarifa no posee descuento.");
            break;
        case "efectivo":
            alert("Tiene un 10% de descuento");
            break;
    }
    medioDePago = prompt("Ingresar: debito, credito o efectivo.");
}

function diasDeAlquiler(number, tarifaDiaria, temporadaAlta, esTemporada) {
    switch (esTemporada) {
        case "Si":
            return temporadaAlta * number;
            break;
        case "No":
            return tarifaDiaria * number;
            break;
    }
}
let number = parseInt(prompt("Ingrese cantidad de dias de estadia (maximo = 14)"));

if (number > 1 && number <= 14) {
    alert("Dias de estadia seleccionados: " + number);
} else {
    alert("Ingrese valor nuevamente.");
}


let esTemporada = prompt("Es temporada alta?: Ingrese Si o No");

let resultado = diasDeAlquiler(
    number,
    tarifaDiaria,
    temporadaAlta,
    esTemporada
);
alert("El resultado es: " + resultado);
console.log(resultado);

//Preentrega 2//
class Habitaciones {
    constructor(nombre, comodidades, hidromasaje) {
        this.nombre = nombre;
        this.comodidades = comodidades;
        this.hidromasaje = hidromasaje;
        this.disponible = true;
    }
    ocupada() {
        this.disponible = false;
        console.log("La habitacion no esta disponible.")
    }
}

const habitacion1 = new Habitaciones(
    "fiona",
    "basica",
    false,
);

const habitacion2 = new Habitaciones(
    "summer",
    "deluxe",
    false,
);

const habitacion3 = new Habitaciones(
    "winter",
    "suite",
    true,
);

const habitacion4 = new Habitaciones(
    "mantis",
    "presidencial",
    true,
);

habitacion1.ocupada();
console.log(habitacion1);
habitacion2.ocupada();
console.log(habitacion2);
console.log(habitacion3);

const habitaciones = [habitacion1, habitacion2, habitacion3, habitacion4];

let eleccion = prompt("Escriba el nombre de la habitacion a consultar: fiona, summer, winter o mantis");

while (eleccion != "") {
    let habitacion;

    for (const item of habitaciones) {
        if (item.nombre === eleccion) {
            habitacion = item;
        }
    }
    if (habitacion) {
        let mensaje = `La habitacion: ${habitacion.nombre} es tipo ${habitacion.comodidades}`;
        alert(mensaje);
    } else {
        alert("Ingrese otro nombre");
    }
    eleccion = prompt("Escriba el nombre de la habitacion a consultar: fiona, summer, winter o mantis (o presione enter para continuar");
}

const comida = [
    { nombre: "Pizza Muzzarela", aptoCeliaco: false },
    { nombre: "Pizza Napolitana", aptoCeliaco: false },
    { nombre: "Pollo con verduras", aptoCeliaco: true },
    { nombre: "Spaghetti a la bolognesa", aptoCeliaco: false },
    { nombre: "Hamburguesas de arvejas con queso en pan sin tacc", aptoCeliaco: true },
];


const filtrados = comida.filter((item) => item.aptoCeliaco === true);

let consulta = prompt("Quiere conocer el menu para celiacos? si o no");

if (consulta == "si") {
    filtrados.forEach((item) => {
        let mensaje = "nombre: " + item.nombre;
        alert(mensaje);
    });
} else if (consulta == "no" || consulta !="") {
    alert("Contamos con un menu variado de opciones.");
}


