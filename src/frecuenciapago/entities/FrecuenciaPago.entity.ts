import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Contrato } from 'src/contrato/entities/Contrato.entity';

@Entity("frecuencias_pago", { schema: "bdrrhh" })
export class FrecuenciaPago {
  @PrimaryGeneratedColumn({ type: "tinyint", name: "id_frecuencia_pago" })
  idFrecuenciaPago: number;

  @Column("varchar", { name: "periodicidad", length: 20 })
  periodicidad: string;

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

  @OneToMany(() => Contrato, (contratos) => contratos.idFrecuenciaPago2)
  contratos: Contrato[];
}
