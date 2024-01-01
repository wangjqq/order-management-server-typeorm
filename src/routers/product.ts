import express from 'express'
import { createProduct, getProducts } from '../controller/product'

const productRoutes = express.Router()

productRoutes.post('/createProduct', createProduct)
productRoutes.get('/getProducts', getProducts)

export default productRoutes
