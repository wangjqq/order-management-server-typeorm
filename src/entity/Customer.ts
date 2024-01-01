import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm'
import { Order } from './Order'

@Entity()
export class Customer {
  @PrimaryGeneratedColumn()
  CustomerID!: number

  @Column()
  Name: string

  @Column()
  Contact: string

  @Column()
  Address: string

  // 关联用户
  @Column()
  userId: number
}
