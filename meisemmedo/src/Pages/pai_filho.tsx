import FuncaoCabecalho from "../Componentes/Cabecalho";
import Pai from "../Componentes/Pai";

function Pai_filho(){
    return(
        <div>
            <FuncaoCabecalho caminho={"Pai e Filho"}/>
            <Pai/>
        </div>
    )
}
export default Pai_filho;