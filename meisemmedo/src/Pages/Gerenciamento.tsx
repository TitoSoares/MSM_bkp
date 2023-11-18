import FuncaoCabecalho from "../Componentes/Cabecalho";
import "../Componentes/estyle/estilo.css"
function Gerenciamento(){
    return(
        <div className="planoFundo">
            <FuncaoCabecalho/>
            <div className="caixaFuncGen">Nota Fiscal</div>
            <div className="caixaFuncGen">Imposto de Renda</div>
            <div className="caixaFuncGen">Calculo de Imposto</div>
            <div className="caixaFuncGen">Caixa</div>
            <div className="caixaFuncGen">Relátorio mensal/anual</div>
            <div className="caixaFuncGen">Estoque</div>
        </div>
    )
}
export default Gerenciamento;