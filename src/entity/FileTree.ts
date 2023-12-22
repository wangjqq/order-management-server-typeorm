import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Tree,
  TreeChildren,
  TreeParent,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm'

@Entity()
@Tree('closure-table')
export class FileTree {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  mimeType: string

  @Column()
  size: number

  @Column()
  path: string

  @TreeChildren()
  children: FileTree[]

  @TreeParent()
  parent: FileTree

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date
}
