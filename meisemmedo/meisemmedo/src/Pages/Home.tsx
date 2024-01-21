import FuncaoCabecalho from "../Componentes/Cabecalho";
import "../Componentes/estyle/estilo.css"
function Home(){
    return(
        <div className="planoFundoLogin">
            <FuncaoCabecalho caminho={"Home"}/>
            <div className="home">
                <div className="quemsomos">
                Quem somos?
                </div>
                <div className="imgQuemsomos"></div>
            </div>
        </div>
    )
}
export default Home;