import "../Componentes/estyle/estilo.css"
import FuncaoCabecalho from "../Componentes/Cabecalho";

function FuncaoGov() {
  return (
    <div className="planoFundo">
      <FuncaoCabecalho caminho={"Home/FuncaoGov"}/>
        <div className="DivCenter">
          <div className="DivCenter">
            <div className="CaixaText"></div>
            <div className="CaixaText"></div>
            <div className="CaixaText"></div>
          </div>
          <div className="DivCenter">
            <div className="CaixaText"></div>
            <div className="CaixaText"></div>
            <div className="CaixaText"></div>
          </div>
        </div>
    </div>
  )
}

export default FuncaoGov;
