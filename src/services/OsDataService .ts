import si from 'systeminformation'
import { AppDataSource } from '../data-source'
import { OsData } from '../entity/OsData'

export class OsDataService {
  private osDataRepository = AppDataSource.getRepository(OsData)

  // 定义一个方法，用来获取 os 模块的数据，并创建一个 OsData 实例
  async getOsData() {
    const valueObject = {
      system: '*',
      cpu: 'manufacturer,brand,speed,speedMin,speedMax,cores,physicalCores,performanceCores,efficiencyCores,virtualization,cache',
      cpuCurrentSpeed: '*',
      cpuTemperature: '*',
      mem: '*',
      graphics: '*',
      osInfo: '*',
      versions: '*',
      users: '*',
      currentLoad: '*',
      fullLoad: '*',
      processes: 'unknown',
      fsSize: '*',
    }
    const osData = new OsData()
    osData.osData = await si.get(valueObject)
    return osData
  }

  // 定义一个方法，用来批量删除,只保留最近的4000条数据
  // getOsData() {
  //   const osData = new OsData()
  //   osData.totalMemory = os.totalmem()
  //   osData.freeMemory = os.freemem()
  //   osData.cpus = os.cpus()
  //   osData.createdAt = new Date()
  //   return osData
  // }

  // 定义一个方法，用来每隔一定时间（例如 10 秒），自动插入 os 数据到数据库
  async autoInsertOsData() {
    // 获取 os 数据
    const osData = await this.getOsData()
    // 插入到数据库
    await this.osDataRepository.save(osData)
  }

  // 定义一个方法，用来查询数据库中的 os 数据，根据 id 或者时间范围
  async queryOsData({ id, from, to, current = 1, pageSize = 10 }: any) {
    // 构建查询条件
    const where: any = {}
    if (id) {
      where.id = id
    }
    if (from) {
      where.createdAt = { $gte: from }
    }
    if (to) {
      where.createdAt = { $lte: to }
    }

    // 查询数据库
    const [infoList, total] = await this.osDataRepository
      .createQueryBuilder('osData') // 创建一个 QueryBuilder 对象
      .where(where) // 添加查询条件
      .orderBy('osData.id', 'DESC') // 添加按id倒序排序
      .skip((current - 1) * pageSize) // 跳过前面的数据
      .take(pageSize) // 取当前页的数据
      .getManyAndCount() // 获取查询结果和总条数

    return {
      infoList,
      total, // 总条数
      pageSize, // 每页条数
      current, // 当前页
      pages: Math.ceil(total / pageSize), // 总页数
    }
  }
}
