class Usuario {
    
    constructor(nombre, apellido, libros = [], mascotas = []){
        this.nombre = nombre
        this.apellido = apellido
        this.libros = libros
        this.mascotas = mascotas
    }

    getFullName() {    
        return `${this.nombre} ${this.apellido}`;   // Solo debe devolver el nombre completo 
    }
    
    addMascota(nombreMascota){
        this.mascotas.push(nombreMascota);
    }
    
    countMascotas(){
        return this.mascotas.length;
    }
    
    addBook(nombre, autor){
        const libro = {nombre: nombre, autor: autor}   // Es mejor definir como tu objeto general el nombre del objeto que representa, en este caso libro, 'obj' es muy general
        this.libros.push(libro);
    }
    
    getBookNames(){
        const arrayMapeado = [];

        for (let i = 0; i < this.libros.length; i++){
            arrayMapeado.push(this.libros[i].nombre);
        }

        return arrayMapeado;
    }


    // Como lo comentaba el profesor, también es posible utilizar map para realizar el mismo procesamiento que en el método de arriba
    getBookNamesUsingMap() {
        return this.libros.map(l => l.nombre);
    }

}

const usuario = new Usuario (
    'Tomas', 
    'Lopez', 
    [
        {nombre: 'El señor de los anillos', autor: 'Tolkien'},          // Utilizar identación y una estructura mas ordenada puede hacer más legible el código
        {nombre: "El nombre del viento", autor: 'Patrick Rothfus'}
    ],
    ['Felipe', 'Sara']
    );

nombreCompleto = usuario.getFullName();
usuario.addMascota('Picky');
cantMascotas = usuario.countMascotas();
usuario.addBook("El Aleph", "Borges");
const libros = usuario.getBookNames();          // No es necesario anteponer array o string o int al nombre de una variable solo para indicar el tipo
const libros2 = usuario.getBookNamesUsingMap();

// No colocar tantos espacios entre cada console.log facilita la lectura del código
console.log(nombreCompleto);
console.log(usuario.mascotas);
console.log(cantMascotas);
console.log(usuario.libros);
console.log(libros);
console.log(libros2)