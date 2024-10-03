import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Empleado } from "./Empleado";

@Entity("dias_vacaciones", { schema: "isback" })
export class DiasVacaciones {
  @PrimaryGeneratedColumn({ type: "tinyint", name: "id" })
  id: number;

  @Column("tinyint", { name: "dias_vacaciones" })
  diasVacaciones: number;

  @Column("timestamp", {
    name: "createdate",
    nullable: true,
    default: () => "CURRENT_TIMESTAMP",
  })
  createdate: Date | null;

  @Column("timestamp", {
    name: "updatedate",
    nullable: true,
    default: () => "CURRENT_TIMESTAMP",
  })
  updatedate: Date | null;

  @OneToMany(() => Empleado, (empleados) => empleados.idDiasVacaciones2)
  empleados: Empleado[];
}
