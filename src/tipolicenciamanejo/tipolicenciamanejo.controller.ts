import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TipolicenciamanejoService } from './tipolicenciamanejo.service';
import { CreateTipolicenciamanejoDto } from './dto/create-tipolicenciamanejo.dto';
import { UpdateTipolicenciamanejoDto } from './dto/update-tipolicenciamanejo.dto';

@Controller('tipolicenciamanejo')
export class TipolicenciamanejoController {
  constructor(private readonly tipolicenciamanejoService: TipolicenciamanejoService) {}

  @Post()
  create(@Body() createTipolicenciamanejoDto: CreateTipolicenciamanejoDto) {
    return this.tipolicenciamanejoService.create(createTipolicenciamanejoDto);
  }

  @Get()
  findAll() {
    return this.tipolicenciamanejoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tipolicenciamanejoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTipolicenciamanejoDto: UpdateTipolicenciamanejoDto) {
    return this.tipolicenciamanejoService.update(+id, updateTipolicenciamanejoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tipolicenciamanejoService.remove(+id);
  }
}
