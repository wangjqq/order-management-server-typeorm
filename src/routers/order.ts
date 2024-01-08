import express from 'express'
import { createOrder, getOrders, delOrder } from '../controller/order'

const orderRoutes = express.Router()

orderRoutes.post('/createOrder', createOrder)
orderRoutes.post('/delOrder', delOrder)
orderRoutes.get('/getOrders', getOrders)

export default orderRoutes
