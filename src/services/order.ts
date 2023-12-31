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
      orderStatus,
      expectedDeliverTime,
      OrderPrice,
      TotalAmount,
      Remark,
      productId,
      customerId,
      userId,
      customerAddressId,
    } = orderData

    const order = new Order()
    order.OrderStatus = orderStatus
    order.expectedDeliverTime = expectedDeliverTime
    order.OrderPrice = OrderPrice
    order.TotalAmount = TotalAmount
    order.Remark = Remark

    order.productId = productId
    order.customerId = customerId
    order.userId = userId
    order.CustomerAddressId = customerAddressId

    await this.orderRepository.save(order)
  }

  async createCustomerAddress(customerAddressData: any): Promise<void> {
    const { fullName, streetAddress, locationAddress, phoneNumber, userId, customerId } = customerAddressData
    const customerAddress = new CustomerAddress()
    customerAddress.fullName = fullName
    customerAddress.streetAddress = streetAddress
    customerAddress.locationAddress = locationAddress
    customerAddress.phoneNumber = phoneNumber
    customerAddress.userId = userId
    customerAddress.customerId = customerId
    await this.customerAddressRepository.save(customerAddress)
  }
}
