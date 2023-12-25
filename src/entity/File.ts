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
  size: number

  @Column({ nullable: true })
  path: string

  @Column()
  dirId: string

  @Column()
  userId: number

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date
}
