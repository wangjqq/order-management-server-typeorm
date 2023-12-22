import express from 'express'
import { checkUser, createUser, login } from '../controller/user'
import { authenticateToken } from '../utils/jwt'
import { wrapAsync } from '../utils/errorMiddleware'

const userRoutes = express.Router()

userRoutes.post('/login', wrapAsync(login))

userRoutes.post('/createUser', wrapAsync(createUser))

userRoutes.get('/checkUser', wrapAsync(authenticateToken), wrapAsync(checkUser))

export default userRoutes
