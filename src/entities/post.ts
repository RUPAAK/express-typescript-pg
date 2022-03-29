import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("post")
export class PostEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
