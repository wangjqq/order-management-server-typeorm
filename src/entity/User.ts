import { Entity, PrimaryGeneratedColumn, Column, Unique, CreateDateColumn, UpdateDateColumn } from 'typeorm'

@Entity()
@Unique(['username'])
@Unique(['email'])
export class User {
  @PrimaryGeneratedColumn()
  user_id: number

  @Column({ type: 'varchar', length: 255 })
  username: string

  @Column({ type: 'varchar', length: 255 })
  password_hash: string

  @Column({ type: 'varchar', length: 255 })
  email: string

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date
}
