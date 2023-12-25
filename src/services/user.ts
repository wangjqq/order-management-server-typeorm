import { comparePasswords, hashPassword } from '../utils/hash'
import { User } from '../entity/User'
import { AppDataSource } from '../data-source'
import { FileDir } from '../entity/FileDir'
import { UUID } from 'typeorm/driver/mongodb/bson.typings'
import { randomUUID } from 'crypto'

export class UserService {
  // 获取用户仓库
  private userRepository = AppDataSource.getRepository(User)
  private fileDirRepository = AppDataSource.getRepository(FileDir)

  // 创建用户
  async createUser(username: string, password: string, email: string): Promise<User> {
    const user = new User()
    user.username = username
    user.password_hash = await hashPassword(password)
    user.email = email

    const fileDir = new FileDir()
    fileDir.id = randomUUID()
    fileDir.name = '根目录'
    const newUser = await this.userRepository.save(user)
    fileDir.userId = newUser.user_id
    await this.fileDirRepository.save(fileDir)
    return newUser
  }

  // 根据用户ID获取用户
  async getUserById(userId: number): Promise<User | null> {
    return await this.userRepository.findOne({ where: { user_id: userId } })
  }

  // 获取所有用户
  async getAllUsers(): Promise<User[]> {
    return await this.userRepository.find()
  }

  // 根据用户名获取用户
  async getUserByUsername(username: string): Promise<User | null> {
    return await this.userRepository.findOne({ where: { username } })
  }

  // 根据用户名或邮箱查找用户
  async getUserByUsernameOrEmail(username: string, email: string): Promise<User | null> {
    return await this.userRepository.findOne({
      where: [{ username }, { email }],
    })
  }

  // 验证用户
  async validateUser(username: string, password: string): Promise<User | null> {
    const user = await this.getUserByUsername(username)
    if (user && (await comparePasswords(password, user.password_hash))) {
      return user
    }

    return null
  }

  // 更新用户
  async updateUser(newUser: User): Promise<User> {
    const user = await this.getUserById(newUser.user_id)
    await this.userRepository.save({ ...user, ...newUser })
    return user
  }
}
