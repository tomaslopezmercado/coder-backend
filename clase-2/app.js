class Usuario {
    constructor(nombre, apellido, libros = [], mascotas = []){
        this.nombre = nombre
        this.apellido = apellido
        this.libros = libros
        this.mascotas = mascotas
    }

    getFullName(){    
        return `Nombre completo : ${this.nombre} ${this.apellido}`;
    }
    addMascota(nombreMascota){
        this.mascotas.push(nombreMascota);
    }
    countMascotas(){
        return this.mascotas.length;
    }
    addBook(nombre, autor){
        const obj = {Libro : nombre, Autor : autor}
        this.libros.push(obj);
    }
    getBookNames(){
        const arrayMapeado = [];

        for (let i = 0; i < this.libros.length; i++){
            arrayMapeado.push(this.libros[i].Libro);
        }

        return arrayMapeado;
    }

}

const usuario = new Usuario (
    'Tomas', 
    'Lopez', 
    [{Libro : 'El señor de los anillos',Autor : 'Tolkien'},{Libro : "El nombre del viento",Autor : 'Patrick Rothfus'}], 
    ['Felipe', 'Sara']
    );



nombreCompleto = usuario.getFullName();
usuario.addMascota('Picky');
cantMascotas = usuario.countMascotas();
usuario.addBook("El Aleph", "Borges");
const arrayLibros = usuario.getBookNames();


console.log(nombreCompleto);

console.log(usuario.mascotas);

console.log(cantMascotas);

console.log(usuario.libros);

console.log(arrayLibros);