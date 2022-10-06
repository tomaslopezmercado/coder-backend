
const fs = require("fs");

class Contenedor {
  constructor(archivo) {
    this.archivo = archivo;
    this.productos = [];
  }

  async save(prod) {
    try {
      let idNuevo = 1;

      try {
        const data = await fs.promises.readFile(this.archivo);

        if (data.toString()) {
          this.productos = JSON.parse(data);
        }
      } catch (e) {
        await fs.promises.writeFile(this.archivo, "");
        this.productos = [];
      }

      if (this.productos.length > 0) {
        idNuevo = this.productos[this.productos.length - 1].id + 1;
      }

      prod.id = idNuevo;
      this.productos.push(prod);
      const prodGuardar = JSON.stringify(this.productos, null, 2);
      await fs.promises.writeFile(this.archivo, prodGuardar);

      return prod.id;
    } catch (e) {
      console.log("se produjo un error");
    }
  }

  async getById(id) {
    try {
      try {
        const data = await fs.promises.readFile(this.archivo);

        if (data.toString()) {
          this.productos = JSON.parse(data);
        }
      } catch (e) {
        await fs.promises.writeFile(this.archivo, "");
        this.productos = [];
      }

      const prod = this.productos.find((p) => p.id == id);

      return prod;
    } catch (e) {
      console.log("se produjo un error");
    }
  }

  async getAll() {
    try {
      try {
        const data = await fs.promises.readFile(this.archivo);

        if (data.toString()) {
          this.productos = JSON.parse(data);
        }
      } catch (e) {
        await fs.promises.writeFile(this.archivo, "");
        this.productos = [];
      }
      return this.productos;
    } catch (e) {
      console.log("se produjo un error");
    }
  }

  async deleteById(id) {
    try {
      try {
        const data = await fs.promises.readFile(this.archivo);

        if (data.toString()) {
          this.productos = JSON.parse(data);
        }
      } catch (e) {
        await fs.promises.writeFile(this.archivo, "");
        this.productos = [];
      }

      const products = this.productos.filter((producto) => producto.id != id);
      const productos = JSON.stringify(products, null, 2);
      await fs.promises.writeFile(this.archivo, productos);
    } catch (e) {
      console.log("se produjo un error");
    }
  }

  async deleteAll() {
    try {
      await fs.promises.writeFile(this.archivo, "");
    } catch (e) {
      console.log("se produjo un error");
    }
  }
}

async function inicio() {
  const contenedor1 = new Contenedor("./productos.txt");

  const id = await contenedor1.save({
    title: "primerProducto",
    price: 50,
  });
  console.log(`Nuevo id: ${id}`);

// busca por id

//   const prod = await contenedor1.getById(4); 
//   console.log(prod);

// devuelve todo

//   const lista = await contenedor1.getAll();
//   console.log(lista);

// borra el id "3"

//   await contenedor1.deleteById(3);

// borra todo

//   await contenedor1.deleteAll();
}

inicio();