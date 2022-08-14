import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Room } from "./Room";

@Entity("subjects")
export class Subject {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ type: "text" })
  name: string;

  @ManyToMany(() => Room, rooms => rooms.subjects)
  @JoinTable({
    name: "room_subject",
    joinColumn: {
      name: "room_id",
      referencedColumnName: "id",
    },
    inverseJoinColumn: {
      name: "subject_id",
      referencedColumnName: "id",
    },
  })
  rooms: Room[];
}
