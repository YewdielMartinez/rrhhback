import { Module } from '@nestjs/common';
import { PaisService } from 'src/pais/pais.service'; // Importa solo el servicio
import { EstadoService } from 'src/estado/estado.service';
import { MunicipioService } from 'src/municipio/municipio.service';
import { CiudadService } from 'src/ciudad/ciudad.service';
import { UsuarioService } from 'src/usuario/usuario.service';
import { SeederService } from './seeder.service'; // El servicio del Seeder
import { TipoasistenciaService } from 'src/tipoasistencia/tipoasistencia.service';

@Module({
  imports: [
    // Si necesitas entidades, agrégalas aquí
    // TypeOrmModule.forFeature([]),
  ],
  providers: [
    SeederService, // El SeederService
    PaisService, // El servicio de Pais
    EstadoService, // El servicio de Estado
    MunicipioService, // El servicio de Municipio
    CiudadService, // El servicio de Ciudad
    UsuarioService, // El servicio de Usuario
    TipoasistenciaService, // El servicio de TipoAsistencia
  ],
  exports: [SeederService], // Exportamos el SeederService por si lo necesitas en otros módulos
})
export class SeederModule {}
