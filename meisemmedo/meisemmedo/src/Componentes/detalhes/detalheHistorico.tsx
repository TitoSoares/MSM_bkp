
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
            <ul className="tiraFormatacao">
                <li>ID:{dados.id}</li>
                <li>Data de atendimento:{dados.data}</li>
                <li>Horario de atendimento:{dados.hora}</li>
                <li>Atividade realizada:{dados.atividade}</li>
            </ul>
        </div>  
    )
}
export default DetalheHistorico