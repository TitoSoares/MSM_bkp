import FuncaoCabecalho from "../Componentes/Cabecalho"
import DetalheAgenda from "../Componentes/detalhes/detalheAgenda"
import CompAgendaServ from "../ComponentesGerenciamento/CompAgendaServ"

let lista=[
    {nome:"Cliente1",dia:"Segunda", hora:"14:00"},
    {nome:"Cliente2",dia:"Terça", hora:"16:30"},
    {nome:"Cliente3",dia:"Quarta", hora:"18:00"},
    {nome:"Cliente4",dia:"Quinta", hora:"20:30"},
    {nome:"Cliente5",dia:"Sexta", hora:"08:00"},
    {nome:"Cliente6",dia:"Sexta", hora:"09:30"},
    {nome:"Cliente7",dia:"Sabado", hora:"11:00"}
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