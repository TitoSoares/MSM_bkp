
import FuncaoCabecalho from "../Componentes/Cabecalho"
import DetalheRelatorio from "../Componentes/detalhes/detalheRelatorio"

let lista=[
    {id:"",entrada:'100', saida:'100',liquido:""},
    {id:"",entrada:'100', saida:'100',liquido:""},
    {id:"",entrada:'100', saida:'100',liquido:""},
    {id:"",entrada:'100', saida:'100',liquido:""},
    {id:"",entrada:'100', saida:'100',liquido:""},
    {id:"",entrada:'100', saida:'100',liquido:""},
    {id:"",entrada:'100', saida:'100',liquido:""}
]
function Relatorio(){
    return(
        <div className="planoFundoLogin">
            <FuncaoCabecalho caminho={"Relátorio"}/>
                <div className="listagem">
                    {lista.map((item, index)=>(
                    <DetalheRelatorio key={index} dados={item}/>
                    ))}
                </div>
        </div>
    )
}
export default Relatorio