import { type } from "@testing-library/user-event/dist/type";
import "../estyle/estilo.css"
import Menu from "../Menu";
type propriedade={
    caminho:String;
}

function FuncaoCabecalho(lucas : propriedade){
    return(<div>
            <div className="cabecalho">
                <Menu/>
                <div className="imagemMenu"></div>
            </div>
            <div>O caminho é:{lucas.caminho}</div>
         </div>
    )
}

export default FuncaoCabecalho;