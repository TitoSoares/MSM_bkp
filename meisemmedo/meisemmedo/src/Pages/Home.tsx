import FuncaoCabecalho from "../Componentes/Cabecalho";
import "../Componentes/estyle/estilo.css"
function Home(){
    return(
        <div className="planoFundoLogin">
            <FuncaoCabecalho caminho={"Home"}/>
            <div className="home">
                <div className="quemsomos">
                    <div className="escritaQuemSomos">Quem somos..?</div>
                    <div className="imgQuemsomos"></div>
                </div>
                <br /><br />
                <div className="meiSemMedo">MEI Sem Medo</div>
                <div className="textoMei">
                    <div className="txtMEI"><br /><br />Bem-vindo ao [Nome do Site], onde estamos dedicados a transformar<br/> sonhos em realidade.Fundado em [ano de fundação], nossa missão é conectar você<br/> aos recursos necessários para simplificar e tornar possível<br/> seus objetivos, seja [descrição do objetivo 1] ou [descrição do objetivo 2].<br/> Oferecemos uma gama abrangente de ferramentas e recursos, desde<br/> [descrição do recurso 1] até [descrição do recurso 2], com o compromisso de garantir<br/> sua satisfação e sucesso. Estamos aqui para simplificar, apoiar<br/> e guiar você em cada passo do caminho, conectando-o ao seu potencial máximo.<br/> Entre em contato conosco a qualquer momento para obter suporte, esclarecer<br/> dúvidas ou compartilhar suas ideias. Obrigado por escolher [Nome do Site],<br/> onde juntos vamos transformar seus sonhos em realidade.</div>
                    <div className="imgMEI"></div>
                </div>
               <div className="textofinal">Se interessou?<br />Cadastre-se já</div>
               <div className="botaoLogar_Cadastrar">
                    <div className="DivbotaoLogin"><button className="botao1">LOGIN</button></div>
                    <div className="DivbotaoCadastro"><button className="botao2">CADASTRAR</button></div>
               </div>
            </div>
        </div>
    )
}
export default Home;