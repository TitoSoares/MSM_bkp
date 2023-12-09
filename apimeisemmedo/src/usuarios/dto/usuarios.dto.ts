import { IsString } from "class-validator";
import { IsEmail, IsNotEmpty, MinLength } from "class-validator/types/decorator/decorators";

export class CriaUsuariosDTO{
    @IsString()
    @IsNotEmpty({message:"Nome do usuário não pode ser vazio"})
    nome:string

    @IsEmail(undefined,{message:"E-mail é inválido, tente novamente"})
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