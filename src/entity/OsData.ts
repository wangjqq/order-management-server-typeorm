const { Entity, PrimaryGeneratedColumn, Column } = require('typeorm')

@Entity()
export class OsData {
  @PrimaryGeneratedColumn()
  id: string

  @Column()
  totalMemory: string

  @Column()
  freeMemory: string

  @Column({ type: 'jsonb' })
  cpus

  @Column({ type: 'timestamp' })
  createdAt
}
