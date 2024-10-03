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
import { Estado } from "./Estado";
import { Pais } from "./Pais";

@Index("id_pais", ["idPais"], {})
@Index("id_estado", ["idEstado"], {})
@Entity("municipios", { schema: "isback" })
export class Municipio {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "nombre", length: 50 })
  nombre: string;

  @Column("smallint", { name: "id_pais" })
  idPais: number;

  @Column("int", { name: "id_estado" })
  idEstado: number;

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

  @OneToMany(() => Ciudad, (ciudades) => ciudades.idMunicipio2)
  ciudades: Ciudad[];

  @OneToMany(() => Domicilio, (domicilios) => domicilios.idMunicipio2)
  domicilios: Domicilio[];

  @ManyToOne(() => Estado, (estados) => estados.municipios, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "id_estado", referencedColumnName: "idEstado" }])
  idEstado2: Estado;

  @ManyToOne(() => Pais, (paises) => paises.municipios, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "id_pais", referencedColumnName: "idPais" }])
  idPais2: Pais;
}
