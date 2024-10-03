import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Ciudad } from "./Ciudad";
import { Domicilio } from "./Domicilio";
import { Pais } from "./Pais";
import { Municipio } from "./Municipio";

@Index("id_pais", ["idPais"], {})
@Entity("estados", { schema: "isback" })
export class Estado {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "nombre", length: 50 })
  nombre: string;

  @Column("smallint", { name: "id_pais" })
  idPais: number;

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

  @OneToMany(() => Ciudad, (ciudades) => ciudades.idEstado2)
  ciudades: Ciudad[];

  @OneToMany(() => Domicilio, (domicilios) => domicilios.idEstado2)
  domicilios: Domicilio[];

  @ManyToOne(() => Pais, (paises) => paises.estados, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "id_pais", referencedColumnName: "idPais" }])
  idPais2: Pais;

  @OneToMany(() => Municipio, (municipios) => municipios.idEstado2)
  municipios: Municipio[];
}
