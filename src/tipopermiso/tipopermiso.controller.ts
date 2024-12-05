import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TipopermisoService } from './tipopermiso.service';
import { CreateTipopermisoDto } from './dto/create-tipopermiso.dto';
import { UpdateTipopermisoDto } from './dto/update-tipopermiso.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Tipo permiso')
@Controller('tipopermiso')
export class TipopermisoController {
  constructor(private readonly tipopermisoService: TipopermisoService) {}

  @Post()
  create(@Body() createTipopermisoDto: CreateTipopermisoDto) {
    return this.tipopermisoService.create(createTipopermisoDto);
  }

  @Get()
  findAll() {
    return this.tipopermisoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tipopermisoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTipopermisoDto: UpdateTipopermisoDto) {
    return this.tipopermisoService.update(+id, updateTipopermisoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tipopermisoService.remove(+id);
  }
}
