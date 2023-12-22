import { Request, Response } from 'express'
import { UserService } from '../services/user'
import { CreateUserDto } from '../dto/createUserDto'
import { generateToken } from '../utils/jwt'

// 登录
export const login = async (req: Request, res: Response) => {
  const { username, password } = req.body

  const userService = new UserService()
  const user = await userService.validateUser(username, password)

  if (user) {
    const token = generateToken(user)
    res.json({ message: '登陆成功', user, token })
  } else {
    res.json({ code: 401, message: '请检查用户名或密码' })
  }
}

// 注册
export const createUser = async (req: Request, res: Response) => {
  const { username, password, email }: CreateUserDto = req.body

  try {
    const userService = new UserService()
    const hasUser = await userService.getUserByUsernameOrEmail(username, email)
    if (hasUser) {
      res.json({ code: 400, message: '用户已存在' })
      return
    }
    const user = await userService.createUser(username, password, email)
    res.json({ code: 200, message: '注册成功', user })
  } catch (error) {
    res.json({ code: 500, message: '系统错误', error })
  }
}

// 获取所有用户
export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const userService = new UserService()
    const user = await userService.getAllUsers()
    res.json({ code: 200, message: 'User found', user })
  } catch (error) {
    res.json({ code: 500, message: '系统错误' })
  }
}

// 检查用户是否登录
export const checkUser = (req: Request, res: Response) => {
  // 用户已登录，req.user 包含解码后的用户信息
  res.json({ code: 200, message: '登陆成功' })
}
