import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm'

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

  // 关联用户
  @Column()
  userId: number

  @CreateDateColumn({ precision: 0, type: 'timestamp', default: () => 'CURRENT_TIMESTAMP(0)' })
  created_at: Date

  @UpdateDateColumn({
    precision: 0,
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(0)',
    onUpdate: 'CURRENT_TIMESTAMP(0)',
  })
  updated_at: Date
}
