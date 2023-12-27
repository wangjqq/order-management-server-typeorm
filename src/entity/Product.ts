import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm'

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
}
