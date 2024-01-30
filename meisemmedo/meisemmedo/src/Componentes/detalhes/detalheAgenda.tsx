
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
        <div className="agenda">
                <ul className="Formatacaolista">
                    <li>Nome:{dados.id}</li>
                    <li>Data:{dados.data}</li>
                    <li>Hora:{dados.hora}</li>
                    <li>Atividade:{dados.atividade}</li>
                </ul>
        </div>
    )
}
export default DetalheAgenda