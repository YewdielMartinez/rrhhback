import { Contrato } from "src/contrato/entities/Contrato.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity("frecuencias_pago", { schema: "isback" })
export class FrecuenciaPago {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

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
