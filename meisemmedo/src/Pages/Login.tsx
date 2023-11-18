import FuncaoCabecalho from "../Componentes/Cabecalho"
import "../Componentes/estyle/estilo.css"
function Login(){
    return(
        <div className="planoFundo">
            <div className="logincoluna">
                <div className="textologin">
                    <div>
                        Mei Sem Medo <br/>
                        <br/>
                    </div>
                    <div>
                        Um Portal para <br />
                        desmestificar <br />
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