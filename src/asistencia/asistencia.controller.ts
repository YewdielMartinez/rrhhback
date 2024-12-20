import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { AsistenciaService } from './asistencia.service';
import { CreateAsistenciaDto } from './dto/create-asistencia.dto';
import { UpdateAsistenciaDto } from './dto/update-asistencia.dto';
import { ApiTags } from '@nestjs/swagger';
import { FinalizarAsistenciaDto } from './dto/finalizar-asistencia.dto';

@ApiTags('Asistencia')
@Controller('asistencia')
export class AsistenciaController {
  constructor(private readonly asistenciaService: AsistenciaService) {}

  @Post()
  create(@Body() createAsistenciaDto: CreateAsistenciaDto) {
    return this.asistenciaService.create(createAsistenciaDto);
  }

  @Get()
  findAll() {
    return this.asistenciaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.asistenciaService.findOne(+id);
  }

  @Get('byEmpleado/:id')
  findByEmpleado(@Param('id') id: string) {
    return this.asistenciaService.findByEmpleado(+id);
  }

  @Get('bySesionTrabajo/:id')
  findBySesionTrabajo(@Param('id') id: string) {
    return this.asistenciaService.findBySesionTrabajo(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAsistenciaDto: UpdateAsistenciaDto,
  ) {
    return this.asistenciaService.update(+id, updateAsistenciaDto);
  }

  @Patch('finalziarAsistencia/:id')
  updateAsistenciaFin(
    @Param('id') id: string,
    @Body() finalizarAsistenciaDto: FinalizarAsistenciaDto,
  ) {
    return this.asistenciaService.finalizarAsistencia(
      +id,
      finalizarAsistenciaDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.asistenciaService.remove(+id);
  }
}
