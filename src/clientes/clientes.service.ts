import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Like } from 'typeorm';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { Cliente } from './entities/cliente.entity';

@Injectable()
export class ClientesService {
  constructor(
    @InjectRepository(Cliente)
    private readonly repo: Repository<Cliente>,
  ) { }

  async create(dto: CreateClienteDto): Promise<Cliente> {
    const cliente = this.repo.create(dto);
    return this.repo.save(cliente);
  }

  findAll(): Promise<Cliente[]> {
    return this.repo.find();
  }

  async findById(id: number): Promise<Cliente> {
    const c = await this.repo.findOne({ where: { id } });
    if (!c) throw new NotFoundException(`Cliente com id ${id} não encontrado`);
    return c;
  }

  findByName(nome: string): Promise<Cliente[]> {
    // case-insensitive parcial
    return this.repo.find({ where: { nome: Like(`%${nome}%`) } });
  }

  async update(id: number, dto: UpdateClienteDto): Promise<Cliente> {
    const cliente = await this.findById(id);
    Object.assign(cliente, dto);
    return this.repo.save(cliente);
  }

  async remove(id: number): Promise<void> {
    const res = await this.repo.delete(id);
    if (res.affected === 0) throw new NotFoundException(`Cliente com id ${id} não encontrado`);
  }

  async count(): Promise<number> {
    return this.repo.count();
  }
}
