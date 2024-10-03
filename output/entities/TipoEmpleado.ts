import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Empleado } from "./Empleado";

@Entity("tipos_empleados", { schema: "isback" })
export class TipoEmpleado {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "nombre_tipo_empleado", length: 30 })
  nombreTipoEmpleado: string;

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

  @OneToMany(() => Empleado, (empleados) => empleados.idTipoEmpleado2)
  empleados: Empleado[];
}
