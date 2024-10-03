import { Empleado } from "src/empleado/entities/Empleado.entity";
import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";

@Index("id_empleado", ["idEmpleado"], {})
@Entity("contactos_beneficiarios", { schema: "isback" })
export class ContactoBeneficiario {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "nombre_contacto_beneficiario", length: 50 })
  nombreContactoBeneficiario: string;

  @Column("char", { name: "num_cel_contacto_beneficiario", length: 10 })
  numCelContactoBeneficiario: string;

  @Column("int", { name: "id_empleado" })
  idEmpleado: number;

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

  @ManyToOne(() => Empleado, (empleados) => empleados.contactosBeneficiarios, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "id_empleado", referencedColumnName: "idEmpleado" }])
  idEmpleado2: Empleado;
}
