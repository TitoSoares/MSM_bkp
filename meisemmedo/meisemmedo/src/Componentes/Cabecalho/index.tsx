import { type } from "@testing-library/user-event/dist/type";
import "../estyle/estilo.css"
import Menu from "../Menu";
import { Link } from "react-router-dom";


function FuncaoCabecalho(){
    return(
        <div>
            <header>

                <div className="menu-container">
                    
                <div className="menu-item"><a href="#"><Link className="Link" to="/">Home</Link></a></div>
                    <div className="menu-item"><a href="#"><Link className="Link" to="/tutorial">Como criar uma MEI?</Link></a></div>
                    <div className="menu-item"><a href="#"><Link className="Link" to="/gov">Funções Gov</Link></a></div>
                    <div className="menu-item"><a href="#">Contato</a></div>
                </div>

            </header>

        </div>
    )
}

export default FuncaoCabecalho;