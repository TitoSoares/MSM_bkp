export class UsuariosEntity{
    id:string
    nome:string
    email:string
    cpf:string
    cnpj:string
    dataNasc:string
    senha:string

    constructor(id:string,nome:string,email:string,cpf:string,cnpj:string,dataNasc:string,senha:string){
    this.id=id;
    this.nome=nome;
    this.email=email
    this.cpf=cpf
    this.cnpj=cnpj
    this.dataNasc=dataNasc
    this.senha=senha
    }
}