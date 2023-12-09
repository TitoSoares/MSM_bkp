import { Module } from "@nestjs/common";
import { UsuariosController } from "./usuarios.controller";
import { UsuariosArmazenados } from "./usuarios.dm";

@Module({
    controllers:[UsuariosController],
    providers:[UsuariosArmazenados]
})
export class UsuariosModule{
    
}