import { Controller, Post } from "@nestjs/common";
import { Body, Delete, Get, Param, Put } from "@nestjs/common";
import { CriaUsuariosDTO } from "./dto/usuarios.dto";
import { UsuariosEntity } from "./usuario.entity";
import {v4  as uuid} from 'uuid'
import { UsuariosArmazenados } from "./usuarios.dm";
import { AlteraUsuarioDTO } from "./dto/atualizaUsuario.dto";
import { ListaUsuarioDTO } from "./dto/listaUsuario.dto";
import { LoginUsuarioDTO } from "./dto/loginUsuario.dto";

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
                usuario.dataNasc,
                usuario.senha
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
    @Get('/login')
    async Login(@Body() dadosUsuario:LoginUsuarioDTO){
    var login = this.claUsuariosArmazenados.validarLogin(dadosUsuario.email,dadosUsuario.senha)
    return{
        usuario: login[1],
            status: login[1],
            message: login[1] ? "Login efetuado" : "Usuario ou senha inválidos"
        }
    }
}