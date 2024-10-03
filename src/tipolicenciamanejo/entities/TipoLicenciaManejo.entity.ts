import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { LicenciaManejo } from 'src/licenciamanejo/entities/LicenciaManejo.entity';

@Entity("tipos_licencias_manejo", { schema: "bdrrhh" })
export class TipoLicenciaManejo {
  @PrimaryGeneratedColumn({ type: "tinyint", name: "id_tipo_licencia_manejo" })
  idTipoLicenciaManejo: number;

  @Column("varchar", { name: "nombre_licencia", length: 50 })
  nombreLicencia: string;

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

  @OneToMany(
    () => LicenciaManejo,
    (licenciasManejo) => licenciasManejo.idTipoLicenciaManejo2
  )
  licenciasManejos: LicenciaManejo[];
}
