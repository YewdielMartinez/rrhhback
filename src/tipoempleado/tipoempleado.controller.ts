import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TipoempleadoService } from './tipoempleado.service';
import { CreateTipoempleadoDto } from './dto/create-tipoempleado.dto';
import { UpdateTipoempleadoDto } from './dto/update-tipoempleado.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Tipo empleado')
@Controller('tipoempleado')
export class TipoempleadoController {
  constructor(private readonly tipoempleadoService: TipoempleadoService) {}

  @Post()
  create(@Body() createTipoempleadoDto: CreateTipoempleadoDto) {
    return this.tipoempleadoService.create(createTipoempleadoDto);
  }

  @Get()
  findAll() {
    return this.tipoempleadoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tipoempleadoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTipoempleadoDto: UpdateTipoempleadoDto) {
    return this.tipoempleadoService.update(+id, updateTipoempleadoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tipoempleadoService.remove(+id);
  }
}
