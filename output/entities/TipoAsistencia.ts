import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Asistencia } from "./Asistencia";

@Entity("tipos_asistencias", { schema: "isback" })
export class TipoAsistencia {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

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
