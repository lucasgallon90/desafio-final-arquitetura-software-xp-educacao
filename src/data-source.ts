import { DataSource } from 'typeorm';
import { Cliente } from './clientes/entities/cliente.entity';

export const AppDataSource = new DataSource({
  type: 'sqlite',
  database: 'database.sqlite',
  entities: [Cliente],
  migrations: ['./src/migrations/*.ts'],
  synchronize: false,
});
