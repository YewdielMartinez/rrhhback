import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Empleado } from 'src/empleado/entities/Empleado.entity';

@Index("id_empleado", ["idEmpleado"], {})
@Entity("usuarios", { schema: "bdrrhh" })
export class Usuario {
  @PrimaryGeneratedColumn({ type: "int", name: "id_usuario" })
  idUsuario: number;

  @Column("varchar", { name: "nombre_usuario", length: 50 })
  nombreUsuario: string;

  @Column("varchar", { name: "correo", length: 100 })
  correo: string;

  @Column("varchar", { name: "password", length: 255 })
  password: string;

  @Column("int", { name: "id_empleado", nullable: true })
  idEmpleado: number | null;

  @Column({ name: "is_admin", nullable: true, default: false })
  isAdmin: boolean | null;

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

  @ManyToOne(() => Empleado, (empleados) => empleados.usuarios, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "id_empleado", referencedColumnName: "idEmpleado" }])
  idEmpleado2: Empleado;
}