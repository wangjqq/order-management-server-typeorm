import { AppDataSource } from '../data-source'
import { Customer } from '../entity/Customer'
import { CustomerAddress } from '../entity/CustomerAddress'
import { Order } from '../entity/Order'
import { Product } from '../entity/Product'

export class OrderService {
  private orderRepository = AppDataSource.getRepository(Order)
  private productRepository = AppDataSource.getRepository(Product)
  private customerRepository = AppDataSource.getRepository(Customer)
  private customerAddressRepository = AppDataSource.getRepository(CustomerAddress)

  // 新增订单
  async createOrder(orderData: any): Promise<void> {
    const {
      OrderStatus,
      expectedDeliverTime,
      OrderPrice,
      TotalAmount,
      Remark,
      OrderDate,
      productId,
      customerId,
      userId,
      CustomerAddressId,
      OrderID,
    } = orderData

    const order = new Order()
    order.OrderStatus = OrderStatus
    order.expectedDeliverTime = expectedDeliverTime
    order.OrderPrice = OrderPrice
    order.TotalAmount = TotalAmount
    order.Remark = Remark
    order.OrderDate = OrderDate

    order.productId = productId
    order.customerId = customerId
    order.userId = userId
    order.CustomerAddressId = CustomerAddressId
    order.OrderID = OrderID

    await this.orderRepository.save(order)
  }

  // 查询订单
  async getOrders({ userId }: any) {
    const orders: any = await this.orderRepository.find({
      where: {
        userId: userId,
      },
      order: {
        OrderID: 'DESC', // 升序排序，如需降序可使用 'DESC'
      },
    })

    const newOrders = await Promise.all(
      orders.map(async (item: any) => {
        const product = await this.productRepository.findOne({
          where: {
            ProductID: item.productId,
          },
        })
        const customer = await this.customerRepository.findOne({
          where: {
            CustomerID: item.customerId,
          },
        })
        item.customerName = customer.Name
        item.productName = product.ProductName
        return item // 返回更新后的 item
      })
    )
    return newOrders
  }

  // 查询顾客
  async getCustomerAddress({ userId }: any) {
    return await this.customerAddressRepository.find({
      where: {
        userId: userId,
      },
    })
  }

  // 删除订单
  async delOrder({ userId, OrderID }: any) {
    const order = await this.orderRepository.findOne({
      where: {
        userId: userId,
        OrderID: OrderID,
      },
    })
    return await this.orderRepository.remove(order)
  }
}
