import { Injectable } from "@nestjs/common";
import { ValidationArguments, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";
import { UsuariosArmazenados } from "../usuarios.dm";

@Injectable()
@ValidatorConstraint({async:true})

export class EmailUnicoValidator implements ValidatorConstraintInterface{
    constructor(private clsUsuariosArmazenados:UsuariosArmazenados){

    }
    async validate(value:any,validationArguments?:ValidationArguments):Promise<boolean>{
        const validarEmail=await this.clsUsuariosArmazenados.ValidaEmail(value)
        return !validarEmail
    }
}