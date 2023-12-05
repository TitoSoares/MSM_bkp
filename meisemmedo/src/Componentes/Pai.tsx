import Filho from "./Filho";

function Pai(){
    function buttonEventAction(txt:String){
        alert("Evento no pai "+txt)
    }
    function buttonEvent2(txt:String){
        alert("O segundo botão foi criado "+txt)
    }
    return(
        <div>
            Elemento Pai
            <hr />
            <Filho OnClickButtonFN={buttonEventAction} OnClickBotton2={buttonEvent2}/>
        </div>     
    )
}
export default Pai;