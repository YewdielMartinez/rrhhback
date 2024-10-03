import { Empleado } from "src/empleado/entities/Empleado.entity";
import { TipoLicenciaManejo } from "src/tipolicenciamanejo/entities/TipoLicenciaManejo.entity";
import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";

@Index("id_tipo_licencia_manejo", ["idTipoLicenciaManejo"], {})
@Index("id_empleado", ["idEmpleado"], {})
@Entity("licencias_manejo", { schema: "isback" })
export class LicenciaManejo {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "licencia", length: 50 })
  licencia: string;

  @Column("int", { name: "id_empleado" })
  idEmpleado: number;

  @Column("tinyint", { name: "id_tipo_licencia_manejo" })
  idTipoLicenciaManejo: number;

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

  @ManyToOne(
    () => TipoLicenciaManejo,
    (tiposLicenciasManejo) => tiposLicenciasManejo.licenciasManejos,
    { onDelete: "NO ACTION", onUpdate: "NO ACTION" }
  )
  @JoinColumn([
    {
      name: "id_tipo_licencia_manejo",
      referencedColumnName: "idTipoLicenciaManejo",
    },
  ])
  idTipoLicenciaManejo2: TipoLicenciaManejo;

  @ManyToOne(() => Empleado, (empleados) => empleados.licenciasManejos, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "id_empleado", referencedColumnName: "idEmpleado" }])
  idEmpleado2: Empleado;
}
