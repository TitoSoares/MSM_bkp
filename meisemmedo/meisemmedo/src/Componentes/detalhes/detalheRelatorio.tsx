type Props={
    dados:{
        entrada:string
        saida:string
    }
}
function Relatorio({dados}:Props){
    return(
        <div>
            <div>Entradas:{dados.entrada} Saida:{dados.saida}</div>
        </div>
    )
}
export default Relatorio