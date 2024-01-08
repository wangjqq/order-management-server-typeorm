import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm'

@Entity()
export class Order {
  // 订单id
  @PrimaryGeneratedColumn()
  OrderID: number

  // 下单时间
  @Column({ nullable: true })
  OrderDate: Date

  @UpdateDateColumn({
    precision: 0,
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(0)',
    onUpdate: 'CURRENT_TIMESTAMP(0)',
  })
  updated_at: Date

  // 订单状态 售前 已付款 制作中 已发货 已收货 已完结 已取消
  @Column()
  OrderStatus: 'preSales' | 'paid' | 'production' | 'shipped' | 'received' | 'over' | 'cancel'

  // 预计发货时间
  @Column({ nullable: true })
  expectedDeliverTime: Date

  // 订单价格
  @Column({ nullable: true, type: 'float' })
  OrderPrice: number

  // 总计数量
  @Column({ nullable: true })
  TotalAmount: number

  // 备注
  @Column({ nullable: true, type: 'text' })
  Remark: string

  // 关联顾客
  @Column()
  customerId: number

  // 关联顾客收货地址
  @Column({ nullable: true })
  CustomerAddressId: number

  // 关联商品
  @Column()
  productId: number

  // 关联用户
  @Column()
  userId: number
}
