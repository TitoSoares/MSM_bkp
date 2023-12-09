import { Injectable } from "@nestjs/common";
import { UsuariosEntity } from "./usuario.entity";

@Injectable()
export class UsuariosArmazenados{
    #usuarios=[]
/*AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA */
    async adicionarUsuarios(usuarios:UsuariosEntity){
        this.#usuarios.push(usuarios)
    }
    async Usuarios(){
        return this.#usuarios
    }
    async ValidaEmail(email:string){
        const possivelUsuario=this.#usuarios.find(
            usuarios=>usuarios.email===email
        )
        return (possivelUsuario !==undefined)
    }
}