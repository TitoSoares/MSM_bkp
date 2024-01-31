import { Link } from "react-router-dom"
import FuncaoCabecalho from "../Componentes/Cabecalho"
import "../Componentes/estyle/estilo.css"
function Tutorial(){
    return(
        <div className="planoFundo">
            <FuncaoCabecalho caminho={"Home/Tutorial"}/>
            <div className="paginaTutorial">
                <div className="primeiraImag"></div>
                <div className="segundaImag"></div>
            </div>
            <div className="txtTutorial">Já é MEI?<br /> Na página Funções Gov redirecionaremos você até as principais funções do Gov.br</div>
            <Link className="Link" to='/gov'><button className="botaoFunGov">Ir para Função Gov</button></Link>
        </div>
    )
}
export default Tutorial