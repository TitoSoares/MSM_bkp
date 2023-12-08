import FuncaoCabecalho from "../Componentes/Cabecalho"
import DetalheAgenda from "../Componentes/detalhes/detalheAgenda"
import CompAgendaServ from "../ComponentesGerenciamento/CompAgendaServ"

let lista=[
    {nome:"Cliente1",hora:"14:00"},
    {nome:"Cliente2",hora:"16:30"},
    {nome:"Cliente3",hora:"18:00"},
    {nome:"Cliente4",hora:"20:30"},
    {nome:"Cliente5",hora:"08:00"},
    {nome:"Cliente6",hora:"09:30"},
    {nome:"Cliente7",hora:"11:00"}
]

function Agenda(){
    return(
        <div className="planoFundoLogin">
        <FuncaoCabecalho caminho={"Agenda"}/>
        <CompAgendaServ/><br />
            <div className="DivLista">
                {lista.map((item, index)=>(
                    <div className="listas">
                        <DetalheAgenda key={index} dados={item}/>
                    </div>
                ))}
            </div>  
        </div>
        
    )
}
export default Agenda