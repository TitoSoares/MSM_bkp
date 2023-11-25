import FuncaoCabecalho from "../Componentes/Cabecalho";
import "../Componentes/estyle/estilo.css"
function Gerenciamento(){
    return(
        <div className="planoFundo">
            <FuncaoCabecalho caminho={"Home/Gerenciamento"}/>
            <div className="caixaFuncGen">Nota Fiscal</div>
            <div className="caixaFuncGen">Imposto de Renda</div>
            <div className="caixaFuncGen">Calculo de Imposto</div>
            <div className="caixaFuncGen">Caixa</div>
            <div className="caixaFuncGen">Relátorio mensal/anual</div>
        </div>
    )
}
export default Gerenciamento;