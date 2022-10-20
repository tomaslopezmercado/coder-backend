class Products {

    constructor(){
        this.products = []
        this.id = 0
    }

    get allProducts(){
        return this.products
    }

    saveProduct(product){
        this.id++
        const newProduct = {
            title : product.title,
            price : product.price,
            thumbnail : '(URL al logo o foto del producto)',
            id : this.id
        }
        this.products.push(newProduct)
        return newProduct
    }

    getProductById(idProduct){
        return this.products.find(product => product.id == idProduct)
    }

    deleteById(idProduct){
        const deleteIndex = this.products.findIndex((product) => product.id == idProduct)
        if(deleteIndex == -1){
            console.log('ID no encontrado')
        }else{
            const deleteData = this.products.splice(deleteIndex,1)
            console.log('ID eliminado')
            console.log(deleteData)
        }
    }

    update(id, body){
        const product = {
            title: body.title,
            price: body.price,
            thumbnail:'(URL al logo o foto del producto)',
            id: id
        }
        const updateIndex = this.products.findIndex((product) => product.id ==id)
        this.products[updateIndex] = product
        return product
    }
    
}

module.exports = Products