import bcrypt from 'bcryptjs'

const saltRounds = 10 // 定义哈希强度，可以根据需求调整

export async function hashPassword(password: string): Promise<string> {
  const hashedPassword = bcrypt.hashSync(password, saltRounds)
  return hashedPassword
}

export async function comparePasswords(inputPassword: string, hashedPassword: string): Promise<boolean> {
  const isMatch = await bcrypt.compare(inputPassword, hashedPassword)
  return isMatch
}
