import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DomicilioempleadoService } from './domicilioempleado.service';
import { CreateDomicilioempleadoDto } from './dto/create-domicilioempleado.dto';
import { UpdateDomicilioempleadoDto } from './dto/update-domicilioempleado.dto';

@Controller('domicilioempleado')
export class DomicilioempleadoController {
  constructor(private readonly domicilioempleadoService: DomicilioempleadoService) {}

  @Post()
  create(@Body() createDomicilioempleadoDto: CreateDomicilioempleadoDto) {
    return this.domicilioempleadoService.create(createDomicilioempleadoDto);
  }

  @Get()
  findAll() {
    return this.domicilioempleadoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.domicilioempleadoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDomicilioempleadoDto: UpdateDomicilioempleadoDto) {
    return this.domicilioempleadoService.update(+id, updateDomicilioempleadoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.domicilioempleadoService.remove(+id);
  }
}
