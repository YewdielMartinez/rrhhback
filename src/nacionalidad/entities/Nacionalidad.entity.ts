import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Empleado } from 'src/empleado/entities/Empleado.entity';

@Entity("nacionalidades", { schema: "bdrrhh" })
export class Nacionalidad {
  @PrimaryGeneratedColumn({ type: "int", name: "id_nacionalidad" })
  idNacionalidad: number;

  @Column("varchar", { name: "nacionalidad", length: 50 })
  nacionalidad: string;

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

  @OneToMany(() => Empleado, (empleados) => empleados.idNacionalidad2)
  empleados: Empleado[];
}
