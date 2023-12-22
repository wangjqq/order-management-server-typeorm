import { Request, Response, NextFunction } from 'express'

export const wrapAsync = (fn: Function) => {
  return (req: Request, res: Response, next: NextFunction) => {
    fn(req, res, next).catch((err) => res.json({ code: 500, message: '系统错误', err }))
  }
}
