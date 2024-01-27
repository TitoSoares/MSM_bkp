
type Props={
    dados:{
        id:string
        data:string
        hora:string
        atividade:string
    }
}

function DetalheHistorico({dados}:Props){
    return(
        <div className="lista">
            <td>
                <tr>ID:{dados.id}</tr>
                <tr>Data de atendimento:{dados.data}</tr>
                <tr>Horario de atendimento:{dados.hora}</tr>
                <tr>Atividade realizada:{dados.atividade}</tr>
            </td>
        </div>  
    )
}
export default DetalheHistorico