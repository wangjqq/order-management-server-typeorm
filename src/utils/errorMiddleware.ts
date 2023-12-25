import { Request, Response, NextFunction } from 'express'

export const wrapAsync = (fn: Function) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      // 将同步函数转化为 Promise 对象
      await Promise.resolve(fn(req, res, next))
    } catch (err) {
      res.json({ code: 500, msg: '系统错误', err })
    }
  }
}
