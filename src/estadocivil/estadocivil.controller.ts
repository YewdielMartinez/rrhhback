import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EstadocivilService } from './estadocivil.service';
import { CreateEstadocivilDto } from './dto/create-estadocivil.dto';
import { UpdateEstadocivilDto } from './dto/update-estadocivil.dto';

@Controller('estadocivil')
export class EstadocivilController {
  constructor(private readonly estadocivilService: EstadocivilService) {}

  @Post()
  create(@Body() createEstadocivilDto: CreateEstadocivilDto) {
    return this.estadocivilService.create(createEstadocivilDto);
  }

  @Get()
  findAll() {
    return this.estadocivilService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.estadocivilService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEstadocivilDto: UpdateEstadocivilDto) {
    return this.estadocivilService.update(+id, updateEstadocivilDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.estadocivilService.remove(+id);
  }
}
