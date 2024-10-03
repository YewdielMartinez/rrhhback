import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Ciudad } from "./Ciudad";
import { Domicilio } from "./Domicilio";
import { Estado } from "./Estado";
import { Municipio } from "./Municipio";

@Entity("paises", { schema: "isback" })
export class Pais {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "nombre", length: 50 })
  nombre: string;

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

  @OneToMany(() => Ciudad, (ciudades) => ciudades.idPais2)
  ciudades: Ciudad[];

  @OneToMany(() => Domicilio, (domicilios) => domicilios.idPais2)
  domicilios: Domicilio[];

  @OneToMany(() => Estado, (estados) => estados.idPais2)
  estados: Estado[];

  @OneToMany(() => Municipio, (municipios) => municipios.idPais2)
  municipios: Municipio[];
}
