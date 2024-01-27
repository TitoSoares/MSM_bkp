type Props={
    dados:{
        id:string
        entrada:string
        saida:string
        liquido:string
    }
}

function DetalheEntradaSaida({dados}: Props){
    return(
        <div className="lista">
            <td>
                <tr>ID:{dados.id}</tr>    
                <tr>Entrada:{dados.entrada}</tr>
                <tr>Saida:{dados.saida}</tr> 
                <tr>Liquido:{dados.liquido}</tr> 
            </td>
        </div>
    )
}
export default DetalheEntradaSaida