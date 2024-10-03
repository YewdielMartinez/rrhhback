import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AsistenciaModule } from './asistencia/asistencia.module';
import { UsuarioModule } from './usuario/usuario.module';
import { TipopermisoModule } from './tipopermiso/tipopermiso.module';
import { TipolicenciamanejoModule } from './tipolicenciamanejo/tipolicenciamanejo.module';
import { TipoempleadoModule } from './tipoempleado/tipoempleado.module';
import { TipocontratoModule } from './tipocontrato/tipocontrato.module';
import { TipoasistenciaModule } from './tipoasistencia/tipoasistencia.module';
import { SucursalModule } from './sucursal/sucursal.module';
import { PuestoModule } from './puesto/puesto.module';
import { PermisoModule } from './permiso/permiso.module';
import { PaisModule } from './pais/pais.module';
import { NacionalidadModule } from './nacionalidad/nacionalidad.module';
import { MunicipioModule } from './municipio/municipio.module';
import { LicenciamanejoModule } from './licenciamanejo/licenciamanejo.module';
import { FrecuenciapagoModule } from './frecuenciapago/frecuenciapago.module';
import { EstadocivilModule } from './estadocivil/estadocivil.module';
import { EstadoModule } from './estado/estado.module';
import { EmpleadoModule } from './empleado/empleado.module';
import { DomicilioempleadoModule } from './domicilioempleado/domicilioempleado.module';
import { DomicilioModule } from './domicilio/domicilio.module';
import { DiasvacacionesModule } from './diasvacaciones/diasvacaciones.module';
import { DepartamentoModule } from './departamento/departamento.module';
import { ContratoModule } from './contrato/contrato.module';
import { ContactoemergenciaModule } from './contactoemergencia/contactoemergencia.module';
import { ContactobeneficiarioModule } from './contactobeneficiario/contactobeneficiario.module';
import { ContactoModule } from './contacto/contacto.module';
import { CiudadModule } from './ciudad/ciudad.module';
import { AutoempleadoModule } from './autoempleado/autoempleado.module';
import { AutoModule } from './auto/auto.module';
import { AutoModule } from './auto/auto.module';
import { AutoempleadoModule } from './autoempleado/autoempleado.module';
import { CiudadModule } from './ciudad/ciudad.module';
import { ContactoModule } from './contacto/contacto.module';
import { ContactobeneficiarioModule } from './contactobeneficiario/contactobeneficiario.module';
import { ContactoemergenciaModule } from './contactoemergencia/contactoemergencia.module';
import { ContratoModule } from './contrato/contrato.module';
import { DepartamentoModule } from './departamento/departamento.module';
import { DiasvacacionesModule } from './diasvacaciones/diasvacaciones.module';
import { AsistenciaModule } from './asistencia/asistencia.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3307,
    username: 'root',
    password: 'root',
    database: 'isback',
    entities: [__dirname+'/**/*.entity{.ts,.js}'], // Importa tus entidades aquí
    synchronize: true, // Solo para desarrollo, crea automáticamente tablas
  }), AsistenciaModule, AutoModule, AutoempleadoModule, CiudadModule, ContactoModule, ContactobeneficiarioModule, ContactoemergenciaModule, ContratoModule, DepartamentoModule, DiasvacacionesModule, DomicilioModule, DomicilioempleadoModule, EmpleadoModule, EstadoModule, EstadocivilModule, FrecuenciapagoModule, LicenciamanejoModule, MunicipioModule, NacionalidadModule, PaisModule, PermisoModule, PuestoModule, SucursalModule, TipoasistenciaModule, TipocontratoModule, TipoempleadoModule, TipolicenciamanejoModule, TipopermisoModule, UsuarioModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
