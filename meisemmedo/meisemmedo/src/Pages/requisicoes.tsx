import { useEffect, useState } from "react"
import { Produto } from "../Types/produto"

function Requisicoes(){
    const[produtos, setProdutos]=useState<Produto[]>([])
    const[loading, setLoading]=useState(false)
    useEffect(()=>{

    },[])
    const carregarProdutos= async ()=>{
        try{
        setLoading(true)
        let response=await fetch("https://fakestoreapi.com/products")
        let json=await response.json();
        const dataArray=Array.isArray(json)?json:[json]
        setLoading(false)
        setProdutos(dataArray)
        }catch(e){
            setLoading(false)
            alert("Errouu!")
            console.error(e)
        }
    }
    return(
        <div>
            {loading &&
            <div>Carregando o conteudo desejado</div>
            }
            {!loading &&
            <div>
                <button onClick={carregarProdutos}>Carregar Produtos</button><br/>
                {produtos.map((item, index)=>(
                    <div key={index}>
                        <img src={item.image} className="requisicoes"/>
                        {item.title} <br />
                        {item.description} <br />
                    </div>
                ))}
            </div>
            }
        </div>
        
    )
}
export default Requisicoes;