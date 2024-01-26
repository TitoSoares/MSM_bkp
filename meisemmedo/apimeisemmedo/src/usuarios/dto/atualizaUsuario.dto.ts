import { IsEmail, IsNotEmpty, IsOptional, IsString, MinLength } from "class-validator";
import { EmailUnico } from "../validacao/email-unico.validator";
import { SenhaForte } from "../validacao/strongpass.valitor";

export class AlteraUsuarioDTO{
    @IsString()
    @IsNotEmpty({message:"O nome não pode ser vazio"})
    @IsOptional()
    nome:string

    @IsEmail(undefined,{message:"O email está inválido"})
    @EmailUnico({message:"O email informado já existe"})
    @IsOptional()
    email:string

    @IsString()
    @IsOptional()
    cpf:string

    @IsString()
    @IsOptional()
    cnpj:string

    @IsString()
    @IsOptional()
    dataNasc:string

    @MinLength(8,{message: "Senha precisa de pelo menos 8 caracteres"})
    @IsOptional()
    @SenhaForte({message:"Senha muito fraca"})
    senha:string
}   