import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { AutoempleadoService } from './autoempleado.service';
import { CreateAutoempleadoDto } from './dto/create-autoempleado.dto';
import { UpdateAutoempleadoDto } from './dto/update-autoempleado.dto';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

@ApiTags('Auto-empleado')
@Controller('autoempleado')
export class AutoempleadoController {
  constructor(private readonly autoempleadoService: AutoempleadoService) {}

  @Post()
  create(@Body() createAutoempleadoDto: CreateAutoempleadoDto) {
    return this.autoempleadoService.create(createAutoempleadoDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get()
  findAll() {
    return this.autoempleadoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.autoempleadoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAutoempleadoDto: UpdateAutoempleadoDto) {
    return this.autoempleadoService.update(+id, updateAutoempleadoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.autoempleadoService.remove(+id);
  }
}
