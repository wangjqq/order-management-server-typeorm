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
