import { CreateDateColumn } from 'typeorm'

const { Entity, PrimaryGeneratedColumn, Column } = require('typeorm')

@Entity()
export class OsData {
  @PrimaryGeneratedColumn()
  id: string

  @Column({ nullable: true })
  osData: string

  @CreateDateColumn({ precision: 0, type: 'timestamp', default: () => 'CURRENT_TIMESTAMP(0)' })
  created_at: Date
}
