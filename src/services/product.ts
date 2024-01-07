import { SelectQueryBuilder } from 'typeorm'
import { AppDataSource } from '../data-source'
import { Product } from '../entity/Product'

export class ProductService {
  private productRepository = AppDataSource.getRepository(Product)

  // 新增商品
  async createProduct(orderData: any): Promise<void> {
    const { ProductName, Description, UnitPrice, userId, ProductID } = orderData

    const product = new Product()
    product.ProductID = ProductID
    product.ProductName = ProductName
    product.Description = Description
    product.UnitPrice = UnitPrice

    product.userId = userId

    await this.productRepository.save(product)
  }

  // 查询商品
  async getProducts({ userId, current, pageSize }: any) {
    const queryBuilder: SelectQueryBuilder<Product> = this.productRepository
      .createQueryBuilder('product')
      .where('product.userId = :userId', { userId })

    const [data, total] = await Promise.all([
      queryBuilder
        .orderBy('product.ProductID', 'ASC')
        .skip((current - 1) * pageSize)
        .take(pageSize)
        .getMany(),
      queryBuilder.getCount(),
    ])

    return { data, total }
  }

  // 删除商品
  async delProduct({ userId, ProductID }: any) {
    const product = await this.productRepository.findOne({
      where: {
        userId: userId,
        ProductID: ProductID,
      },
    })
    return await this.productRepository.remove(product)
  }
}
