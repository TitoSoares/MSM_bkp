
type Props={
    dados:{
        nome:string
        hora:string
    }
}

function DetalheAgenda({dados}:Props){
    return(
        <div>
            <div>
                <div>Nome:{dados.nome} Hora:{dados.hora}</div>
            </div>
        </div>
    )
}
export default DetalheAgenda