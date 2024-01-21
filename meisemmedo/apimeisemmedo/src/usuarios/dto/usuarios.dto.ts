import { IsString } from "class-validator";
import { IsEmail, IsNotEmpty, MinLength } from "class-validator/types/decorator/decorators";
import { EmailUnico } from "../validacao/email-unico.validator";

export class CriaUsuariosDTO{
    @IsString()
    @IsNotEmpty({message:"O nome do usuário não pode ser vazio"})
    nome:string

    @IsEmail(undefined,{message:"O e-mail é inválido, tente novamente"})
    @EmailUnico({message:"Já existe esse e-mail cadastrado"})
    email:string

    @IsString()
    cpf:string

    @IsString()
    cnpj:string

    @IsString()
    dataNasc:string

    @MinLength(8,{message:"Senha inválida, tente novamente"})
    senha:string
}