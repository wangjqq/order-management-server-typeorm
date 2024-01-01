const jwt = require('jsonwebtoken')

const secretKey = 'wangjingqi' // 用于签名和验证 JWT 的密钥

// 用户登录成功后生成 JWT
export function generateToken(user) {
  const payload = {
    userId: user.id,
    username: user.username,
    // 其他你想要存储在令牌中的信息
  }

  const options = {
    expiresIn: '24h', // 令牌的有效期
  }

  return jwt.sign(payload, secretKey, options)
}

// 中间件用于验证 JWT
export function authenticateToken(req, res, next) {
  const token = req.headers.authorization && req.headers.authorization.split(' ')[1]

  if (token) {
    jwt.verify(token, secretKey, (err, decoded) => {
      if (err) {
        return res.json({ code: 401, msg: '登录过期,请先登录再进行操作' })
      } else {
        req.user = decoded // 将解码后的用户信息保存在请求对象中
        next()
      }
    })
  } else {
    res.json({ code: 401, msg: '请先登录再进行操作' })
  }
}
