
type Props={
    dados:{
        nomeCliente:string
        data:string
    }
}

function DetalheHistorico({dados}:Props){
    return(
        <div>
            <div>
                <div>Nome:{dados.nomeCliente} Data:{dados.data}</div>
            </div>
        </div>
    )
}
export default DetalheHistorico