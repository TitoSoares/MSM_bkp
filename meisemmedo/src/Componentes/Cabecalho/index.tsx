import "../estyle/estilo.css"
import Menu from "../Menu";

function FuncaoCabecalho(){
    return(
         <div className="cabecalho">
            <Menu/>
            <div className="imagemMenu"></div>
         </div>
    )
}

export default FuncaoCabecalho;