import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Auto } from 'src/auto/entities/Auto.entity';
import { Empleado } from 'src/empleado/entities/Empleado.entity';

@Index("id_auto", ["idAuto"], {})
@Index("id_empleado_responsable", ["idEmpleadoResponsable"], {})
@Entity("autos_empleados", { schema: "bdrrhh" })
export class AutoEmpleado {
  @PrimaryGeneratedColumn({ type: "int", name: "id_registro" })
  idRegistro: number;

  @Column("int", { name: "id_auto" })
  idAuto: number;

  @Column("int", { name: "id_empleado_responsable" })
  idEmpleadoResponsable: number;

  @Column("date", { name: "fecha_asignacion" })
  fechaAsignacion: string;

  @Column("date", { name: "fecha_remocion" })
  fechaRemocion: string;

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

  @ManyToOne(() => Auto, (autos) => autos.autosEmpleados, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "id_auto", referencedColumnName: "idAuto" }])
  idAuto2: Auto;

  @ManyToOne(() => Empleado, (empleados) => empleados.autosEmpleados, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([
    { name: "id_empleado_responsable", referencedColumnName: "idEmpleado" },
  ])
  idEmpleadoResponsable2: Empleado;
}
