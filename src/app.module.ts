// src/app.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientesModule } from './clientes/clientes.module';
import { Cliente } from './clientes/entities/cliente.entity';
import * as path from 'path';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: path.join(__dirname, '../database.sqlite'),
      entities: [Cliente],
      migrations: [path.join(__dirname, './migrations/*.ts')],
      synchronize: false,
      logging: false,
    }),
    ClientesModule,
  ],
})
export class AppModule { }
