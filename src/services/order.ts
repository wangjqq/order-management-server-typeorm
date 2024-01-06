import { AppDataSource } from '../data-source'
import { Customer } from '../entity/Customer'
import { CustomerAddress } from '../entity/CustomerAddress'
import { Order } from '../entity/Order'
import { Product } from '../entity/Product'

export class OrderService {
  private orderRepository = AppDataSource.getRepository(Order)
  private customerAddressRepository = AppDataSource.getRepository(CustomerAddress)

  // 新增订单
  async createOrder(orderData: any): Promise<void> {
    const {
      OrderStatus,
      expectedDeliverTime,
      OrderPrice,
      TotalAmount,
      Remark,
      productId,
      customerId,
      userId,
      CustomerAddressId,
    } = orderData

    const order = new Order()
    order.OrderStatus = OrderStatus
    order.expectedDeliverTime = expectedDeliverTime
    order.OrderPrice = OrderPrice
    order.TotalAmount = TotalAmount
    order.Remark = Remark

    order.productId = productId
    order.customerId = customerId
    order.userId = userId
    order.CustomerAddressId = CustomerAddressId

    await this.orderRepository.save(order)
  }

  // 查询订单
  async getOrders({ userId }: any) {
    return await this.orderRepository.find({
      where: {
        userId: userId,
      },
    })
  }

  // 查询顾客
  async getCustomerAddress({ userId }: any) {
    return await this.customerAddressRepository.find({
      where: {
        userId: userId,
      },
    })
  }
}
