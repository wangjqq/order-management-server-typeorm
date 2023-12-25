import { Request, Response } from 'express'
import { Order } from '../entity/Order'
import { OrderService } from '../services/order'

export const createOrder = async (req: Request, res: Response) => {
  const orderService = new OrderService()
  await orderService.createOrder(req.body)
  res.json({ msg: '订单创建成功' })
}
