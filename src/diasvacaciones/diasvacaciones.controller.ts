import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DiasvacacionesService } from './diasvacaciones.service';
import { CreateDiasvacacioneDto } from './dto/create-diasvacacione.dto';
import { UpdateDiasvacacioneDto } from './dto/update-diasvacacione.dto';

@Controller('diasvacaciones')
export class DiasvacacionesController {
  constructor(private readonly diasvacacionesService: DiasvacacionesService) {}

  @Post()
  create(@Body() createDiasvacacioneDto: CreateDiasvacacioneDto) {
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
  update(@Param('id') id: string, @Body() updateDiasvacacioneDto: UpdateDiasvacacioneDto) {
    return this.diasvacacionesService.update(+id, updateDiasvacacioneDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.diasvacacionesService.remove(+id);
  }
}
