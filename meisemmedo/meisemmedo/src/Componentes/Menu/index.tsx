import { Link } from "react-router-dom";
function Menu(){
    return(
        <div>
            <div className="menusao">
                <div className="espacoEntreMenu"><Link className="Link" to="/"><div className="menu">Home</div></Link></div>
                <div className="espacoEntreMenu"><Link className="Link" to="/tutorial"><div className="menu">Como criar uma MEI?</div></Link></div>
                <div className="espacoEntreMenu"><Link className="Link" to="/gov"><div className="menu">Funções Gov</div></Link></div>
                <div className="espacoEntreMenu"><Link className="Link" to="/gen"><div className="menu">Gerenciamentos</div></Link></div>
            </div>
        </div>
    )
}
export default Menu;