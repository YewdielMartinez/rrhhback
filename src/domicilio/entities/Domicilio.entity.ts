import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Pais } from "./Pais";
import { Municipio } from "./Municipio";
import { Ciudad } from "./Ciudad";
import { Estado } from "./Estado";
import { DomicilioEmpleado } from "./DomicilioEmpleado";
import { Sucursal } from "./Sucursal";

@Index("id_pais", ["idPais"], {})
@Index("id_municipio", ["idMunicipio"], {})
@Index("id_estado", ["idEstado"], {})
@Index("id_ciudad", ["idCiudad"], {})
@Entity("domicilios", { schema: "isback" })
export class Domicilio {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("smallint", { name: "id_pais" })
  idPais: number;

  @Column("int", { name: "id_estado" })
  idEstado: number;

  @Column("int", { name: "id_municipio" })
  idMunicipio: number;

  @Column("int", { name: "id_ciudad" })
  idCiudad: number;

  @Column("varchar", { name: "colonia", length: 20 })
  colonia: string;

  @Column("char", { name: "cp", length: 5 })
  cp: string;

  @Column("char", { name: "numero", length: 5 })
  numero: string;

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

  @ManyToOne(() => Pais, (paises) => paises.domicilios, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "id_pais", referencedColumnName: "idPais" }])
  idPais2: Pais;

  @ManyToOne(() => Municipio, (municipios) => municipios.domicilios, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "id_municipio", referencedColumnName: "idMunicipio" }])
  idMunicipio2: Municipio;

  @ManyToOne(() => Ciudad, (ciudades) => ciudades.domicilios, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "id_ciudad", referencedColumnName: "idCiudad" }])
  idCiudad2: Ciudad;

  @ManyToOne(() => Estado, (estados) => estados.domicilios, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "id_estado", referencedColumnName: "idEstado" }])
  idEstado2: Estado;

  @OneToMany(
    () => DomicilioEmpleado,
    (domiciliosEmpleados) => domiciliosEmpleados.idDomicilio2
  )
  domiciliosEmpleados: DomicilioEmpleado[];

  @OneToMany(() => Sucursal, (sucursales) => sucursales.idDomicilio2)
  sucursales: Sucursal[];
}
