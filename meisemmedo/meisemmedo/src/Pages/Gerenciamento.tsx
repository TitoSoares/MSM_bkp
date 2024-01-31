import FuncaoCabecalho from "../Componentes/Cabecalho";
import "../Componentes/estyle/estilo.css"
import { Link } from "react-router-dom";
function Gerenciamento(){
    
    return(
        <div className="planoFundoInfinito">
            <FuncaoCabecalho caminho={"Home/Gerenciamento"}/>
            <Link className="Link" to="/historico"><div className="caixaFuncGen">Historico de serviços</div></Link>
            <Link className="Link" to="/relatorio"><div className="caixaFuncGen">Relatorio Mensal</div></Link>
            <Link className="Link" to="/entrada_saida"><div className="caixaFuncGen">Entrada/Saida</div></Link>
            <Link className="Link" to="/agenda"><div className="caixaFuncGen">Agendamento</div></Link>
        </div>
    )
}
export default Gerenciamento;