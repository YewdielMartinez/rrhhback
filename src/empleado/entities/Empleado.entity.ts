import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Asistencia } from 'src/asistencia/entities/Asistencia.entity';
import { AutoEmpleado } from 'src/autoempleado/entities/AutoEmpleado.entity';
import { ContactoBeneficiario } from 'src/contactobeneficiario/entities/ContactoBeneficiario.entity';
import { ContactoEmergencia } from 'src/contactoemergencia/entities/ContactoEmergencia.entity';
import { Contrato } from 'src/contrato/entities/Contrato.entity';
import { DomicilioEmpleado } from 'src/domicilioempleado/entities/DomicilioEmpleado.entity';
import { Contacto } from 'src/contacto/entities/Contacto.entity';
import { Nacionalidad } from 'src/nacionalidad/entities/Nacionalidad.entity';
import { Sucursal } from 'src/sucursal/entities/Sucursal.entity';
import { Departamento } from 'src/departamento/entities/Departamento.entity';
import { Puesto } from 'src/puesto/entities/Puesto.entity';
import { TipoEmpleado } from 'src/tipoempleado/entities/TipoEmpleado.entity';
import { DiasVacaciones } from 'src/diasvacaciones/entities/DiasVacaciones.entity';
import { LicenciaManejo } from 'src/licenciamanejo/entities/LicenciaManejo.entity';
import { Permiso } from 'src/permiso/entities/Permiso.entity';
import { Usuario } from 'src/usuario/entities/Usuario.entity';
import { EstadoCivil } from "src/estadocivil/entities/EstadoCivil.entity";

@Index("curp", ["curp"], { unique: true })
@Index("id_contacto", ["idContacto"], {})
@Index("id_departamento", ["idDepartamento"], {})
@Index("id_dias_vacaciones", ["idDiasVacaciones"], {})
@Index("id_estado_civil", ["idEstadoCivil"], {})
@Index("id_nacionalidad", ["idNacionalidad"], {})
@Index("id_puesto", ["idPuesto"], {})
@Index("id_sucursal", ["idSucursal"], {})
@Index("id_tipo_empleado", ["idTipoEmpleado"], {})
@Index("nss", ["nss"], { unique: true })
@Index("rfc", ["rfc"], { unique: true })
@Entity("empleados", { schema: "bdrrhh" })
export class Empleado {
  @PrimaryGeneratedColumn({ type: "int", name: "id_empleado" })
  idEmpleado: number;

  @Column("varchar", { name: "nombre_empleado", length: 50 })
  nombreEmpleado: string;

  @Column("int", { name: "id_contacto" })
  idContacto: number;

  @Column("char", { name: "curp", unique: true, length: 18 })
  curp: string;

  @Column("char", { name: "rfc", unique: true, length: 13 })
  rfc: string;

  @Column("char", { name: "nss", unique: true, length: 11 })
  nss: string;

  @Column("char", { name: "registro_patronal", length: 11 })
  registroPatronal: string;

  @Column("date", { name: "fecha_nacimiento" })
  fechaNacimiento: string;

  @Column("varchar", { name: "lugar_nacimiento", length: 50 })
  lugarNacimiento: string;

  @Column("int", { name: "id_nacionalidad" })
  idNacionalidad: number;

  @Column("tinyint", { name: "id_estado_civil" })
  idEstadoCivil: number;

  @Column("int", { name: "id_sucursal" })
  idSucursal: number;

  @Column("int", { name: "id_departamento" })
  idDepartamento: number;

  @Column("int", { name: "id_puesto" })
  idPuesto: number;

  @Column("tinyint", { name: "id_tipo_empleado" })
  idTipoEmpleado: number;

  @Column("tinyint", { name: "id_dias_vacaciones" })
  idDiasVacaciones: number;

  @Column("tinyint", { name: "vacaciones_restantes" })
  vacacionesRestantes: number;

  @Column("char", { name: "estatus", length: 2 })
  estatus: string;

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

  @OneToMany(() => Asistencia, (asistencias) => asistencias.idEmpleado2)
  asistencias: Asistencia[];

  @OneToMany(
    () => AutoEmpleado,
    (autosEmpleados) => autosEmpleados.idEmpleadoResponsable2
  )
  autosEmpleados: AutoEmpleado[];

  @OneToMany(
    () => ContactoBeneficiario,
    (contactosBeneficiarios) => contactosBeneficiarios.idEmpleado2
  )
  contactosBeneficiarios: ContactoBeneficiario[];

  @OneToMany(
    () => ContactoEmergencia,
    (contactosEmergencias) => contactosEmergencias.idEmpleado2
  )
  contactosEmergencias: ContactoEmergencia[];

  @OneToMany(() => Contrato, (contratos) => contratos.idEmpleado2)
  contratos: Contrato[];

  @OneToMany(
    () => DomicilioEmpleado,
    (domiciliosEmpleados) => domiciliosEmpleados.idEmpleado2
  )
  domiciliosEmpleados: DomicilioEmpleado[];

  @ManyToOne(() => Contacto, (contactos) => contactos.empleados, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "id_contacto", referencedColumnName: "idContacto" }])
  idContacto2: Contacto;

  @ManyToOne(
    () => Nacionalidad,
    (nacionalidades) => nacionalidades.empleados,
    { onDelete: "NO ACTION", onUpdate: "NO ACTION" }
  )
  @JoinColumn([
    { name: "id_nacionalidad", referencedColumnName: "idNacionalidad" },
  ])
  idNacionalidad2: Nacionalidad;

  @ManyToOne(
    () => EstadoCivil,
    (estadosCiviles) => estadosCiviles.empleados,
    { onDelete: "NO ACTION", onUpdate: "NO ACTION" }
  )
  @JoinColumn([
    { name: "id_estado_civil", referencedColumnName: "idEstadoCivil" },
  ])
  idEstadoCivil2: EstadoCivil;

  @ManyToOne(() => Sucursal, (sucursales) => sucursales.empleados, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "id_sucursal", referencedColumnName: "idSucursal" }])
  idSucursal2: Sucursal;

  @ManyToOne(() => Departamento, (departamentos) => departamentos.empleados, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([
    { name: "id_departamento", referencedColumnName: "idDepartamento" },
  ])
  idDepartamento2: Departamento;

  @ManyToOne(() => Puesto, (puestos) => puestos.empleados, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "id_puesto", referencedColumnName: "idPuesto" }])
  idPuesto2: Puesto;

  @ManyToOne(
    () => TipoEmpleado,
    (tiposEmpleados) => tiposEmpleados.empleados,
    { onDelete: "NO ACTION", onUpdate: "NO ACTION" }
  )
  @JoinColumn([
    { name: "id_tipo_empleado", referencedColumnName: "idTipoEmpleado" },
  ])
  idTipoEmpleado2: TipoEmpleado;

  @ManyToOne(
    () => DiasVacaciones,
    (diasVacaciones) => diasVacaciones.empleados,
    { onDelete: "NO ACTION", onUpdate: "NO ACTION" }
  )
  @JoinColumn([
    { name: "id_dias_vacaciones", referencedColumnName: "idDiasVacaciones" },
  ])
  idDiasVacaciones2: DiasVacaciones;

  @OneToMany(
    () => LicenciaManejo,
    (licenciasManejo) => licenciasManejo.idEmpleado2
  )
  licenciasManejos: LicenciaManejo[];

  @OneToMany(() => Permiso, (permisos) => permisos.idEmpleado2)
  permisos: Permiso[];

  @OneToMany(() => Permiso, (permisos) => permisos.idEmpleadoAprobacion2)
  permisos2: Permiso[];

  @OneToMany(() => Usuario, (usuarios) => usuarios.idEmpleado2)
  usuarios: Usuario[];
}
