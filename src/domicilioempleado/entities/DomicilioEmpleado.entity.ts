import { Domicilio } from "src/domicilio/entities/Domicilio.entity";
import { Empleado } from "src/empleado/entities/Empleado.entity";
import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Index("id_empleado", ["idEmpleado"], {})
@Entity("domicilios_empleados", { schema: "isback" })
export class DomicilioEmpleado {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { primary: true, name: "id_empleado" })
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

  @ManyToOne(() => Domicilio, (domicilios) => domicilios.domiciliosEmpleados, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "id_domicilio", referencedColumnName: "idDomicilio" }])
  idDomicilio2: Domicilio;

  @ManyToOne(() => Empleado, (empleados) => empleados.domiciliosEmpleados, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "id_empleado", referencedColumnName: "idEmpleado" }])
  idEmpleado2: Empleado;
}
