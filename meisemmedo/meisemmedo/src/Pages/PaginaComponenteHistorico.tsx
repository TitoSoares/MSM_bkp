import FuncaoCabecalho from "../Componentes/Cabecalho"
import DetalheHistorico from "../Componentes/detalhes/detalheHistorico"
import CompHistServ from "../ComponentesGerenciamento/CompHistServ"

let lista=[
    {nomeCliente:"Cliente1",telefone:"", data:"10/10/2023"},
    {nomeCliente:"Cliente2",telefone:"", data:"30/11/2023"},
    {nomeCliente:"Cliente3",telefone:"", data:"20/11/2023"},
    {nomeCliente:"Cliente4",telefone:"", data:"10/11/2023"},
    {nomeCliente:"Cliente5",telefone:"", data:"30/12/2023"},
    {nomeCliente:"Cliente6",telefone:"", data:"20/12/2023"},
    {nomeCliente:"Cliente7",telefone:"", data:"10/12/2023"}
]
function Historico(){
    return(
        <div className="planoFundoLogin">
            <FuncaoCabecalho caminho={"Historico"}/>
            <CompHistServ/><br />
            <div className="DivLista">
                {lista.map((item, index)=>(
                <div className="listas"><DetalheHistorico key={index} dados={item}/></div>
                ))}
            </div>  
        </div>
    )
}
export default Historico