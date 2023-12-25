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
    user.lastLoginAt = new Date()
    userService.updateUser(user) // 保存到数据库
    const token = generateToken(user)
    res.json({ msg: '登陆成功', data: { user, token } })
  } else {
    res.json({ code: 400, msg: '请检查用户名或密码' })
  }
}

// 注册
export const createUser = async (req: Request, res: Response) => {
  const { username, password, email }: CreateUserDto = req.body
  const userService = new UserService()
  const hasUser = await userService.getUserByUsernameOrEmail(username, email)
  if (hasUser) {
    res.json({ code: 400, msg: '用户已存在' })
    return
  }
  const user = await userService.createUser(username, password, email)
  res.json({ code: 200, msg: '注册成功', data: { user } })
}

// 获取所有用户
export const getAllUsers = async (req: Request, res: Response) => {
  const userService = new UserService()
  const user = await userService.getAllUsers()
  res.json({ code: 200, msg: '', data: { user } })
}

// 检查用户是否登录
export const checkUser = async (req: any, res: Response) => {
  // 用户已登录，req.user 包含解码后的用户信息
  const userService = new UserService()
  const user = await userService.getUserByUsername(req.user.username)
  res.json({ code: 200, data: { user } })
}
