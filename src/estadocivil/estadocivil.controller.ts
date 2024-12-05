import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EstadocivileService } from './estadocivil.service';
import { CreateEstadocivilDto } from './dto/create-estadocivil.dto';
import { UpdateEstadocivilDto } from './dto/update-estadocivil.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Estado civil')
@Controller('estadocivil')
export class EstadocivilController {
  constructor(private readonly estadocivileService: EstadocivileService) {}

  @Post()
  create(@Body() createEstadocivileDto: CreateEstadocivilDto) {
    return this.estadocivileService.create(createEstadocivileDto);
  }

  @Get()
  findAll() {
    return this.estadocivileService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.estadocivileService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEstadocivileDto: UpdateEstadocivilDto) {
    return this.estadocivileService.update(+id, updateEstadocivileDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.estadocivileService.remove(+id);
  }
}
