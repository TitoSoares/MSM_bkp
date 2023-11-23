import FuncaoCabecalho from "../Componentes/Cabecalho"
import "../Componentes/estyle/estilo.css"
function Login(){
    return(
        <div className="planoFundoLogin">
            <div className="logincoluna">
                <div className="textologin">
                    <div className="textoLogin1">
                        Mei Sem Medo
                    </div>
                    <div className="textoLogin2">
                        Um Portal para
                    </div>
                    <div className="textoLogin3">    
                        desmestificar 
                        seu negócio.
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