import { IsString } from "class-validator";
import { EmailUnico } from "../validacao/email-unico.validator";
import { IsNotEmpty } from "class-validator/types/decorator/common/IsNotEmpty";
import { IsEmail } from "class-validator/types/decorator/string/IsEmail";
import { MinLength } from "class-validator/types/decorator/string/MinLength";

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