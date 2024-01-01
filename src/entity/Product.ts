import { Entity, PrimaryGeneratedColumn, Column, OneToMany, CreateDateColumn, UpdateDateColumn } from 'typeorm'

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  ProductID: number

  @Column()
  ProductName: string

  @Column({ nullable: true })
  Description: string

  @Column({ nullable: true })
  UnitPrice: number

  @CreateDateColumn({ precision: 0, type: 'timestamp', default: () => 'CURRENT_TIMESTAMP(0)' })
  created_at: Date

  @UpdateDateColumn({
    precision: 0,
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(0)',
    onUpdate: 'CURRENT_TIMESTAMP(0)',
  })
  updated_at: Date

  @Column()
  userId: number
}
