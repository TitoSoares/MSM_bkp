import { useState } from "react";

function State(){
    const [numero,setNumero]=useState(0);

    


function handleButtonSoma(){
    setNumero(numero+1)
}
function handleButtonSubstrai(){
    setNumero(numero-1)
}

    return(
        <div>
            Pagina sobre state <br /><br /><br />
            <button onClick={handleButtonSoma}>+</button>
            <button onClick={handleButtonSubstrai}>-</button>
            Meu numero é={numero}
        </div>
    )
}
export default State;