import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ContactobeneficiarioService } from './contactobeneficiario.service';
import { CreateContactobeneficiarioDto } from './dto/create-contactobeneficiario.dto';
import { UpdateContactobeneficiarioDto } from './dto/update-contactobeneficiario.dto';

@Controller('contactobeneficiario')
export class ContactobeneficiarioController {
  constructor(private readonly contactobeneficiarioService: ContactobeneficiarioService) {}

  @Post()
  create(@Body() createContactobeneficiarioDto: CreateContactobeneficiarioDto) {
    return this.contactobeneficiarioService.create(createContactobeneficiarioDto);
  }

  @Get()
  findAll() {
    return this.contactobeneficiarioService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.contactobeneficiarioService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateContactobeneficiarioDto: UpdateContactobeneficiarioDto) {
    return this.contactobeneficiarioService.update(+id, updateContactobeneficiarioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.contactobeneficiarioService.remove(+id);
  }
}
