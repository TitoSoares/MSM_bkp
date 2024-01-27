import FuncaoCabecalho from "../Componentes/Cabecalho"
import DetalheEntradaSaida from "../Componentes/detalhes/detalherEntrada.Saida"
import CompEntra_Saida from "../ComponentesGerenciamento/CompEntra_Saida"


let lista=[
    {id:"",entrada:'100', saida:'100',liquido:""},
    {id:"",entrada:'100', saida:'100',liquido:""},
    {id:"",entrada:'100', saida:'100',liquido:""},
    {id:"",entrada:'100', saida:'100',liquido:""},
    {id:"",entrada:'100', saida:'100',liquido:""},
    {id:"",entrada:'100', saida:'100',liquido:""},
    {id:"",entrada:'100', saida:'100',liquido:""}
]

function EntradaSaida(){

    return(
        <div className="planoFundoLogin">
        <FuncaoCabecalho caminho={"Entrada e Saida"}/>
        <CompEntra_Saida/><br />
        <div className="listagem">
                {lista.map((item, index)=>(
                <DetalheEntradaSaida key={index} dados={item}/>
                ))}
            </div>  
        </div>
    )
}
export default EntradaSaida