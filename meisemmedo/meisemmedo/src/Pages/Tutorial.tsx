import FuncaoCabecalho from "../Componentes/Cabecalho"
import "../Componentes/estyle/estilo.css"
function Tutorial(){
    return(
        <div className="planoFundo">
            <FuncaoCabecalho caminho={"Home/Tutorial"}/>
            <div>
                Página para tutorial
            </div>
        </div>
    )
}
export default Tutorial