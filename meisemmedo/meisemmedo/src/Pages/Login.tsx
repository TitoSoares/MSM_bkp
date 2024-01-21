import { useState } from "react"
import FuncaoCabecalho from "../Componentes/Cabecalho"
import "../Componentes/estyle/estilo.css"
function Login(){
    const[login,setLogin]=useState("")
    const[senha,setSenha]=useState("")

    function handleLoginInput(event: React.ChangeEvent<HTMLInputElement>) {
        setLogin(event.target.value);
    }
    function handleSenhaInput(event: React.ChangeEvent<HTMLInputElement>) {
        setSenha(event.target.value);
    }

    return(
            <div className="logincoluna">
                <div className="escritaMEI">
                    <div className="fundoTexto">
                        <div className="txt1">MEI SEM MEDO</div><br/>
                        <div className="txt2">
                            Desvende o caminho do empreendedorismo com confiança, sem medos, sem barreiras. <br /> Transformando sonhos em negócios reais, facilitando sua jornada para o sucesso
                        </div>
                        <div className="txt3"> Seu negócio, nossa missão, sem limites para suas conquistas</div>
                    </div>
                    <div className="img"></div>
                </div>
                <div className="login">
                    <div className="imagemLogin"></div>
                    <div className="elementoLogin">Login: <input type="text" value={login} onChange={handleLoginInput} className="caixaLogin"></input></div>
                    <div className="elementoLogin">Senha: <input type="text" value={senha} onChange={handleSenhaInput} className="caixaLogin"></input></div>
                    <div className="funLogin">
                        <div className="botaoLogin"><div className="txtBotao">Logar</div></div>
                        <div className="botaoCancel"><div className="txtBotao">Cancelar</div></div>
                    </div>
                </div>
            </div>
    )
}
export default Login