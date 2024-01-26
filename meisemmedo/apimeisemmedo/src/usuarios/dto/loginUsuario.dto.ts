import { IsEmail, MinLength } from "class-validator";

export class LoginUsuarioDTO{

    @IsEmail(undefined,{message:"O email cadastrado é inválido"})
    email: string;

    @MinLength(8,{message: "Senha é inválida ou Incorreta!"})
    senha: string; 
}