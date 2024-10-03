import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DiasvacacionesService } from './diasvacaciones.service';
import { CreateDiasvacacionesDto } from './dto/create-diasvacaciones.dto';
import { UpdateDiasvacacionesDto } from './dto/update-diasvacaciones.dto';

@Controller('diasvacaciones')
export class DiasvacacionesController {
  constructor(private readonly diasvacacionesService: DiasvacacionesService) {}

  @Post()
  create(@Body() createDiasvacacioneDto: CreateDiasvacacionesDto) {
    return this.diasvacacionesService.create(createDiasvacacioneDto);
  }

  @Get()
  findAll() {
    return this.diasvacacionesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.diasvacacionesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDiasvacacioneDto: UpdateDiasvacacionesDto) {
    return this.diasvacacionesService.update(+id, updateDiasvacacioneDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.diasvacacionesService.remove(+id);
  }
}
