import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm'
import { OrderDetail } from './OrderDetail'

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  ProductID: number

  @Column()
  ProductName: string

  @Column()
  Description: string

  @Column()
  UnitPrice: number

  @OneToMany(() => OrderDetail, (orderDetail) => orderDetail.product)
  orderDetails: OrderDetail[]
}
