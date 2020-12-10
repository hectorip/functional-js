// Ejemplos de funciones puras

const interesCompuesto = (monto, tasa, periodos) => {
    monto * Math.pow(tasa, periodos)
}

const duplicar = (x) => x * 2

const obtenerSaludo = (nombre) => `Hola ${nombre}`


// Ejemplos de funciones impuras

persona = {
    nombre: "Héctor",
    apellido: "Patricio",
}

const nombreCompleto = (persona) => `${persona.nombre} ${persona.apellido}`