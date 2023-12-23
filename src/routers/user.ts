import express from 'express'
import { checkUser, createUser, getAllUsers, login } from '../controller/user'
import { authenticateToken } from '../utils/jwt'
import { wrapAsync } from '../utils/errorMiddleware'

const userRoutes = express.Router()

userRoutes.post('/login', wrapAsync(login))

userRoutes.post('/createUser', wrapAsync(createUser))

userRoutes.get('/checkUser', wrapAsync(authenticateToken), wrapAsync(checkUser))

userRoutes.get('/getAllUsers', wrapAsync(getAllUsers))

export default userRoutes
