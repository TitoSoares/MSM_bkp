import FuncaoCabecalho from "../Componentes/Cabecalho"
import DetalheEntradaSaida from "../Componentes/detalhes/detalherEntrada.Saida"
import CompEntra_Saida from "../ComponentesGerenciamento/CompEntra_Saida"


let lista=[
    {entrada:'100', saida:'100'},
    {entrada:'100', saida:'100'},
    {entrada:'100', saida:'100'},
    {entrada:'100', saida:'100'},
    {entrada:'100', saida:'100'},
    {entrada:'100', saida:'100'},
    {entrada:'100', saida:'100'}
]

function EntradaSaida(){

    return(
        <div className="planoFundoLogin">
        <FuncaoCabecalho caminho={"Entrada e Saida"}/>
        <CompEntra_Saida/><br />
        <div className="DivLista">
                {lista.map((item, index)=>(
                <div className="listas"><DetalheEntradaSaida key={index} dados={item}/></div>
                ))}
            </div>  
        </div>
    )
}
export default EntradaSaida