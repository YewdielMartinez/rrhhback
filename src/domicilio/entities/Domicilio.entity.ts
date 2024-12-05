import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Pais } from 'src/pais/entities/Pais.entity';
import { Estado } from 'src/estado/entities/Estado.entity';
import { Municipio } from 'src/municipio/entities/Municipio.entity';
import { Ciudad } from 'src/ciudad/entities/Ciudad.entity';
import { DomicilioEmpleado } from 'src/domicilioempleado/entities/DomicilioEmpleado.entity';
import { Sucursal } from 'src/sucursal/entities/Sucursal.entity';
import { Empleado } from "src/empleado/entities/Empleado.entity";

@Index("id_ciudad", ["idCiudad"], {})
@Index("id_estado", ["idEstado"], {})
@Index("id_municipio", ["idMunicipio"], {})
@Index("id_pais", ["idPais"], {})
@Entity("domicilios", { schema: "bdrrhh" })
export class Domicilio {
  @PrimaryGeneratedColumn({ type: "int", name: "id_domicilio" })
  idDomicilio: number;

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

  @ManyToOne(() => Estado, (estados) => estados.domicilios, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "id_estado", referencedColumnName: "idEstado" }])
  idEstado2: Estado;

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

  @OneToMany(
    () => DomicilioEmpleado,
    (domiciliosEmpleados) => domiciliosEmpleados.idDomicilio2
  )
  domiciliosEmpleados: DomicilioEmpleado[];

  @OneToMany(() => Sucursal, (sucursales) => sucursales.idDomicilio2)
  sucursales: Sucursal[];

  @OneToMany(() => Empleado, (empleados) => empleados.idDomicilio2)
  empleados: Empleado[];
}
