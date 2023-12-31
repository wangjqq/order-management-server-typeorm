import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, CreateDateColumn } from 'typeorm'

@Entity()
export class Order {
  // 订单id
  @PrimaryGeneratedColumn()
  OrderID: number

  // 订单创建时间
  @CreateDateColumn({ precision: 0, type: 'timestamp', default: () => 'CURRENT_TIMESTAMP(0)' })
  OrderDate: Date

  // 订单状态 售前 已付款 制作中 已发货 已收货
  @Column()
  OrderStatus: 'preSales' | 'paid' | 'production' | 'shipped' | 'received'

  // 预计发货时间
  @Column()
  expectedDeliverTime: Date

  // 订单价格
  @Column()
  OrderPrice: number

  // 总计数量
  @Column()
  TotalAmount: number

  // 备注
  @Column()
  Remark: string

  // 关联顾客
  @Column()
  customerId: number

  // 关联顾客收货地址
  @Column()
  CustomerAddressId: number

  // 关联商品
  @Column()
  productId: number

  // 关联用户
  @Column()
  userId: number
}
