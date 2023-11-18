import FuncaoCabecalho from "../Componentes/Cabecalho"
import "../Componentes/estyle/estilo.css"
function Cadastro(){
    return(
        <div className="planoFundo">
            <FuncaoCabecalho/>
            <div className="formatacaoCadastro">
                <div className="imagemLogo"></div>
                <div className="cadastro">
                    <div className="elementoCadastro">CPF:</div>
                    <div className="elementoCadastro">CNPJ:</div>
                </div>
                <div className="cadastro">
                    <div className="elementoCadastro">NOME COMPLETO:</div>
                    <div className="elementoCadastro">DATA DE NASCIMENTO:</div>
                </div>
                <div className="cadastro">
                    <div className="elementoCadastro">ESTADO CIVIL:</div>
                    <div className="elementoCadastro">FILHOS:</div>
                </div>
                <div className="cadastro">
                    <div className="elementoCadastro">PATRÍMONIO:</div>
                    <div className="elementoCadastro">COMPROVANTE DE RESIDENCIA:</div>
                </div>
                <div className="cadastro">
                    <div className="elementoCadastro">GÊNERO:</div>
                    <div className="elementoCadastro">ALTURA:</div>
                </div>
            </div>
        </div>
    )
}
export default Cadastro