import { Controller, Post } from "@nestjs/common";
import { Body } from "@nestjs/common/decorators";
import { UsuariosArmazenados } from "./usuarios.dm";

@Controller('/usuarios')
export class UsuariosController{
    constructor(private claUsuariosArmazenados:UsuariosArmazenados){
        
    }
    @Post()
    async criaUsuario(@Body() dadosUsuarios){
        var usuarios={
            dadosUsuarios,
            status:"Usuário criado"
        }
        return dadosUsuarios
    }
}