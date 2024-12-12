import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateSesionTrabajoDto } from './dto/create-sesion-trabajo.dto';
import { UpdateSesionTrabajoDto } from './dto/update-sesion-trabajo.dto';
import { SesionTrabajo } from './entities/sesion-trabajo.entity';
import { SesionTrabajoService } from './sesion-trabajo.service';

@ApiTags('sesion trabajo')
@Controller('sesion-trabajo')
export class SesionTrabajoController {
  constructor(private readonly sesionTrabajoService: SesionTrabajoService) {}

  @Post()
  create(@Body() createSesionTrabajoDto: CreateSesionTrabajoDto) {
    return this.sesionTrabajoService.create(createSesionTrabajoDto);
  }

  @Get()
  findAll() {
    return this.sesionTrabajoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sesionTrabajoService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateSesionTrabajoDto: UpdateSesionTrabajoDto,
  ) {
    return this.sesionTrabajoService.update(+id, updateSesionTrabajoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sesionTrabajoService.remove(+id);
  }

  // Endpoint para finalizar sesión de trabajo
  @Patch(':id/finalizar')
  async finalizarSesion(
    @Param('id') idSesionTrabajo: number,
  ): Promise<SesionTrabajo> {
    return this.sesionTrabajoService.finalizarSesion(idSesionTrabajo);
  }

  // Endpoint para obtener sesión por sesionToken
  @Get('token/:sesionToken')
  async getBySesionToken(
    @Param('sesionToken') sesionToken: string,
  ): Promise<SesionTrabajo> {
    return this.sesionTrabajoService.getBySesionToken(sesionToken);
  }

  // Endpoint para obtener todas las sesiones por id_usuario
  @Get('usuario/:idUsuario')
  async getAllByIdUsuario(
    @Param('idUsuario') idUsuario: number,
  ): Promise<SesionTrabajo[]> {
    return this.sesionTrabajoService.getAllByIdUsuario(idUsuario);
  }
}
