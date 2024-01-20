
type Props={
    dados:{
        nome:string
        hora:string
        dia:string
    }
}

function DetalheAgenda({dados}:Props){
    return(
        <div>
            <div>
                <div>Nome:{dados.nome} Dia:{dados.dia} Hora:{dados.hora}</div>
            </div>
        </div>
    )
}
export default DetalheAgenda