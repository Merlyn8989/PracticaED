
class Transporte {
    constructor(boleto, precio, estado) {
        this.boleto = boleto;
        this.precio = precio;
        this.estado = estado;
    }

    get obtenerBoleto() {
        return this.boleto;
    }

    get obtenerPrecio() {
        return this.precio;
    }

    get obtenerEstado() {
        return this.estado;
    }
}


class Cliente extends Transporte {
    constructor(nombre, dui, telefono, edad, boleto, precio, estado) {
        super(boleto, precio, estado)
        this.nombre = nombre;
        this.dui = dui;
        this.telefono = telefono;
        this.edad = edad;
    }
    get obtenerNombre() {
        return this.nombre;
    }
    get obtenerEdad() {
        return this.edad;
    }
    set Estado(estadoA) {
        this.estado = estadoA;

    }
    cambiarEstadoInterfaz() {
        let numBoleto = this.identificarCajaEstado();

        if (this.estado == "Ocupado") {
            document.getElementById(`estado${numBoleto}`).innerText = "Ocupado";
        } else if (this.estado == "Disponible") {
            document.getElementById(`estado${numBoleto}`).innerText = "Disponible";
        }
    }


    identificarCajaEstado() {
        switch (this.boleto) {
            case "A1":
                return 1;
            case "A2":
                return 2;
            case "A3":
                return 3;
            default:
                break;
        }
    }

    venderBoleto() {
        return `El cliente ${this.nombre} compro el boleto ${this.boleto} por un precio de ${this.precio} su espacio está reservado`
    }

    anularBoleto(){
        return `El cliente ${this.nombre} compro el boleto ${this.boleto} por un precio de ${this.precio} su compra se anula y su espacio pasa a ${this.estado}`
    }
}

const boleto1 = new Transporte("A1", "60.45", "Disponible");

const boleto2 = new Transporte("A2", "50.88", "Disponible");

const boleto3 = new Transporte("A3", "44.84", "Disponible");

//nombre del boleto
document.getElementById("boleto1").innerText = boleto1.obtenerBoleto;
document.getElementById("boleto2").innerText = boleto2.obtenerBoleto;
document.getElementById("boleto3").innerText = boleto3.obtenerBoleto;

//precio del boleto
document.getElementById("precio1").innerText = boleto1.obtenerPrecio;
document.getElementById("precio2").innerText = boleto2.obtenerPrecio;
document.getElementById("precio3").innerText = boleto3.obtenerPrecio;

//Estado del boleto
document.getElementById("estado1").innerText = boleto1.obtenerEstado;
document.getElementById("estado2").innerText = boleto2.obtenerEstado;
document.getElementById("estado3").innerText = boleto3.obtenerEstado;


function comprarBoleto() {
    const nombre = document.getElementById("nombre").value;
    const dui = document.getElementById("dui").value;
    const telefono = document.getElementById("telefono").value;
    const edad = document.getElementById("edad").value;
    const boleto = document.getElementById("bol").value;


    let objetoSeleccionar;

    switch (boleto) {
        case "A1":
            objetoSeleccionar = boleto1;
            break;
        case "A2":
            objetoSeleccionar = boleto2;
            break;
        case "A3":
            objetoSeleccionar = boleto3;
            break;
        default:
            break;
    }
    let precio = objetoSeleccionar.obtenerPrecio;
    let estado = objetoSeleccionar.obtenerEstado;

    let venta = new Cliente(nombre, dui, telefono, edad, boleto, precio, estado);
    venta.Estado = "Ocupado";
    let mostrar = venta.venderBoleto();
    venta.cambiarEstadoInterfaz();
    document.getElementById("mostrarVenta").innerText = mostrar;
}

function anularCompra(){
    const nombre = document.getElementById("nombre").value;
    const dui = document.getElementById("dui").value;
    const telefono = document.getElementById("telefono").value;
    const edad = document.getElementById("edad").value;
    const boleto = document.getElementById("bol").value;


    let objetoSeleccionar;

    switch (boleto) {
        case "A1":
            objetoSeleccionar = boleto1;
            break;
        case "A2":
            objetoSeleccionar = boleto2;
            break;
        case "A3":
            objetoSeleccionar = boleto3;
            break;
        default:
            break;
    }
    let precio = objetoSeleccionar.obtenerPrecio;
    let estado = objetoSeleccionar.obtenerEstado;

    let venta = new Cliente(nombre, dui, telefono, edad, boleto, precio, estado);
    venta.Estado = "Disponible";
    let mostrar = venta.anularBoleto();
    venta.cambiarEstadoInterfaz();
    document.getElementById("mostrarVenta").innerText = mostrar;
}
