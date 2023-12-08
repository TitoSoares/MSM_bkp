import React, { useState } from "react";
function HistoricoServicos(){

    const[cliente, setCliente]=useState("")
    const[tel, setTelefone]=useState("")
    const[data, setData]=useState("")

    function handleClienteInput(event:React.ChangeEvent<HTMLInputElement>){
        setCliente(event.target.value)
    }
    function handleTelefoneInput(event:React.ChangeEvent<HTMLInputElement>){
        setTelefone(event.target.value)
    }
    function handleDataInput(event:React.ChangeEvent<HTMLInputElement>){
        setData(event.target.value)
    }

    return(
        <div>
            <div>Coloque o nome do cliente:<input type="text" value={cliente} onChange={handleClienteInput}></input></div>
            <div>Coloque o telefone do cliente:<input type="text" value={tel} onChange={handleTelefoneInput}></input></div>
            <div>Coloque a data de atendimento:<input type="text" value={data} onChange={handleDataInput}></input></div>
        </div>
    )
}
export default HistoricoServicos