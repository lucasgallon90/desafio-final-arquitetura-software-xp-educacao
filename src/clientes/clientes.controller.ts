import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ClientesService } from './clientes.service';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';

@Controller('clientes')
export class ClientesController {
  constructor(private readonly clientesService: ClientesService) {}

  @Post()
  create(@Body() dto: CreateClienteDto) {
    return this.clientesService.create(dto);
  }

  @Get()
  findAll() {
    return this.clientesService.findAll();
  }

  @Get('contar')
  count() {
    return this.clientesService.count();
  }

  @Get('nome/:nome')
  findByName(@Param('nome') nome: string) {
    return this.clientesService.findByName(nome);
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.clientesService.findById(Number(id));
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: UpdateClienteDto) {
    return this.clientesService.update(Number(id), dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.clientesService.remove(Number(id));
  }
}
