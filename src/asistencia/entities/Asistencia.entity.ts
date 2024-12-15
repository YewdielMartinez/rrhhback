import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Empleado } from 'src/empleado/entities/Empleado.entity';
import { TipoAsistencia } from 'src/tipoasistencia/entities/TipoAsistencia.entity';
import { SesionTrabajo } from 'src/sesion-trabajo/entities/sesion-trabajo.entity';

@Index('id_empleado', ['idEmpleado'], {})
@Index('id_tipo_asistencia', ['idTipoAsistencia'], {})
@Index('id_sesion_trabajo', ['idSesionTrabajo'], {}) // Índice para la relación con SesionTrabajo
@Entity('asistencias', { schema: 'bdrrhh' })
export class Asistencia {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id_asistencia' })
  idAsistencia: number;

  @Column('int', { name: 'id_empleado' })
  idEmpleado: number;

  @Column('tinyint', { name: 'id_tipo_asistencia' })
  idTipoAsistencia: number;

  @Column('int', { name: 'id_sesion_trabajo', nullable: true }) // Nueva columna para la relación con SesionTrabajo
  idSesionTrabajo: number | null;

  @Column('timestamp', {
    name: 'asistencia_inicio',
    nullable: true,
    default: () => 'CURRENT_TIMESTAMP',
  })
  asistenciaInicio: Date | null;

  @Column('timestamp', {
    name: 'asistencia_fin',
    nullable: true,
  })
  asistenciaFin: Date | null;

  @Column('timestamp', {
    name: 'create_date',
    nullable: true,
    default: () => 'CURRENT_TIMESTAMP',
  })
  createDate: Date | null;

  @Column('timestamp', {
    name: 'update_date',
    nullable: true,
    default: () => 'CURRENT_TIMESTAMP',
  })
  updateDate: Date | null;

  @ManyToOne(() => Empleado, (empleados) => empleados.asistencias, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn([{ name: 'id_empleado', referencedColumnName: 'idEmpleado' }])
  idEmpleado2: Empleado;

  @ManyToOne(
    () => TipoAsistencia,
    (tiposAsistencias) => tiposAsistencias.asistencias,
    { onDelete: 'NO ACTION', onUpdate: 'NO ACTION' },
  )
  @JoinColumn([
    { name: 'id_tipo_asistencia', referencedColumnName: 'idTipoAsistencia' },
  ])
  idTipoAsistencia2: TipoAsistencia;

  @ManyToOne(
    () => SesionTrabajo,
    (sesionTrabajo) => sesionTrabajo.idSesionTrabajo,
    { onDelete: 'SET NULL', onUpdate: 'CASCADE' }, // Configura las opciones de eliminación/actualización
  )
  @JoinColumn([{ name: 'id_sesion_trabajo', referencedColumnName: 'idSesionTrabajo' }]) // Configura la columna de unión
  sesionTrabajo: SesionTrabajo | null;
}
