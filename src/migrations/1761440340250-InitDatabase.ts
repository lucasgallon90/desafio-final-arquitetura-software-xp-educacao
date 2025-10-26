import { MigrationInterface, QueryRunner } from "typeorm";

export class InitDatabase1761440340250 implements MigrationInterface {
    name = 'InitDatabase1761440340250'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "clientes" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "nome" varchar(150) NOT NULL, "email" varchar(150), "telefone" varchar(11), "endereco" varchar(150), "bairro" varchar(150), "numeroEndereco" varchar(150), "complemento" varchar(150), "celular" varchar(11), "dataNascimento" datetime, "nomeFantasia" varchar(150), "cnpjCpf" varchar(14), "cidade" varchar(150), "uf" varchar(2), "pais" varchar(100))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "clientes"`);
    }

}
