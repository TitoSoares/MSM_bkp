type Props={
    dados:{
        entrada:String
        saida:String
    }
}

function DetalheEntradaSaida({dados}: Props){
    return(
        <div>
            <div>         
                    Entrada:{dados.entrada} Saida:{dados.saida}
            </div>
        </div>
    )
}
export default DetalheEntradaSaida