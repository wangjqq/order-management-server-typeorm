import express from 'express'
import { createOrder, getOrders, getCustomerAddress } from '../controller/order'

const orderRoutes = express.Router()

orderRoutes.post('/createOrder', createOrder)
orderRoutes.get('/getOrders', getOrders)

export default orderRoutes
