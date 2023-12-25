import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, CreateDateColumn } from 'typeorm'
import { OrderDetail } from './OrderDetail'
import { Customer } from './Customer'

@Entity()
export class Order {
  // 订单id
  @PrimaryGeneratedColumn()
  OrderID: number

  // 订单创建时间
  @CreateDateColumn({ precision: 0, type: 'timestamp', default: () => 'CURRENT_TIMESTAMP(0)' })
  OrderDate: Date

  // 订单状态
  @Column()
  OrderStatus: string

  // 总计数量
  @Column()
  TotalAmount: number

  // 收货地址
  @Column()
  ShippingAddress: string

  // 关联订单详情id
  @OneToMany(() => OrderDetail, (orderDetail: any) => orderDetail.order)
  orderDetails: OrderDetail[]

  // 关联顾客
  @ManyToOne(() => Customer, (customer: any) => customer.orders)
  customer: Customer = new Customer()
}
