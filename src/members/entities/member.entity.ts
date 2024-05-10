import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Member {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text', { unique: true })
  dni: string;
  @Column('text')
  name: string;
  @Column('text')
  lastname: string;
  @Column('text')
  type: string; // titular, alterno
  @Column('boolean',{
    default: true,
  })
  activo: boolean;

}
