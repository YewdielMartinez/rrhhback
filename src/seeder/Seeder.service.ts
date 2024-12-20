import { Injectable } from '@nestjs/common';
import { PaisService } from 'src/pais/pais.service';
import { EstadoService } from 'src/estado/estado.service';
import { MunicipioService } from 'src/municipio/municipio.service';
import { CiudadService } from 'src/ciudad/ciudad.service';
import { UsuarioService } from 'src/usuario/usuario.service';
import { CreatePaisDto } from 'src/pais/dto/create-pais.dto';
import { CreateEstadoDto } from 'src/estado/dto/create-estado.dto';
import { CreateMunicipioDto } from 'src/municipio/dto/create-municipio.dto';
import { CreateCiudadDto } from 'src/ciudad/dto/create-ciudad.dto';
import { CreateUsuarioDto } from 'src/usuario/dto/create-usuario.dto';
import { CreateTipoasistenciaDto } from 'src/tipoasistencia/dto/create-tipoasistencia.dto';
import { TipoasistenciaService } from 'src/tipoasistencia/tipoasistencia.service';

@Injectable()
export class SeederService {
  constructor(
    private readonly paisService: PaisService,
    private readonly estadoService: EstadoService,
    private readonly municipioService: MunicipioService,
    private readonly ciudadService: CiudadService,
    private readonly usuarioService: UsuarioService,
    private readonly tipoAsistenciaService: TipoasistenciaService,
  ) {}

  async runSeed() {
    try {
      // 1. Crear Pais si no existe
      const paisExists = await this.paisService.findAll();
      if (paisExists.length === 0) {
        const pais: CreatePaisDto = {
          idPais: 1,
          nombre: 'México',
        };
        await this.paisService.create(pais);
        console.log('País creado: México');
      }

      // 2. Crear Estado si no existe
      const estadoExists = await this.estadoService.findAll();
      if (estadoExists.length === 0) {
        const estado: CreateEstadoDto = {
          idEstado: 1,
          nombre: 'Sinaloa',
          idPais: 1, // Asegúrate de que el país con id 1 existe
        };
        await this.estadoService.create(estado);
        console.log('Estado creado: Sinaloa');
      }

      // 3. Crear Municipio si no existe
      const municipioExists = await this.municipioService.findAll();
      if (municipioExists.length === 0) {
        const municipio: CreateMunicipioDto = {
          idMunicipio: 1,
          nombre: 'Los Mochis',
          idPais: 1, // Asegúrate de que el país con id 1 existe
          idEstado: 1, // Asegúrate de que el estado con id 1 existe
        };
        await this.municipioService.create(municipio);
        console.log('Municipio creado: Los Mochis');
      }

      // 4. Crear Ciudad si no existe
      const ciudadExists = await this.ciudadService.findAll();
      if (ciudadExists.length === 0) {
        const ciudad: CreateCiudadDto = {
          idCiudad: 1,
          nombre: 'Los Mochis',
          idPais: 1, // Asegúrate de que el país con id 1 existe
          idEstado: 1, // Asegúrate de que el estado con id 1 existe
          idMunicipio: 1, // Asegúrate de que el municipio con id 1 existe
        };
        await this.ciudadService.create(ciudad);
        console.log('Ciudad creada: Los Mochis');
      }

      // 5. Crear Usuario por defecto si no existe
      const usuarioExists = await this.usuarioService.findAll();
      if (usuarioExists.length === 0) {
        const defaultUser: CreateUsuarioDto = {
          nombreUsuario: 'admin',
          correo: 'admin@empresa.com',
          password: 'admin123',
          idEmpleado: null,
          idUsuarioPadre: 0,
        };

        // Guarda el usuario por defecto
        await this.usuarioService.create(defaultUser);
        console.log('Usuario por defecto creado');
      }

      // 6. Tipo de asistencia por defecto
      const tipoAsistenciaExists = await this.tipoAsistenciaService.findAll();
      if (tipoAsistenciaExists.length === 0) {
        const tipoAsistencia: CreateTipoasistenciaDto = {
          nombreAsistencia: 'Presencial',
        };
        await this.tipoAsistenciaService.create(tipoAsistencia);
        console.log('Tipo de asistencia por defecto creado');
      }
    } catch (error) {
      console.error('Error al crear los datos por defecto:', error);
    }
  }
}
