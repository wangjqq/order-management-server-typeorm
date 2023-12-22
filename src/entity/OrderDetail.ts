import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm'
import { Order } from './Order'
import { Product } from './Product'

@Entity()
export class OrderDetail {
  @PrimaryGeneratedColumn()
  DetailID: number

  @Column()
  Quantity: number

  @Column()
  UnitPrice: number

  @Column()
  Subtotal: number

  @ManyToOne(() => Order, (order) => order.orderDetails)
  order: Order

  @ManyToOne(() => Product, (product: any) => product.orderDetails)
  product: Product = new Product()
}
