import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FrecuenciapagoService } from './frecuenciapago.service';
import { CreateFrecuenciapagoDto } from './dto/create-frecuenciapago.dto';
import { UpdateFrecuenciapagoDto } from './dto/update-frecuenciapago.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Frecuencia pago')
@Controller('frecuenciapago')
export class FrecuenciapagoController {
  constructor(private readonly frecuenciapagoService: FrecuenciapagoService) {}

  @Post()
  create(@Body() createFrecuenciapagoDto: CreateFrecuenciapagoDto) {
    return this.frecuenciapagoService.create(createFrecuenciapagoDto);
  }

  @Get()
  findAll() {
    return this.frecuenciapagoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.frecuenciapagoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFrecuenciapagoDto: UpdateFrecuenciapagoDto) {
    return this.frecuenciapagoService.update(+id, updateFrecuenciapagoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.frecuenciapagoService.remove(+id);
  }
}
