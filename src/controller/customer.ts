import { Request, Response } from 'express'
import { CustomerService } from '../services/customer'

export const createCustomer = async (req: Request, res: Response) => {
  const customerService = new CustomerService()
  await customerService.createCustomer(req.body)
  res.json({ msg: '客户添加成功' })
}

export const getCustomers = async (req: Request, res: Response) => {
  const customerService = new CustomerService()
  const data = await customerService.getCustomers(req.query)
  res.json({ msg: '获取客户列表成功', data })
}

export const getCustomerAddresss = async (req: Request, res: Response) => {
  const customerService = new CustomerService()
  const data = await customerService.getCustomerAddresss(req.query)
  res.json({ msg: '获取地址列表成功', data })
}

export const createCustomerAddress = async (req: Request, res: Response) => {
  const customerService = new CustomerService()
  await customerService.createCustomerAddress(req.body)
  res.json({ msg: '地址添加成功' })
}
