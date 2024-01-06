import { Entity, PrimaryGeneratedColumn, Column, OneToMany, CreateDateColumn, UpdateDateColumn } from 'typeorm'

@Entity()
export class Customer {
  @PrimaryGeneratedColumn()
  CustomerID: number

  // 客户名称
  @Column()
  Name: string

  // 客户电话
  @Column()
  Phone: string

  // 客户微信号
  @Column()
  WeChat: string

  // 客户来源
  @Column()
  Source: string

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
