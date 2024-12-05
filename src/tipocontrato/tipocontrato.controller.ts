import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TipocontratoService } from './tipocontrato.service';
import { CreateTipocontratoDto } from './dto/create-tipocontrato.dto';
import { UpdateTipocontratoDto } from './dto/update-tipocontrato.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Tipo contrato')
@Controller('tipocontrato')
export class TipocontratoController {
  constructor(private readonly tipocontratoService: TipocontratoService) {}

  @Post()
  create(@Body() createTipocontratoDto: CreateTipocontratoDto) {
    return this.tipocontratoService.create(createTipocontratoDto);
  }

  @Get()
  findAll() {
    return this.tipocontratoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tipocontratoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTipocontratoDto: UpdateTipocontratoDto) {
    return this.tipocontratoService.update(+id, updateTipocontratoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tipocontratoService.remove(+id);
  }
}
