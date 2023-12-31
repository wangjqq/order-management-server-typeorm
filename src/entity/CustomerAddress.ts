import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export class CustomerAddress {
  @PrimaryGeneratedColumn()
  id: number

  // 收货人姓名
  @Column({ length: 255 })
  fullName: string

  // 街道地址
  @Column({ length: 255 })
  streetAddress: string

  // 省市区
  @Column({ length: 100 })
  locationAddress: string

  // 国家
  @Column({ length: 100 })
  country: string

  // 联系电话
  @Column({ length: 20 })
  phoneNumber: string

  // 关联顾客
  @Column()
  customerId: number

  // 关联用户
  @Column()
  userId: number
}
