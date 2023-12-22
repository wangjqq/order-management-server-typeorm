import express, { Request, Response } from 'express'
import { AppDataSource } from './data-source'
import { User } from './entity/User'
import userRoutes from './routers/user'

AppDataSource.initialize()
  .then(async () => {
    // 创建和设置Express应用程序
    const app = express()
    app.use(express.json())
    app.use(express.urlencoded({ extended: true })) // 解析表单数据

    app.use('/users', userRoutes)

    // 启动Express服务器
    app.listen(3000, () => {
      console.log('Server is running on port 3000')
    })
  })
  .catch((error) => console.log(error))
