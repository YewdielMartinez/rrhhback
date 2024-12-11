import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LicenciamanejoService } from './licenciamanejo.service';
import { CreateLicenciamanejoDto } from './dto/create-licenciamanejo.dto';
import { UpdateLicenciamanejoDto } from './dto/update-licenciamanejo.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Licencia manejo')
@Controller('licenciamanejo')
export class LicenciamanejoController {
  constructor(private readonly licenciamanejoService: LicenciamanejoService) {}

  @Post()
  create(@Body() createLicenciamanejoDto: CreateLicenciamanejoDto) {
    return this.licenciamanejoService.create(createLicenciamanejoDto);
  }

  @Get()
  findAll() {
    return this.licenciamanejoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.licenciamanejoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLicenciamanejoDto: UpdateLicenciamanejoDto) {
    return this.licenciamanejoService.update(+id, updateLicenciamanejoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.licenciamanejoService.remove(+id);
  }
}
