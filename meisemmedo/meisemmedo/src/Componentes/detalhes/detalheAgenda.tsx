
type Props={
    dados:{
        id:string
        data:string
        hora:string
        atividade:string
    }
}

function DetalheAgenda({dados}:Props){
    return(
        <div className="lista">
                <td>
                    <tr>Nome:{dados.id}</tr>
                    <tr>Data:{dados.data}</tr>
                    <tr>Hora:{dados.hora}</tr>
                    <tr>Atividade:{dados.atividade}</tr>
                </td>
        </div>
    )
}
export default DetalheAgenda