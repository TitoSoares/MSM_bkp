import FuncaoCabecalho from "../Componentes/Cabecalho"
import "../Componentes/estyle/estilo.css"
import { useState } from "react";

function Cadastro(){

    const [nome, setNome]=useState("")
    const [email, setEmail]=useState("")
    const [cpf, setCpf]=useState("")
    const [cnpj, setCnpj]=useState("")
    const [data, setData]=useState("")
    const [senha, setSenha]=useState("")
    const [senhaConfirmacao, setSenhaConfirmacao]=useState("")
    
    function handleNomeInput(event: React.ChangeEvent<HTMLInputElement>) {
        setNome(event.target.value);
    }
    function handleEmailInput(event: React.ChangeEvent<HTMLInputElement>) {
        setEmail(event.target.value);
    }
    function handleCpfInput(event: React.ChangeEvent<HTMLInputElement>) {
        setCpf(event.target.value);
    }
    function handleCnpjInput(event: React.ChangeEvent<HTMLInputElement>) {
        setCnpj(event.target.value);
    }
    function handleDataInput(event: React.ChangeEvent<HTMLInputElement>) {
        setData(event.target.value);
    }
    function handleSenhaInput(event: React.ChangeEvent<HTMLInputElement>) {
        setSenha(event.target.value);
    }
    function handleSenhaConfirmacaoInput(event: React.ChangeEvent<HTMLInputElement>) {
        setSenhaConfirmacao(event.target.value);
    }
    return(
        <div className="planoFundo">
            <FuncaoCabecalho caminho={"Home/Cadastro"}/>
            <div className="formatacaoCadastro">
                <div className="imagemLogo"></div>
                    <div className="cadastro">
                        <div className="elementoCadastro">Nome:<input type="text" value={nome} onChange={handleNomeInput}  className="caixaCadastro"></input></div>
                        <div className="elementoCadastro">Email:<input type="text" value={email} onChange={handleEmailInput}  className="caixaCadastro"></input></div>
                        <div className="elementoCadastro">Cpf:<input type="type" value={cpf} onChange={handleCpfInput}  className="caixaCadastro"></input></div>
                        <div className="elementoCadastro">Cnpj:<input type="type" value={cnpj} onChange={handleCnpjInput}  className="caixaCadastro"></input></div>
                        <div className="elementoCadastro">Data de nascimento:<input type="text" value={data} onChange={handleDataInput} className="caixaCadastro"></input></div>
                        <div className="elementoCadastro">Senha:<input type="text" value={senha} onChange={handleSenhaInput}  className="caixaCadastro"></input></div>
                        <div className="elementoCadastro">Confirmar senha:<input type="text" value={senhaConfirmacao} onChange={handleSenhaConfirmacaoInput}  className="caixaCadastro"></input></div>
                    </div>
            </div>
        </div>
    )
}
export default Cadastro