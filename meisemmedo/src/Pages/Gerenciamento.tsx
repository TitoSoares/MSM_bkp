import FuncaoCabecalho from "../Componentes/Cabecalho";
import "../Componentes/estyle/estilo.css"
import CompAgendaServ from "../ComponentesGerenciamento/CompAgendaServ";
import CompEntra_Saida from "../ComponentesGerenciamento/CompEntra_Saida";
import CompHistServ from "../ComponentesGerenciamento/CompHistServ";
import CompRelatMen from "../ComponentesGerenciamento/CompRelatMen";
function Gerenciamento(){
    
    return(
        <div className="planoFundo">
            <FuncaoCabecalho caminho={"Home/Gerenciamento"}/>
            <div className="caixaFuncGen"><CompHistServ/></div>
            <div className="caixaFuncGen"><CompRelatMen/></div>
            <div className="caixaFuncGen"><CompEntra_Saida/></div>
            <div className="caixaFuncGen">Agendamento<CompAgendaServ/></div>
        </div>
    )
}
export default Gerenciamento;