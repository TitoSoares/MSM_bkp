import { useState } from "react";
import "../Componentes/estyle/estilo.css"

function Entrada_Saida(){

    const[entrada, setEntrada]=useState("")
    const[saida, setSaida]=useState("")

    function handleEntradaInput(event:React.ChangeEvent<HTMLInputElement>){
        setEntrada(event.target.value)
    }
    function handleSaidaInput(event:React.ChangeEvent<HTMLInputElement>){
        setSaida(event.target.value)
    }


    return(
        <div>
            <div>Coloque o total das entradas:<input type="text" value={entrada} onChange={handleEntradaInput}></input></div>
            <div>Coloque o total das saídas:<input type="text" value={saida} onChange={handleSaidaInput}></input></div>
        </div>
    )
}
export default Entrada_Saida