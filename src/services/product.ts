import { AppDataSource } from '../data-source'
import { Product } from '../entity/Product'

export class ProductService {
  private productRepository = AppDataSource.getRepository(Product)

  // 新增商品
  async createProduct(orderData: any): Promise<void> {
    const { ProductName, Description, UnitPrice, userId } = orderData

    const product = new Product()
    product.ProductName = ProductName
    product.Description = Description
    product.UnitPrice = UnitPrice

    product.userId = userId

    await this.productRepository.save(product)
  }

  // 查询商品
  async getProducts({ userId }: any) {
    return await this.productRepository.find({
      where: {
        userId: userId,
      },
    })
  }
}
