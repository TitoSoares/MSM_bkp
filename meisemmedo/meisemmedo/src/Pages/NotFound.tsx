import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Componentes/estyle/estilo.css"

function NotFound(){

    const navigate = useNavigate();
    function handleClick(){
        navigate('/');
    }
    const[show,setShow]=useState(false);
    function handleClickShow(){
        if(show){
            setShow(false)
        }else{
            setShow(true)
        }
    }
    return(
        <div>
            <div>Não Encontrado</div>
            <div><button onClick={handleClick}>Home</button></div>
            <button onClick={handleClickShow}>{show?"Ocultar":"Mostrar"}</button>
            {show===true &&
            <div>Esse texto só será exibido se o show for "True"</div>
            }
        </div>
    )
}
export default NotFound;