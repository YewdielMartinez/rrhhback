import { Module } from '@nestjs/common';
import { SeederService } from './Seeder.service'; 
import { PaisModule } from 'src/pais/pais.module'; 
import { EstadoModule } from 'src/estado/estado.module';
import { MunicipioModule } from 'src/municipio/municipio.module';
import { CiudadModule } from 'src/ciudad/ciudad.module';
import { UsuarioModule } from 'src/usuario/usuario.module';
import { TipoasistenciaModule } from 'src/tipoasistencia/tipoasistencia.module';
import { SeederController } from './Seeder.controller';

@Module({
  imports: [
    PaisModule, 
    EstadoModule, 
    MunicipioModule, 
    CiudadModule, 
    UsuarioModule, 
    TipoasistenciaModule,
  ],
  controllers: [SeederController],
  providers: [SeederService],
  exports: [SeederService], 
})
export class SeederModule {}
