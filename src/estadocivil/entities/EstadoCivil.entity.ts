import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Empleado } from 'src/empleado/entities/Empleado.entity';

@Entity("estados_civiles", { schema: "bdrrhh" })
export class EstadoCivil {
  @PrimaryGeneratedColumn({ type: "tinyint", name: "id_estado_civil" })
  idEstadoCivil: number;

  @Column("varchar", { name: "estado_civil", length: 20 })
  estadoCivil: string;

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

  @OneToMany(() => Empleado, (empleados) => empleados.idEstadoCivil2)
  empleados: Empleado[];
}
