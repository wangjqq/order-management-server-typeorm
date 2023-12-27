import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, CreateDateColumn } from 'typeorm'

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

  // 订单价格
  @Column()
  OrderPrice: number

  // 预计发货时间
  @Column()
  expectedDeliverTime: Date

  // 总计数量
  @Column()
  TotalAmount: number

  // 收货地址
  @Column()
  ShippingAddress: string

  // 关联顾客
  @Column()
  customerId: number

  // 关联商品
  @Column()
  productId: number

  // 关联用户
  @Column()
  userId: number
}
