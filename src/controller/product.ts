import { Request, Response } from 'express'
import { ProductService } from '../services/product'

export const createProduct = async (req: Request, res: Response) => {
  const productService = new ProductService()
  await productService.createProduct(req.body)
  res.json({ msg: '商品创建成功' })
}

export const getProducts = async (req: Request, res: Response) => {
  const productService = new ProductService()
  const data = await productService.getProducts(req.query)
  res.json({ msg: '获取商品列表成功', data })
}

export const delProduct = async (req: Request, res: Response) => {
  const productService = new ProductService()
  const data = await productService.delProduct(req.body)
  res.json({ msg: '删除商品成功', data })
}
