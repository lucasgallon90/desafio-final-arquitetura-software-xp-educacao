import {
    IsDateString,
    IsEmail,
    IsNotEmpty,
    IsOptional,
    IsString,
    MaxLength,
} from 'class-validator';

export class CreateClienteDto {
    @IsNotEmpty()
    @IsString()
    @MaxLength(150)
    nome: string;

    @IsOptional()
    @IsEmail()
    @MaxLength(150)
    email?: string;

    @IsOptional()
    @IsString()
    @MaxLength(11)
    telefone?: string;

    @IsOptional()
    @IsString()
    @MaxLength(150)
    endereco?: string;

    @IsOptional()
    @IsString()
    @MaxLength(150)
    bairro?: string;

    @IsOptional()
    @IsString()
    @MaxLength(150)
    numeroEndereco?: string;

    @IsOptional()
    @IsString()
    @MaxLength(150)
    complemento?: string;

    @IsOptional()
    @IsString()
    @MaxLength(11)
    celular?: string;

    @IsOptional()
    @IsDateString()
    dataNascimento?: Date;

    @IsOptional()
    @IsString()
    @MaxLength(150)
    nomeFantasia?: string;

    @IsOptional()
    @IsString()
    @MaxLength(14)
    cnpjCpf?: string;

    @IsOptional()
    @IsString()
    @MaxLength(150)
    cidade?: string;

    @IsOptional()
    @IsString()
    @MaxLength(2)
    uf?: string;

    @IsOptional()
    @IsString()
    @MaxLength(100)
    pais?: string;
}
