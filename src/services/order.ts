import { AppDataSource } from '../data-source'
import { Customer } from '../entity/Customer'
import { Order } from '../entity/Order'
import { Product } from '../entity/Product'

export class OrderService {
  private orderRepository = AppDataSource.getRepository(Order)
  private productRepository = AppDataSource.getRepository(Product)
  private customerRepository = AppDataSource.getRepository(Customer)

  // 新增订单
  async createOrder(orderData: any): Promise<void> {
    const { orderStatus, totalAmount, shippingAddress, orderDetails, customerId, userId } = orderData

    const order = new Order()
    order.OrderStatus = orderStatus
    order.TotalAmount = totalAmount
    order.ShippingAddress = shippingAddress

    order.customerId = customerId
    order.userId = userId

    await this.orderRepository.save(order)

    // for (const detail of orderDetails) {
    //   const { quantity, unitPrice, productId } = detail

    //   const product = await this.productRepository.findOne(productId)
    //   if (!product) {
    //     throw new Error('Product not found')
    //   }
    //   orderDetail.product = product
    //   orderDetail.order = order
    //   orderDetail.Subtotal = quantity * unitPrice

    //   await this.orderDetailRepository.save(orderDetail)
    // }
  }
}
