import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'clientes' })
export class Cliente {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 150 })
  nome: string;

  @Column({ length: 150, nullable: true })
  email?: string;

  @Column({ nullable: true, length: 11 })
  telefone?: string;

  @Column({ nullable: true, length: 150 })
  endereco?: string;

  @Column({ nullable: true, length: 150 })
  bairro?: string;

  @Column({ nullable: true, length: 150})
  numeroEndereco?: string;

  @Column({ nullable: true, length: 150 })
  complemento?: string;

  @Column({ nullable: true, length: 11 })
  celular?: string;

  @Column({ nullable: true })
  dataNascimento?: Date;

  @Column({ nullable: true, length: 150 })
  nomeFantasia?: string;

  @Column({ nullable: true, length: 14 })
  cnpjCpf?: string;

  @Column({ nullable: true, length: 150 })
  cidade?: string;

  @Column({ nullable: true, length: 2 })
  uf?: string;

  @Column({ nullable: true, length: 100})
  pais?: string;
}
