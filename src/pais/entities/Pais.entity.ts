import { Column, Entity, OneToMany } from "typeorm";
import { Ciudad } from 'src/ciudad/entities/Ciudad.entity';
import { Domicilio } from 'src/domicilio/entities/Domicilio.entity';
import { Estado } from 'src/estado/entities/Estado.entity';
import { Municipio } from 'src/municipio/entities/Municipio.entity';

@Entity("paises", { schema: "bdrrhh" })
export class Pais {
  @Column("smallint", { primary: true, name: "id_pais" })
  idPais: number;

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
