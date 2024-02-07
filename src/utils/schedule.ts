import cron from 'node-cron'
import { startAutoInsertOsData } from '../controller/system'

// 定义一个定时任务方法，接受一个时间间隔和一个回调函数作为参数
export function scheduleTask(interval, callback) {
  // 调用 node-cron 的 schedule 方法，传入时间间隔和回调函数
  cron.schedule(interval, callback)
}

// 一小时执行一次
scheduleTask('0 * * * *', () => {})

// 十分钟执行一次
scheduleTask('*/10 * * * *', () => {
  startAutoInsertOsData()
})
