import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Empleado } from 'src/empleado/entities/Empleado.entity';

@Entity("puestos", { schema: "bdrrhh" })
export class Puesto {
  @PrimaryGeneratedColumn({ type: "int", name: "id_puesto" })
  idPuesto: number;

  @Column("varchar", { name: "nombre_puesto", length: 30 })
  nombrePuesto: string;

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

  @OneToMany(() => Empleado, (empleados) => empleados.idPuesto2)
  empleados: Empleado[];
}
