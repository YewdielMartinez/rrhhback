import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Empleado } from 'src/empleado/entities/Empleado.entity';
import { Domicilio } from 'src/domicilio/entities/Domicilio.entity';

@Index("id_domicilio", ["idDomicilio"], {})
@Entity("sucursales", { schema: "bdrrhh" })
export class Sucursal {
  @PrimaryGeneratedColumn({ type: "int", name: "id_sucursal" })
  idSucursal: number;

  @Column("varchar", { name: "nombre_sucursal", length: 20 })
  nombreSucursal: string;

  @Column("int", { name: "id_domicilio" })
  idDomicilio: number;

  @Column("char", { name: "num_telefono", length: 10 })
  numTelefono: string;

  @Column("timestamp", {
    name: "createdate",
    nullable: true,
    default: () => "CURRENT_TIMESTAMP",
  })
  createdate: Date | null;

  @Column("timestamp", {
    name: "updatedate",
    nullable: true,
    default: () => "CURRENT_TIMESTAMP",
  })
  updatedate: Date | null;

  @OneToMany(() => Empleado, (empleados) => empleados.idSucursal2)
  empleados: Empleado[];

  @ManyToOne(() => Domicilio, (domicilios) => domicilios.sucursales, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "id_domicilio", referencedColumnName: "idDomicilio" }])
  idDomicilio2: Domicilio;
}
