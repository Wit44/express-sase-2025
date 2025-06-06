import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Airline } from "./Airline";
import { User } from "./User";

@Index("fk_ticket_airline_idx", ["airlaneId"], {})
@Index("fk_ticket_user_idx", ["userId"], {})
@Entity("ticket", { schema: "sde_sase_2025" })
export class Ticket {
  @PrimaryGeneratedColumn({ type: "int", name: "ticket_id", unsigned: true })
  ticketId: number;

  @Column("int", { name: "flight_id", unsigned: true })
  flightId: number;

  @Column("int", { name: "airlane_id", unsigned: true })
  airlaneId: number;

  @Column("int", { name: "user_id", unsigned: true })
  userId: number;

  @Column("datetime", { name: "paid_at", nullable: true })
  updatedAt: Date | null;

  @Column("datetime", { name: "created_at" })
  createdAt: Date;

  @Column("datetime", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @Column("datetime", { name: "deleted_at", nullable: true })
  deletedAt: Date | null;

  @ManyToOne(() => Airline, (airline) => airline.tickets, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "airlane_id", referencedColumnName: "airlineId" }])
  airlane: Airline;

  @ManyToOne(() => User, (user) => user.tickets, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "user_id", referencedColumnName: "userId" }])
  user: User;
}
