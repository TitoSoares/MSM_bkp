import React, { useState } from "react";
function HistoricoServicos(){

    const[cliente, setCliente]=useState("")

    function handleClienteInput(event:React.ChangeEvent<HTMLInputElement>){
        setCliente(event.target.value)
    }

    return(
        <div>
            <div>Coloque o ID do cliente:<input type="text" value={cliente} onChange={handleClienteInput}></input></div>
        </div>
    )
}
export default HistoricoServicos