import FuncaoCabecalho from "../Componentes/Cabecalho"
import DetalheHistorico from "../Componentes/detalhes/detalheHistorico"
import CompHistServ from "../ComponentesGerenciamento/CompHistServ"

let lista=[
    {nomeCliente:"Cliente1",telefone:"14141", data:"10/10/2023"},
    {nomeCliente:"Cliente2",telefone:"14144", data:"30/11/2023"},
    {nomeCliente:"Cliente3",telefone:"47474", data:"20/11/2023"},
    {nomeCliente:"Cliente4",telefone:"585858", data:"10/11/2023"},
    {nomeCliente:"Cliente5",telefone:"696969", data:"30/12/2023"},
    {nomeCliente:"Cliente6",telefone:"36363", data:"20/12/2023"},
    {nomeCliente:"Cliente7",telefone:"56545", data:"10/12/2023"}
]
function Historico(){
    return(
        <div className="planoFundoLogin">
            <FuncaoCabecalho caminho={"Historico"}/>
            <CompHistServ/><br />
            <div>
                {lista.map((item, index)=>(  
                    <div><DetalheHistorico key={index} dados={item}/></div>
                ))}
            </div>  
        </div>
    )
}
export default Historico