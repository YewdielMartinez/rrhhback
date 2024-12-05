import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TipoasistenciaService } from './tipoasistencia.service';
import { CreateTipoasistenciaDto } from './dto/create-tipoasistencia.dto';
import { UpdateTipoasistenciaDto } from './dto/update-tipoasistencia.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Tipo asistencia')
@Controller('tipoasistencia')
export class TipoasistenciaController {
  constructor(private readonly tipoasistenciaService: TipoasistenciaService) {}

  @Post()
  create(@Body() createTipoasistenciaDto: CreateTipoasistenciaDto) {
    return this.tipoasistenciaService.create(createTipoasistenciaDto);
  }

  @Get()
  findAll() {
    return this.tipoasistenciaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tipoasistenciaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTipoasistenciaDto: UpdateTipoasistenciaDto) {
    return this.tipoasistenciaService.update(+id, updateTipoasistenciaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tipoasistenciaService.remove(+id);
  }
}
