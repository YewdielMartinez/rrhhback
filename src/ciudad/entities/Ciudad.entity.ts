import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Pais } from 'src/pais/entities/Pais.entity';
import { Estado } from 'src/estado/entities/Estado.entity';
import { Municipio } from 'src/municipio/entities/Municipio.entity';
import { Domicilio } from 'src/domicilio/entities/Domicilio.entity';

@Index("id_estado", ["idEstado"], {})
@Index("id_municipio", ["idMunicipio"], {})
@Index("id_pais", ["idPais"], {})
@Entity("ciudades", { schema: "bdrrhh" })
export class Ciudad {
  @Column("int", { primary: true, name: "id_ciudad" })
  idCiudad: number;

  @Column("varchar", { name: "nombre", length: 50 })
  nombre: string;

  @Column("smallint", { name: "id_pais" })
  idPais: number;

  @Column("int", { name: "id_estado" })
  idEstado: number;

  @Column("int", { name: "id_municipio" })
  idMunicipio: number;

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

  @ManyToOne(() => Pais, (paises) => paises.ciudades, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "id_pais", referencedColumnName: "idPais" }])
  idPais2: Pais;

  @ManyToOne(() => Estado, (estados) => estados.ciudades, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "id_estado", referencedColumnName: "idEstado" }])
  idEstado2: Estado;

  @ManyToOne(() => Municipio, (municipios) => municipios.ciudades, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "id_municipio", referencedColumnName: "idMunicipio" }])
  idMunicipio2: Municipio;

  @OneToMany(() => Domicilio, (domicilios) => domicilios.idCiudad2)
  domicilios: Domicilio[];
}
