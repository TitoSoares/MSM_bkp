import { Link } from "react-router-dom";
function Menu(){
    return(
        <div>
            <div className="menusao">
                <Link className="Link" to="/"><div className="menu">Home</div></Link>
                <Link className="Link" to="/tutorial"><div className="menu">Como criar uma MEI?</div></Link>
                <Link className="Link" to="/gov"><div className="menu">Funções Gov</div></Link>
                <Link className="Link" to="/gen"><div className="menu">Gerenciamentos</div></Link>
            </div>
        </div>
    )
}
export default Menu;