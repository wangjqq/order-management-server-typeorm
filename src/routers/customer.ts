import express from 'express'
import {
  createCustomer,
  getCustomers,
  delCustomer,
  getCustomerAddresss,
  createCustomerAddress,
} from '../controller/customer'

const customerRoutes = express.Router()

customerRoutes.post('/createCustomer', createCustomer)
customerRoutes.post('/createCustomerAddress', createCustomerAddress)
customerRoutes.delete('/delCustomer', delCustomer)
customerRoutes.get('/getCustomers', getCustomers)
customerRoutes.get('/getCustomerAddresss', getCustomerAddresss)
export default customerRoutes
