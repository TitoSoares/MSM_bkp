import { Controller, Post } from "@nestjs/common";
import { Body, Delete, Get, Param, Put } from "@nestjs/common/decorators";
import { CriaUsuariosDTO } from "./dto/usuarios.dto";
import { UsuariosEntity } from "./usuario.entity";
import {v4  as uuid} from 'uuid'
import { UsuariosArmazenados } from "./usuarios.dm";
import { AlteraUsuarioDTO } from "./dto/atualizaUsuario.dto";
import { get } from "http";
import { ListaUsuarioDTO } from "./dto/listaUsuario.dto";

@Controller('/usuarios')
export class UsuariosController{
    constructor(private claUsuariosArmazenados:UsuariosArmazenados){
        
    }
    @Post()
    async criaUsuario(@Body() dadosUsuarios:CriaUsuariosDTO){
        var usuarios=new UsuariosEntity(uuid(),dadosUsuarios.nome,dadosUsuarios.email,dadosUsuarios.cpf,dadosUsuarios.cnpj,dadosUsuarios.dataNasc,dadosUsuarios.senha)
        this.claUsuariosArmazenados.AdicionarUsuarios(usuarios)
        var retorno={
            id:usuarios.id,
            message:"Usuario Criado"
        }
        return retorno
    }

    @Put("/:id")
    async atualizaUsuario(@Param('id') id:string,@Body() novosDados:AlteraUsuarioDTO){
        const usuarioAtualizado=await this.claUsuariosArmazenados.atualizaUsuario(id, novosDados)
        return{
            usuario:usuarioAtualizado,
            message:"Usuáio atulizado"
        }   
    }
    @Get()
    async RetornoUsuarios(){
        const usuariosListados=await this.claUsuariosArmazenados.Usuarios;
        const listaRetorno=usuariosListados.map(
            usuario=> new ListaUsuarioDTO(
                usuario.id,
                usuario.nome,
                usuario.email,
                usuario.cpf,
                usuario.cnpj,
                usuario.dataNasc
            )
        )
        return listaRetorno
    }
    @Delete('/:id')
    async removeUsuario(@Param("id")id:string){
        const usuarioRemovido=await this.claUsuariosArmazenados.removeUsuario(id)
        return{
            usuario:usuarioRemovido,
            message:"Usuário removido"
        }
    }
}