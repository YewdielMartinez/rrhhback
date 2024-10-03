import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Empleado } from 'src/empleado/entities/Empleado.entity';
import { TipoLicenciaManejo } from 'src/tipolicenciamanejo/entities/TipoLicenciaManejo.entity';

@Index("id_empleado", ["idEmpleado"], {})
@Index("id_tipo_licencia_manejo", ["idTipoLicenciaManejo"], {})
@Entity("licencias_manejo", { schema: "bdrrhh" })
export class LicenciaManejo {
  @PrimaryGeneratedColumn({ type: "int", name: "id_licencia_manejo" })
  idLicenciaManejo: number;

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

  @ManyToOne(() => Empleado, (empleados) => empleados.licenciasManejos, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "id_empleado", referencedColumnName: "idEmpleado" }])
  idEmpleado2: Empleado;

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
}
