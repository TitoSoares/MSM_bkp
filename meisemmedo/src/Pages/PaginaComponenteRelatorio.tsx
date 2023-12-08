
import FuncaoCabecalho from "../Componentes/Cabecalho"
import DetalheRelatorio from "../Componentes/detalhes/detalheRelatorio"

let lista=[
    {entrada:"100", saida:"100"}
]
function Relatorio(){
    return(
        <div className="planoFundoLogin">
            <FuncaoCabecalho caminho={"Relátorio"}/>
            <div className="DivLista">
                {lista.map((item, index)=>(
                <div className="listas"><DetalheRelatorio key={index} dados={item}/></div>
              ))}
            </div>  
        </div>
    )
}
export default Relatorio