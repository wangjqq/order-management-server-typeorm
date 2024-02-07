import { Request, Response } from 'express'
import { OsDataService } from '../services/OsDataService '

export const getTest = async (req: Request, res: Response) => {
  // res.set('Content-Type', await register.contentType)
  // res.json({ msg: '成功', data: await register.getMetricsAsJSON() })
}

export const startAutoInsertOsData = () => {
  const osDataService = new OsDataService()
  // 十分钟保存一次系统信息
  osDataService.autoInsertOsData()
}

export const queryOsData = async (req: Request, res: Response) => {
  const osDataService = new OsDataService()
  const data = await osDataService.queryOsData(req.query)
  res.json({ msg: '获取成功', data })
}
