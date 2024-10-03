import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Empleado } from 'src/empleado/entities/Empleado.entity';
import { Domicilio } from 'src/domicilio/entities/Domicilio.entity';

@Index("id_empleado", ["idEmpleado"], {})
@Entity("domicilios_empleados", { schema: "bdrrhh" })
export class DomicilioEmpleado {
  @Column("int", { primary: true, name: "id_domicilio" })
  idDomicilio: number;

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

  @ManyToOne(() => Empleado, (empleados) => empleados.domiciliosEmpleados, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "id_empleado", referencedColumnName: "idEmpleado" }])
  idEmpleado2: Empleado;

  @ManyToOne(() => Domicilio, (domicilios) => domicilios.domiciliosEmpleados, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "id_domicilio", referencedColumnName: "idDomicilio" }])
  idDomicilio2: Domicilio;
}
