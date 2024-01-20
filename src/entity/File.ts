import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Tree,
  TreeChildren,
  TreeParent,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
  OneToMany,
  PrimaryColumn,
} from 'typeorm'
import { User } from './User'

@Entity()
export class File {
  @PrimaryColumn()
  id: string

  @Column()
  name: string

  @Column({ nullable: true })
  mimeType: string

  @Column({ nullable: true })
  size: string

  @Column({ nullable: true })
  path: string

  @Column()
  dirId: string

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
