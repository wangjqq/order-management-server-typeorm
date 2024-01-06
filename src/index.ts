import express, { Request, Response } from 'express'
import { AppDataSource } from './data-source'
import userRoutes from './routers/user'
import cors from 'cors'
import orderRoutes from './routers/order'
import fileRoutes from './routers/file'
import productRoutes from './routers/product'
import customerRoutes from './routers/customer'

AppDataSource.initialize()
  .then(async () => {
    // 创建和设置Express应用程序
    const app = express()
    app.use(cors())
    app.use(express.json())
    app.use(express.urlencoded({ extended: true })) // 解析表单数据

    app.use('/user', userRoutes)
    app.use('/order', orderRoutes)
    app.use('/file', fileRoutes)
    app.use('/product', productRoutes)
    app.use('/customer', customerRoutes)

    // 启动Express服务器
    app.listen(3000, () => {
      console.log('Server is running on port 3000')
    })
  })
  .catch((error) => console.log(error))
