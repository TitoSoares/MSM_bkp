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
        </div>
    )
}
export default Tutorial