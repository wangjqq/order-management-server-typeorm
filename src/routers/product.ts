import express from 'express'
import { createProduct, getProducts, delProduct } from '../controller/product'

const productRoutes = express.Router()

productRoutes.post('/createProduct', createProduct)
productRoutes.get('/getProducts', getProducts)
productRoutes.post('/delProduct', delProduct)

export default productRoutes
