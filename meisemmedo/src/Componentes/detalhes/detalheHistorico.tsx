
type Props={
    dados:{
        nomeCliente:string
        data:string
        telefone:string
    }
}

function DetalheHistorico({dados}:Props){
    return(
        <div>
            <div>
                <div>Nome:{dados.nomeCliente} Telefone:{dados.telefone} Data:{dados.data}</div>
            </div>
        </div>
    )
}
export default DetalheHistorico