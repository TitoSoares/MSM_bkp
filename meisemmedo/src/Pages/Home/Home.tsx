import "../../Componentes/estyle/estilo.css"
import FuncaoCabecalho from "../../Componentes/Cabecalho";

function Home() {
  return (
    <div className="App">
      <FuncaoCabecalho/>
      <div className="TextoCentral">Não sabe como começar? Comece por aqui!</div>
        <div className="DivCenter">
          <div className="CaixaText"></div>
          <div className="CaixaText"></div>
          <div className="CaixaText"></div>
          <div className="CaixaText"></div>
          <div className="CaixaText"></div>
          <div className="CaixaText"></div>
        </div>
    </div>
  )
}

export default Home;
