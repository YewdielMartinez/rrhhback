import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Ciudad } from 'src/ciudad/entities/Ciudad.entity';
import { Domicilio } from 'src/domicilio/entities/Domicilio.entity';
import { Pais } from 'src/pais/entities/Pais.entity';
import { Estado } from 'src/estado/entities/Estado.entity';

@Index("id_estado", ["idEstado"], {})
@Index("id_pais", ["idPais"], {})
@Entity("municipios", { schema: "bdrrhh" })
export class Municipio {
  @Column("int", { primary: true, name: "id_municipio" })
  idMunicipio: number;

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

  @ManyToOne(() => Pais, (paises) => paises.municipios, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "id_pais", referencedColumnName: "idPais" }])
  idPais2: Pais;

  @ManyToOne(() => Estado, (estados) => estados.municipios, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "id_estado", referencedColumnName: "idEstado" }])
  idEstado2: Estado;
}
