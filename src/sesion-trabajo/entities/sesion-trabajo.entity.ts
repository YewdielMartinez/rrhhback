import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  Index,
} from 'typeorm';
import { Usuario } from 'src/usuario/entities/Usuario.entity';

@Entity('sesiones_trabajo', { schema: 'bdrrhh' })
export class SesionTrabajo {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id_sesion_trabajo' })
  idSesionTrabajo: number;

  @Column('varchar', { name: 'sesion_token', length: 30 })
  sesionToken: string;

  @Column('timestamp', {
    name: 'create_date',
    nullable: true,
    default: () => 'CURRENT_TIMESTAMP',
  })
  createDate: Date | null;

  @Column('timestamp', {
    name: 'finalized_date',
    nullable: true,
  })
  finalizedDate: Date;

  @Index() // Crea un índice en la columna id_usuario
  @Column('int', { name: 'id_usuario' })
  idUsuario: number;

  @ManyToOne(() => Usuario, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  @JoinColumn({ name: 'id_usuario' }) // Vincula esta columna como clave foránea
  usuario?: Usuario; // Opcional: no necesitas siempre cargar el objeto completo
}
