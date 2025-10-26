# Bootcamp Arquiteto(a) de Software — Desafio Final  - API RESTful com NestJS — Arquitetura MVC
# Nome do aluno: Lucas Gallon
---

## Objetivo do Projeto
Este projeto foi desenvolvido como entrega do Desafio Final do Bootcamp **Arquiteto(a) de Software**, com os seguintes propósitos:

- Criar uma API REST no padrão arquitetural **MVC**  
- Expor endpoints públicos para CRUD de um domínio  
- Implementar contagem total, busca por ID e busca por nome  
- Aplicar boas práticas de arquitetura e organização de software  
- Inclusão de persistência com **TypeORM + SQLite**

O domínio escolhido para o desafio foi **Cliente**.

---

## Arquitetura da Aplicação

- Arquitetura **MVC**
- NestJS como framework
- Modularização por domínio
- Persistência utilizando **TypeORM**
- Entidades mapeadas para o banco via ORM

---

## Passo a passo para rodar a aplicação

## 1. Clonar o projeto

```bash
git clone https://github.com/lucasgallon90/desafio-final-arquitetura-software-xp-educacao.git
cd bootcamp-arquiteto-software
```

## 2. Instalar dependências
npm install

## 3. Configurar o banco de dados (SQLite)

No arquivo src/data-source.ts, configure o caminho do arquivo do banco

O arquivo database.sqlite será criado automaticamente na raiz do projeto ao rodar as migrations.

## 4. Gerar ou criar migrations

Para gerar uma migration automática (comparando entidades com o banco):

npm run migration:generate

Para criar uma migration vazia e escrever manualmente:

npm run migration:create

## 5. Rodar migrations

Para aplicar todas as migrations pendentes no banco:

npm run migration:run

Esse comando também pode ser incluído antes do start para rodar automaticamente.

## 6. Rodar a aplicação

Em desenvolvimento (com hot reload):

npm run start:dev

## 7. Em produção (após build):

npm run build
npm run start:prod

## 8. Opcional - Rodar a aplicação em modo de desenvolvimento:

npm run start:dev

## 9. Scripts úteis
npm run build	Compila o NestJS para a pasta dist/
npm run format	Formata o código com Prettier
npm run lint	Rodar ESLint e corrigir problemas automaticamente
npm run migration:generate	Gera uma migration automática
npm run migration:create	Cria uma migration vazia
npm run migration:run	Aplica as migrations no banco
npm run start:dev	Roda a aplicação em modo desenvolvimento
npm run start:prod	Roda a aplicação em produção
