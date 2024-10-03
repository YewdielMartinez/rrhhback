import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ContactoemergenciaService } from './contactoemergencia.service';
import { CreateContactoemergenciaDto } from './dto/create-contactoemergencia.dto';
import { UpdateContactoemergenciaDto } from './dto/update-contactoemergencia.dto';

@Controller('contactoemergencia')
export class ContactoemergenciaController {
  constructor(private readonly contactoemergenciaService: ContactoemergenciaService) {}

  @Post()
  create(@Body() createContactoemergenciaDto: CreateContactoemergenciaDto) {
    return this.contactoemergenciaService.create(createContactoemergenciaDto);
  }

  @Get()
  findAll() {
    return this.contactoemergenciaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.contactoemergenciaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateContactoemergenciaDto: UpdateContactoemergenciaDto) {
    return this.contactoemergenciaService.update(+id, updateContactoemergenciaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.contactoemergenciaService.remove(+id);
  }
}
