import { Request, Response } from 'express'
import { Order } from '../entity/Order'
import { OrderService } from '../services/order'

export const createOrder = async (req: Request, res: Response) => {
  const orderService = new OrderService()
  await orderService.createOrder(req.body)
  res.json({ msg: '订单创建成功' })
}

export const createCustomerAddress = async (req: Request, res: Response) => {
  const orderService = new OrderService()
  await orderService.createCustomerAddress(req.body)
  res.json({ msg: '收货地址创建成功' })
}
