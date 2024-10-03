import { Empleado } from "src/empleado/entities/Empleado.entity";
import { TipoAsistencia } from "src/tipoasistencia/entities/TipoAsistencia.entity";
import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";

@Index("id_tipo_asistencia", ["idTipoAsistencia"], {})
@Index("id_empleado", ["idEmpleado"], {})
@Entity("asistencias", { schema: "isback" })
export class Asistencia {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "id_empleado" })
  idEmpleado: number;

  @Column("tinyint", { name: "id_tipo_asistencia" })
  idTipoAsistencia: number;

  @Column("timestamp", {
    name: "asistencia_inicio",
    nullable: true,
    default: () => "CURRENT_TIMESTAMP",
  })
  asistenciaInicio: Date | null;

  @Column("timestamp", {
    name: "asistencia_fin",
    nullable: true,
    default: () => "CURRENT_TIMESTAMP",
  })
  asistenciaFin: Date | null;

  @Column("tinyint", { name: "horas_trabajadas" })
  horasTrabajadas: number;

  @Column("timestamp", {
    name: "create_date",
    nullable: true,
    default: () => "CURRENT_TIMESTAMP",
  })
  createDate: Date | null;

  @Column("timestamp", {
    name: "update_date",
    nullable: true,
    default: () => "CURRENT_TIMESTAMP",
  })
  updateDate: Date | null;

  @ManyToOne(() => Empleado, (empleados) => empleados.asistencias, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "id_empleado", referencedColumnName: "idEmpleado" }])
  idEmpleado2: Empleado;

  @ManyToOne(
    () => TipoAsistencia,
    (tiposAsistencias) => tiposAsistencias.asistencias,
    { onDelete: "NO ACTION", onUpdate: "NO ACTION" }
  )
  @JoinColumn([
    { name: "id_tipo_asistencia", referencedColumnName: "idTipoAsistencia" },
  ])
  idTipoAsistencia2: TipoAsistencia;
}
