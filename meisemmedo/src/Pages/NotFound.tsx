import { useNavigate } from "react-router-dom";
import "../Componentes/estyle/estilo.css"

function NotFound(){

    const navigate = useNavigate();
    function handleClick(){
        navigate('/');
    }
    return(
        <div>
            <div>Não Encontrado</div>
            <div><button onClick={handleClick}>Home</button></div>
        </div>
    )
}
export default NotFound;