const express = require('express')
const { route } = require('express/lib/router')
const { Server } = require('http')
const routerProducts = express.Router()
const Products = require('./Class')

const PORT = 8080

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/api/products', routerProducts)
app.use(express.static('public'))

let storeProducts = new Products()

routerProducts.get('/', (req, res) => {
    res.status(200).json(storeProducts.allProducts)
})

routerProducts.post('/', (req, res) => {
    const product = storeProducts.saveProduct(req.body)
    res.status(200).json(product)
})

routerProducts.get('/:idProduct', (req, res) => {
    const product = storeProducts.getProductById(req.params.idProduct)
    if(product){
    return res.status(200).json(product)
    }else{
         res.status(404).json({error: 'producto no encontrado'})
    }
})

routerProducts.delete('/:idProduct', (req, res) => {
    storeProducts.deleteById(req.params.idProduct)
    res.status(200).json('Producto eliminado')
})

routerProducts.put('/:idProduct' , (req, res) =>{
    const id = Number(req.params.idProduct)
    const product = storeProducts.update(id, req.body)
    res.status(200).json(product)
})

app.listen(PORT, () => {
	console.log(`Servidor corriendo en puerto ${PORT}`);
})

app.on('error', error => console.log('Error en servidor'))