import { useState } from "react";
import "../Componentes/estyle/estilo.css"


function AgendaServicos(){

    const [nome, setNome]=useState("")
    const [data, setData]=useState("")
    const [hora, setHora]=useState("")

    function handleNomeAgendaInput(event:React.ChangeEvent<HTMLInputElement>){
        setNome(event.target.value)
    }
    function handleDataAgendaInput(event:React.ChangeEvent<HTMLInputElement>){
        setData(event.target.value)
    }
    function handleHoraAgendaInput(event:React.ChangeEvent<HTMLInputElement>){
        setHora(event.target.value)
    }

    return(
        <div className="ConfComponentes">
            <div>Nome do Cliente:<input type="text" value={nome} onChange={handleNomeAgendaInput}></input></div>
            <div>Dia:<input type="text" value={data} onChange={handleDataAgendaInput}></input></div>
            <div>Horário:<input type="text" value={hora} onChange={handleHoraAgendaInput}></input></div>
            
        </div>
    )
}
export default AgendaServicos