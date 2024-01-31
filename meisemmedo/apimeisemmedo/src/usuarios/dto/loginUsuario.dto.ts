import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, MinLength } from "class-validator";

export class LoginUsuarioDTO{
    @ApiProperty({
        example:"vitor.iac20166@gmail.com",
        description:"O email é essencial para logar no login"
    })
    @IsEmail(undefined,{message:"O email cadastrado é inválido"})
    email: string;

    @ApiProperty({
        example:"Senh@l58#7",
        description:"A senha é essencial para logar no login"
    })
    @MinLength(8,{message: "Senha é inválida ou Incorreta!"})
    senha: string; 
}