import express from 'express'
import { queryOsData } from '../controller/system'

const systemRoutes = express.Router()

systemRoutes.get('/queryOsData', queryOsData)

export default systemRoutes
