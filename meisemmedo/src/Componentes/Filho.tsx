type Props={
    OnClickButtonFN:(retorno:String)=>void
    OnClickBotton2:(retorno:String)=>void
}

function Filho(Parametros:Props){

    function buttonEventAction(){
        Parametros.OnClickButtonFN("Retorno para o filho")
    }
    function buttonEvent2(){
        Parametros.OnClickBotton2("Retorno para o filho 2")
    }

    return(
        <div>
            Elemento Filho
            <br />
            <button onClick={buttonEventAction}>Botao 1</button>
            <button onClick={buttonEvent2}>Botao 2</button>
        </div>
    )
}
export default Filho;