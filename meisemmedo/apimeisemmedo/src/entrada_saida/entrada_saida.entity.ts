export class Entrada_SaidaEntity{
    id:string
    tipe:boolean
    valor:Number
    foto:string

    constructor(id:string, tipe:boolean,valor:Number, foto:string){
    this.id=id;
    this.tipe=tipe;
    this.valor=valor;
    this.foto=foto;
    }
}