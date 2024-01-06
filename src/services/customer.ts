import { AppDataSource } from '../data-source'
import { Customer } from '../entity/Customer'
import { CustomerAddress } from '../entity/CustomerAddress'

export class CustomerService {
  private customerRepository = AppDataSource.getRepository(Customer)
  private customerAddressRepository = AppDataSource.getRepository(CustomerAddress)

  // 新增客户
  async createCustomer(orderData: any): Promise<void> {
    const { Name, Phone, WeChat, Source, userId } = orderData

    const customer = new Customer()
    customer.Name = Name
    customer.Phone = Phone
    customer.WeChat = WeChat
    customer.Source = Source

    customer.userId = userId

    await this.customerRepository.save(customer)
  }

  // 查询客户
  async getCustomers({ userId }: any) {
    return await this.customerRepository.find({
      where: {
        userId: userId,
      },
    })
  }

  // 查询客户地址
  async getCustomerAddresss({ userId }: any) {
    return await this.customerAddressRepository.find({
      where: {
        userId: userId,
      },
    })
  }

  // 新增客户地址
  async createCustomerAddress(orderData: any): Promise<void> {
    const { fullName, phoneNumber, locationAddress, streetAddress, userId } = orderData

    const customerAddress = new CustomerAddress()
    customerAddress.fullName = fullName
    customerAddress.phoneNumber = phoneNumber
    customerAddress.locationAddress = locationAddress
    customerAddress.streetAddress = streetAddress
    customerAddress.country = 'Chain'

    customerAddress.userId = userId

    await this.customerAddressRepository.save(customerAddress)
  }
}
