import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from 'typeorm'
import { OrderDetail } from './OrderDetail'
import { Customer } from './Customer'

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  OrderID: number

  @Column()
  OrderDate: Date

  @Column()
  OrderStatus: string

  @Column()
  TotalAmount: number

  @Column()
  ShippingAddress: string

  @OneToMany(() => OrderDetail, (orderDetail: any) => orderDetail.order)
  orderDetails: OrderDetail[]

  @ManyToOne(() => Customer, (customer: any) => customer.orders)
  customer: Customer = new Customer()
}
