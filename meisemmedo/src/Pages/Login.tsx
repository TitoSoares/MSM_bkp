import FuncaoCabecalho from "../Componentes/Cabecalho"
import "../Componentes/estyle/estilo.css"
function Login(){
    return(
        <div className="planoFundoLogin">
            <div className="logincoluna">

                <div className="textologin">
                    <div className="fundoTexto">
                    MEI SEM MEDO 
    Um portal para desmestificar seu negócio
    <div className="img"></div>
                    </div>
                </div>
                <div className="login">
                    <div className="imagemLogin"></div>
                    <div className="elementoLogin">Login</div>
                    <div className="elementoLogin">Senha</div>

                    <div className="funLogin">
                        <div className="botaoLogin">Logar</div>
                        <div className="botaoCancel">Cancelar</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Login