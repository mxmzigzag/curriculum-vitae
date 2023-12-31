import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("projects")
export class Project {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;
}
