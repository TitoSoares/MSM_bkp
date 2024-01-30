import FuncaoCabecalho from "../Componentes/Cabecalho"
import CompEntra_Saida from "../ComponentesGerenciamento/CompEntra_Saida"

function EntradaSaida(){
    return(
        <div className="planoFundoLogin">
        <FuncaoCabecalho caminho={"Entrada e Saida"}/>
        <CompEntra_Saida/><br/>  
        </div>
    )
}
export default EntradaSaida