import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Asistencia } from 'src/asistencia/entities/Asistencia.entity';

@Entity("tipos_asistencias", { schema: "bdrrhh" })
export class TipoAsistencia {
  @PrimaryGeneratedColumn({ type: "tinyint", name: "id_tipo_asistencia" })
  idTipoAsistencia: number;

  @Column("varchar", { name: "nombre_asistencia", length: 30 })
  nombreAsistencia: string;

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

  @OneToMany(() => Asistencia, (asistencias) => asistencias.idTipoAsistencia2)
  asistencias: Asistencia[];
}
