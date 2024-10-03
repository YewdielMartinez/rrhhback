import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { NacionalidadService } from './nacionalidad.service';
import { CreateNacionalidadDto } from './dto/create-nacionalidad.dto';
import { UpdateNacionalidadDto } from './dto/update-nacionalidad.dto';

@Controller('nacionalidad')
export class NacionalidadController {
  constructor(private readonly nacionalidadService: NacionalidadService) {}

  @Post()
  create(@Body() createNacionalidadDto: CreateNacionalidadDto) {
    return this.nacionalidadService.create(createNacionalidadDto);
  }

  @Get()
  findAll() {
    return this.nacionalidadService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.nacionalidadService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNacionalidadDto: UpdateNacionalidadDto) {
    return this.nacionalidadService.update(+id, updateNacionalidadDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.nacionalidadService.remove(+id);
  }
}
