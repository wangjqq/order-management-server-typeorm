import { Request, Response } from 'express'
import { Order } from '../entity/Order'
import { OrderService } from '../services/order'

export const createOrder = async (req: Request, res: Response) => {
  const orderService = new OrderService()
  await orderService.createOrder(req.body)
  res.json({ msg: '订单创建成功' })
}

export const getOrders = async (req: Request, res: Response) => {
  const orderService = new OrderService()
  const data = await orderService.getOrders(req.query)
  res.json({ msg: '获取订单列表成功', data })
}

export const getCustomerAddress = async (req: Request, res: Response) => {
  const orderService = new OrderService()
  const data = await orderService.getCustomerAddress(req.query)
  res.json({ msg: '获取顾客列表成功', data })
}

export const delOrder = async (req: Request, res: Response) => {
  const orderService = new OrderService()
  const data = await orderService.delOrder(req.body)
  res.json({ msg: '删除订单成功', data })
}
