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
        setNome(event.target.value);
    }
    function handleCpfInput(event: React.ChangeEvent<HTMLInputElement>) {
        setNome(event.target.value);
    }
    function handleCnpjInput(event: React.ChangeEvent<HTMLInputElement>) {
        setNome(event.target.value);
    }
    function handleDataInput(event: React.ChangeEvent<HTMLInputElement>) {
        setNome(event.target.value);
    }
    function handleSenhaInput(event: React.ChangeEvent<HTMLInputElement>) {
        setNome(event.target.value);
    }
    function handleSenhaConfirmacaoInput(event: React.ChangeEvent<HTMLInputElement>) {
        setNome(event.target.value);
    }
    return(
        <div className="planoFundo">
            <FuncaoCabecalho caminho={"Home/Cadastro"}/>
            <div className="formatacaoCadastro">
                <div className="imagemLogo"></div>
                <div className="cadastro">
                    <div className="elementoCadastro">Nome:<input></input></div>
                    <div className="elementoCadastro">Nome:<input></input></div>
                </div>
                <div className="cadastro">
                    <div className="elementoCadastro">Nome:<input></input></div>
                    <div className="elementoCadastro">Nome:<input></input></div>
                </div>
                <div className="cadastro">
                    <div className="elementoCadastro">Nome:<input></input></div>
                    <div className="elementoCadastro">Nome:<input></input></div>
                </div>
                <div className="cadastro">
                    <div className="elementoCadastro">Nome:<input></input></div>
                    <div className="elementoCadastro">Nome:<input></input></div>
                </div>
                <div className="cadastro">
                    <div className="elementoCadastro">Nome:<input></input></div>
                    <div className="elementoCadastro">Nome:<input></input></div>
                </div>
            </div>
        </div>
    )
}
export default Cadastro