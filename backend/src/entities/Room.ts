import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("rooms")
export class Room {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ type: "text" })
  name: string;
}
