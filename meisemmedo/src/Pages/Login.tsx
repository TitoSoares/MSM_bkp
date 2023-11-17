import FuncaoCabecalho from "../Componentes/Cabecalho"
import "../Componentes/estyle/estilo.css"
function Login(){
    return(
        <div>
        <FuncaoCabecalho/>
            <div className="login">
                <div className="elementoLogin"></div>
                <div className="elementoLogin"></div>
                <div className="funLogin">
                    <div className="botaoLogin">Login</div>
                    <div className="botaoCancel">Carcelar</div>
                </div>
            </div>
        </div>
    )
}
export default Login