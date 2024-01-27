type Props={
    dados:{
        entrada:string
        saida:string
    }
}
function Relatorio({dados}:Props){
    return(
        <div>
            <td>
                <tr>Entradas:{dados.entrada}</tr> 
                <tr>Saida:{dados.saida}</tr>
            </td>
        </div>
    )
}
export default Relatorio