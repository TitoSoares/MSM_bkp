
type Props={
    dados:{
        nomeCliente:string
        telefone:string
        data:string
    }
}

function DetalheHistorico({dados}:Props){
    return(
        <div className="DivLista">
            <div className="listas">Nome:{dados.nomeCliente} <br /> Telefone:{dados.telefone} <br /> Data:{dados.data}</div>
        </div>  
    )
}
export default DetalheHistorico