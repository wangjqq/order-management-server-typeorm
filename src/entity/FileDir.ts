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

@Entity()
export class FileDir {
  @PrimaryColumn()
  id: string

  @Column()
  name: string

  @Column()
  userId: number

  @Column({ nullable: true })
  parentId: string

  @Column({ nullable: true })
  parentIds: string

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date
}
