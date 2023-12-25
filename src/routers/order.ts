import express from 'express'
import { createOrder } from '../controller/order'

const orderRoutes = express.Router()

orderRoutes.post('/createOrder', createOrder)

export default orderRoutes
