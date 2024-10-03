import { AutoEmpleado } from "src/autoempleado/entities/AutoEmpleado.entity";
import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";

@Index("numero_serie", ["numeroSerie"], { unique: true })
@Index("IDX_c2afcd233af24c8db7969038e3", ["numeroSerie"], { unique: true })
@Entity("autos", { schema: "isback" })
export class Auto {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "nombre_modelo", length: 30 })
  nombreModelo: string;

  @Column("char", { name: "año_modelo", length: 4 })
  aOModelo: string;

  @Column("varchar", { name: "orden_registro", length: 30 })
  ordenRegistro: string;

  @Column("date", { name: "fecha_compra" })
  fechaCompra: string;

  @Column("varchar", { name: "numero_placas", length: 10 })
  numeroPlacas: string;

  @Column("char", { name: "numero_serie", unique: true, length: 17 })
  numeroSerie: string;

  @Column("varchar", { name: "numero_poliza", length: 20 })
  numeroPoliza: string;

  @Column("date", { name: "vencimiento_poliza" })
  vencimientoPoliza: string;

  @Column("char", { name: "estatus", length: 2, default: () => "'A'" })
  estatus: string;

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

  @OneToMany(() => AutoEmpleado, (autosEmpleados) => autosEmpleados.idAuto2)
  autosEmpleados: AutoEmpleado[];
}
