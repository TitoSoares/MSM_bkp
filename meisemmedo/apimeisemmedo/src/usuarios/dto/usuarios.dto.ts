import { IsString } from "class-validator";
import { EmailUnico } from "../validacao/email-unico.validator";
import { IsNotEmpty } from "class-validator";
import { IsEmail } from "class-validator";
import { MinLength } from "class-validator";
import { SenhaForte } from "../validacao/strongpass.valitor";

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
    @SenhaForte({message:"Senha muito fraca"})
    senha:string
}