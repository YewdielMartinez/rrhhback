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
@Entity("contactos_emergencias", { schema: "isback" })
export class ContactoEmergencia {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "nombre_contacto_emergencia", length: 50 })
  nombreContactoEmergencia: string;

  @Column("char", { name: "num_cel_contacto_emergencia", length: 10 })
  numCelContactoEmergencia: string;

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

  @ManyToOne(() => Empleado, (empleados) => empleados.contactosEmergencias, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "id_empleado", referencedColumnName: "idEmpleado" }])
  idEmpleado2: Empleado;
}
